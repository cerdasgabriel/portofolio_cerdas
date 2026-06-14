// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  
  // Matikan SSR agar menghasilkan SPA statis murni yang ramah GitHub Pages
  ssr: false,

  // PENTING UNTUK NUXT 4: baseURL dan buildAssetsDir sekarang wajib berada di ROOT (luar objek app)
  baseURL: '/portofolio_cerdas/',
  buildAssetsDir: '_nuxt',

  experimental: {
    // Menghindari eror 404 pencarian file payload JSON di server statis
    payloadExtraction: false
  }
})