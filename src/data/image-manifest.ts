import rawManifest from './image-manifest.json' with { type: 'json' };

export interface MissionImage {
  file: string;
  bytes: number;
  title: string;
  center?: string;
  photographer?: string;
  description: string;
  date: string;
  source: string;
  sourceUrl: string;
}

export interface MissionManifestEntry {
  dir: string;
  images: MissionImage[];
}

export interface ImageManifest {
  [key: string]: MissionManifestEntry;
}

export const imageManifest: ImageManifest = rawManifest as ImageManifest;

export type { MissionImage as MissionImageData };