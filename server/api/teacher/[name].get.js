import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NUXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NUXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// This code retrieves a teacher's information by their name from the Supabase database.
// It uses the Supabase client to query the "teachers" table, filtering for rows where the "name" matches the provided name parameter.

import { defineEventHandler, createError } from "h3";
export default defineEventHandler(async (event) => {
  const name = decodeURIComponent(event.context.params.name);
  const { data, error } = await supabase
    .from("teachers")
    .select("*")
    .eq("name", name);
  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message });
  }
  return data;
});
