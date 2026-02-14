
// In a real app, these come from process.env
// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_ANON_KEY;

export const mockSupabase = {
  auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    signIn: async (creds: any) => ({ data: { user: { id: '1', email: creds.email } }, error: null }),
    signOut: async () => ({ error: null }),
  },
  from: (table: string) => ({
    select: () => ({
      eq: () => ({ data: [], error: null }),
      order: () => ({ data: [], error: null }),
    }),
    insert: (data: any) => ({ data, error: null }),
    update: (data: any) => ({ eq: () => ({ data, error: null }) }),
    delete: () => ({ eq: () => ({ error: null }) }),
  })
};
