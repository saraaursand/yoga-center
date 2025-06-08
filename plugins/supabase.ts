import { createClient } from "@supabase/supabase-js";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  console.log("Supabase URL:", config.public.supabaseUrl);
  console.log("Supabase Key:", config.public.supabaseAnonKey);

  const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabaseAnonKey
  );
  nuxtApp.provide("supabase", supabase);
});
