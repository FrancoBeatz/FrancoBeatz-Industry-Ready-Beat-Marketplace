
export interface Beat {
  id: string;
  title: string;
  genre: 'Trap' | 'Hip-Hop' | 'Drill' | 'R&B';
  bpm: number;
  price: number;
  audioUrl: string;
  coverUrl: string;
  tags: string[];
}

export interface LicenseTier {
  id: string;
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
}

export interface PlayingState {
  beatId: string | null;
  isPlaying: boolean;
  progress: number;
}
