import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aanmkxbopiyemotisvcj.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhbm1reGJvcGl5ZW1vdGlzdmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5MTg4MDIsImV4cCI6MjAxMzQ5NDgwMn0.jw9x1mQckuhtUMsamn3ZLPwxiJAod5SY_x9DDj3vMpU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
