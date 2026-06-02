// ──────────────────────────────────────────────────────────────────────────
//  COPY THIS FILE TO config.js AND FILL IN YOUR SUPABASE VALUES
//  (You only need to do this once — see SETUP.md for instructions)
// ──────────────────────────────────────────────────────────────────────────
var SUPABASE_URL      = 'https://hrbvvefxczuusngryfso.supabase.co';
var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyYnZ2ZWZ4Y3p1dXNuZ3J5ZnNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzODk5MDIsImV4cCI6MjA5NTk2NTkwMn0.15UpOFofIBOTJUgwzuGvIaZv_dU-pyRrmhCJqZHmaD8';

var db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
