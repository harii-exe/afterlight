// Fetch authentic NASA images for each mission via the public NASA Image API.
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'public', 'img');
const MANIFEST = path.join(__dirname, 'src', 'data', 'image-manifest.json');

const MISSIONS = {
  apollo11:   { dir: 'apollo11',   queries: ['apollo 11 lunar module eagle descent stage', 'apollo 11 lunar surface'] },
  surveyor3:  { dir: 'surveyor3',  queries: ['surveyor 3 lunar surface', 'surveyor iii lunar'] },
  viking1:    { dir: 'viking1',    queries: ['viking 1 mars lander', 'Viking Lander 1 Mars'] },
  pathfinder: { dir: 'pathfinder', queries: ['mars pathfinder sojourner rover', 'Mars Pathfinder Lander'] },
  spirit:     { dir: 'spirit',     queries: ['spirit mars rover', 'Spirit rover mars'] },
  opportunity:{ dir: 'opportunity',queries: ['opportunity mars rover', 'Opportunity rover mars'] },
  phoenix:    { dir: 'phoenix',    queries: ['phoenix mars lander', 'Phoenix Lander Mars'] },
  voyager1:   { dir: 'voyager1',   queries: ['voyager 1', 'Voyager spacecraft'] },
  cassini:    { dir: 'cassini',    queries: ['cassini grand finale', 'Cassini spacecraft'] },
};

async function search(q) {
  const url = 'https://images-api.nasa.gov/search?q=' + encodeURIComponent(q) + '&media_type=image';
  const j = await fetch(url).then((r) => r.json());
  return (j.collection && j.collection.items) || [];
}

function pickImage(item) {
  const links = item.links || [];
  const hrefObj = links.find((l) => l && typeof l.href === 'string' && /\.(jpg|png)$/i.test(l.href));
  if (!hrefObj) return null;
  const d = item.data || [];
  return {
    href: hrefObj.href,
    title: d.find((x) => x.title)?.title || 'Untitled',
    center: d.find((x) => x.center)?.center,
    photographer: d.find((x) => x.photographer)?.photographer,
    description: d.find((x) => x.description)?.description,
    date: d.find((x) => x.date_created)?.date_created,
  };
}

async function download(href, dest) {
  const res = await fetch(href);
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, buf);
  return buf.length;
}

async function main() {
  const manifest = {};
  for (const [key, cfg] of Object.entries(MISSIONS)) {
    const dir = path.join(OUT, cfg.dir);
    fs.mkdirSync(dir, { recursive: true });
    const seen = new Set();
    const images = [];
    for (const q of cfg.queries) {
      if (images.length >= 6) break;
      const items = await search(q);
      for (const it of items) {
        if (images.length >= 6) break;
        const img = pickImage(it);
        if (!img) continue;
        if (seen.has(img.title)) continue;
        seen.add(img.title);
        const fname = 'img' + (images.length + 1) + '.jpg';
        const dest = path.join(dir, fname);
        try {
          const bytes = await download(img.href, dest);
          images.push({
            file: cfg.dir + '/' + fname,
            bytes,
            title: img.title,
            center: img.center,
            photographer: img.photographer,
            description: img.description,
            date: img.date,
            source: 'NASA Image and Video Library',
            sourceUrl: img.href,
          });
          console.log(key, 'OK', fname, img.title.slice(0, 46), bytes);
        } catch (e) {
          console.log(key, 'DL FAIL', img.title.slice(0, 46), e.message);
        }
      }
    }
    manifest[key] = { dir: cfg.dir, images };
    console.log('==', key, images.length, 'images');
  }
  fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));
  console.log('Manifest written to', MANIFEST);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});