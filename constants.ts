
import { Beat, LicenseTier } from './types';

export const BEATS: Beat[] = [
  {
    id: '1',
    title: 'Nightmare',
    genre: 'Trap',
    bpm: 145,
    price: 29.99,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    coverUrl: 'https://picsum.photos/seed/nightmare/400/400',
    tags: ['Dark', 'Aggressive', 'Heavy']
  },
  {
    id: '2',
    title: 'VVS Flow',
    genre: 'Trap',
    bpm: 128,
    price: 34.99,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    coverUrl: 'https://picsum.photos/seed/vvs/400/400',
    tags: ['Chill', 'Melodic', 'Spacey']
  },
  {
    id: '3',
    title: 'Drill Sergeant',
    genre: 'Drill',
    bpm: 142,
    price: 39.99,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    coverUrl: 'https://picsum.photos/seed/drill/400/400',
    tags: ['Fast', 'Hard', 'UK']
  },
  {
    id: '4',
    title: 'After Hours',
    genre: 'R&B',
    bpm: 95,
    price: 29.99,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    coverUrl: 'https://picsum.photos/seed/hours/400/400',
    tags: ['Smooth', 'Soulful', 'Vibey']
  },
  {
    id: '5',
    title: 'Ghost Town',
    genre: 'Hip-Hop',
    bpm: 90,
    price: 24.99,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    coverUrl: 'https://picsum.photos/seed/ghost/400/400',
    tags: ['Boom Bap', 'Classic', 'Dark']
  },
  {
    id: '6',
    title: 'Chrome Hearts',
    genre: 'Trap',
    bpm: 155,
    price: 34.99,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    coverUrl: 'https://picsum.photos/seed/chrome/400/400',
    tags: ['Hype', 'Club', 'Modern']
  }
];

export const LICENSES: LicenseTier[] = [
  {
    id: 'basic',
    name: 'Basic MP3',
    price: 29.99,
    features: [
      'MP3 Only',
      '2,000 Streams',
      'Non-Profit Use Only',
      'Standard Rights',
      'Tagged Audio'
    ]
  },
  {
    id: 'premium',
    name: 'Premium WAV',
    price: 59.99,
    recommended: true,
    features: [
      'MP3 + WAV',
      '10,000 Streams',
      'Commercial Use (Limited)',
      'Untagged Audio',
      'Sync Rights'
    ]
  },
  {
    id: 'unlimited',
    name: 'Unlimited Stems',
    price: 199.99,
    features: [
      'Full Stems (Trackouts)',
      'Unlimited Streams',
      'Unlimited Commercial Use',
      'Everything in Premium',
      'Priority Support'
    ]
  }
];
