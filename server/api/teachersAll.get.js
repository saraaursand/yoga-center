import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NUXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NUXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default defineEventHandler(async (event) => {
  const { data, error } = await supabase.from("teachers").select("*");
  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message });
  }
  return data;
});