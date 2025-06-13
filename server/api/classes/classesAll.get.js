import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NUXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NUXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// This code retrieves all class activities from the Supabase database.
// It uses the Supabase client to query the "activities" table, filtering for rows where the "type" is "class".

export default defineEventHandler(async (event) => {
  const { data, error } = await supabase
    .from("activities")
    .select("*")
    .eq("type", "class");
  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message });
  }
  return data;
});
