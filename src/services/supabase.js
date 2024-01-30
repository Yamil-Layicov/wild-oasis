import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vceibjkgjexkwcatxhzh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjZWliamtnamV4a3djYXR4aHpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0NjAxNTYsImV4cCI6MjAyMjAzNjE1Nn0.UAbhKcPsSBwWpclKF5KxY4b_uLBDi8wnIFem4Cj5UAo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
