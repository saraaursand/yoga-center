// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_KEY,
    },
  },
  css: ["~/assets/css/main.css"],
  components: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
});
