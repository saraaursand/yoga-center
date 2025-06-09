import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NUXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NUXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default defineEventHandler(async (event) => {
  const name = decodeURIComponent(event.context.params.name);
  const { data, error } = await supabase
    .from("activities")
    .select("*")
    .eq("type", "class")
    .eq("name", name);
  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message });
  }
  return data;
});
