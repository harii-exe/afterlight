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

export type HardwareClassification =
  | 'Intentionally Abandoned'
  | 'Decommissioned Equipment'
  | 'Failed Equipment'
  | 'Operational Spacecraft'
  | 'Completed Mission (Controlled Disposal)';

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  phase?: string;
}

export interface ScientificDiscovery {
  title: string;
  description: string;
  significance: string;
  todayImpact: string;
  tag: string;
}

export interface ThenVsNowData {
  thenTitle: string;
  thenText: string;
  thenDate: string;
  thenImage: string;
  nowTitle: string;
  nowText: string;
  nowDate: string;
  nowImage: string;
  legacyTakeaway: string;
  successorMissions: string[];
}

export interface MissionData {
  id: string;
  name: string;
  tagline: string;
  destination: 'Moon' | 'Mars' | 'Interstellar Space' | 'Saturn';
  destinationGroup: 'moon' | 'mars' | 'deep-space';
  classification: HardwareClassification;
  statusBadge: string;
  statusDescription: string;
  landingSite: string;
  coordinates?: string;
  dates: {
    launch: string;
    end: string | null;
    landing?: string;
  };
  duration: string;
  distance: string;
  purpose: string;
  quote?: {
    text: string;
    author: string;
  };
  equipment: {
    name: string;
    description: string;
    fate: string;
    type: string;
    mass?: string;
    powerSource?: string;
    notableInstruments: string[];
  };
  keyEvents: (string | TimelineEvent)[];
  discoveries: (string | ScientificDiscovery)[];
  educationalSummary: string;
  thenVsNow: ThenVsNowData;
  heroImage: string;
  images: MissionImage[];
}

export interface DestinationGroup {
  id: string;
  name: string;
  description: string;
  missions: string[];
  icon: string;
}
