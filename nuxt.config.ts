export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  
  // Matikan SSR agar menghasilkan SPA statis murni
  ssr: false,

  app: {
    // Memastikan router mencari sub-folder repository lu yang benar
    baseURL: '/portofolio_cerdas/',
    // Kembalikan ke default '_nuxt' agar digabungkan secara benar dengan baseURL di atas
    buildAssetsDir: '_nuxt'
  },

  experimental: {
    payloadExtraction: false
  }
})