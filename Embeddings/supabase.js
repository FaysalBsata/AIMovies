import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aanmkxbopiyemotisvcj.supabase.co';
const supabaseSecret =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhbm1reGJvcGl5ZW1vdGlzdmNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NzkxODgwMiwiZXhwIjoyMDEzNDk0ODAyfQ.Kx8u8MNht-KpuEHzDNcSVQ56oWDVMiITA1KssguxoUw';

export const supabase = createClient(supabaseUrl, supabaseSecret);
