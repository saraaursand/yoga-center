import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NUXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NUXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// This code retrieves a specific seminar activity by its name from the Supabase database.
// It uses the Supabase client to query the "activities" table, filtering for rows where the "type" is "seminar" and the "name" matches the provided name parameter.

export default defineEventHandler(async (event) => {
  const name = decodeURIComponent(event.context.params.name);
  const { data, error } = await supabase
    .from("activities")
    .select("*")
    .eq("type", "seminar")
    .eq("name", name);
  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message });
  }
  return data;
});
