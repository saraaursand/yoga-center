import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NUXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NUXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// This code retrieves all teachers from the Supabase database.
// This code uses the Supabase client to query the "teachers" table and returns all rows.

export default defineEventHandler(async (event) => {
  const { data, error } = await supabase.from("teachers").select("*");
  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message });
  }
  return data;
});
