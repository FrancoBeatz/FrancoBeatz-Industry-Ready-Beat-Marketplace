
export type UserRole = 'ADMIN' | 'CUSTOMER';

export interface UserProfile {
  id: string;
  email: string;
  role: UserRole;
  avatar_url?: string;
  created_at: string;
}

export interface LicenseTier {
  id: string;
  name: string;
  price: number;
  recommended?: boolean;
  features: string[];
}

export interface Beat {
  id: string;
  title: string;
  genre: 'Trap' | 'Hip-Hop' | 'Drill' | 'R&B';
  bpm: number;
  price: number;
  audio_url: string;
  cover_url: string;
  tags: string[];
  description?: string;
  is_exclusive: boolean;
  stock_quantity: number;
  created_at: string;
}

export interface CartItem extends Beat {
  licenseType: string;
  quantity: number;
}

export interface Order {
  id: string;
  user_id: string;
  items: CartItem[];
  total_amount: number;
  status: 'PENDING' | 'COMPLETED' | 'CANCELLED';
  payment_intent_id?: string;
  created_at: string;
}
