
import { LicenseTier } from './types';

export const LICENSES: LicenseTier[] = [
  {
    id: 'basic',
    name: 'Basic MP3',
    price: 9.99,
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
    price: 19.99,
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
    price: 29.99,
    features: [
      'Full Stems (Trackouts)',
      'Unlimited Streams',
      'Unlimited Commercial Use',
      'Everything in Premium',
      'Priority Support'
    ]
  }
];
