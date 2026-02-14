
import { createClient } from '@supabase/supabase-js';

// Browser-safe environment variable access
const getEnv = (key: string): string => {
  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key] as string;
  }
  // Fallback for vite-like environments if applicable
  // @ts-ignore
  if (import.meta.env && import.meta.env[key]) return import.meta.env[key];
  return '';
};

const supabaseUrl = getEnv('VITE_SUPABASE_URL') || 'https://bgrvsidbjvwtiroirssk.supabase.co';
const supabaseAnonKey = getEnv('VITE_SUPABASE_ANON_KEY') || 'sb_publishable_est3JqOaOB-14ZiwxTAHQQ_VPEAXWGF';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Server-only Admin Client
 * Used in /api functions to bypass RLS when necessary.
 */
export const getSupabaseAdmin = () => {
  const serviceKey = getEnv('SUPABASE_SERVICE_ROLE_KEY');
  if (!serviceKey) throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY");
  return createClient(supabaseUrl, serviceKey);
};
