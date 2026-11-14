import { useState, useEffect, useCallback } from 'react';

export type Route =
  | { page: 'home' }
  | { page: 'missions' }
  | { page: 'mission'; mission: string }
  | { page: 'explore' }
  | { page: 'discoveries' }
  | { page: 'about' };

export function parseHash(hash: string): Route {
  const clean = hash.replace(/^#\/?/, '').trim();
  if (clean === '' || clean === '/') return { page: 'home' };
  const parts = clean.split('/').filter(Boolean);

  if (parts[0] === 'missions') {
    if (parts[1]) return { page: 'mission', mission: parts[1] };
    return { page: 'missions' };
  }
  if (parts[0] === 'explore') return { page: 'explore' };
  if (parts[0] === 'discoveries') return { page: 'discoveries' };
  if (parts[0] === 'about') return { page: 'about' };

  return { page: 'home' };
}

export function useRoute(): [Route, (r: Route) => void] {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHash(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((r: Route) => {
    if (r.page === 'home') {
      window.location.hash = '/';
    } else if (r.page === 'mission') {
      window.location.hash = `/missions/${r.mission}`;
    } else {
      window.location.hash = `/${r.page}`;
    }
  }, []);

  return [route, navigate];
}
