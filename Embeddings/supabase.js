import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aanmkxbopiyemotisvcj.supabase.co';
const supabaseSecret =
  'secret';

export const supabase = createClient(supabaseUrl, supabaseSecret);
