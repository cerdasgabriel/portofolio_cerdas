<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
    
    <!-- HEADER NAV KHUSUS HALAMAN DETIL -->
    <header class="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-900">
      <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <!-- Tombol Kembali ke Beranda -->
        <NuxtLink to="/" class="text-sm font-semibold text-slate-400 hover:text-teal-400 transition flex items-center gap-2">
          ← {{ t.btn_back }}
        </NuxtLink>
        
        <button @click="toggleLang" class="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-teal-400 border border-slate-800 rounded-md transition-all flex items-center gap-1">
          🌐 {{ currentLang }}
        </button>
      </div>
    </header>

    <Transition name="mac-fade" mode="out-in">
      <div :key="currentLang" class="max-w-4xl mx-auto px-6 py-12 space-y-12">
        
        <!-- JUDUL UTAMA PROJECT -->
        <div class="space-y-4 border-b border-slate-900 pb-8">
          <span class="text-xs font-mono px-2 py-1 bg-teal-500/10 text-teal-400 rounded border border-teal-500/20">Case Study & Documentation</span>
          <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-100">{{ t.title }}</h1>
          <p class="text-slate-400 text-base md:text-lg leading-relaxed">{{ t.subtitle }}</p>
          
          <div class="flex flex-wrap gap-2 pt-2">
            <span v-for="tech in projectTech" :key="tech" class="text-xs px-2.5 py-1 bg-slate-900 text-slate-400 border border-slate-800 rounded font-mono">
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- LAYOUT UTAMA GAMBAR MOCKUP (DAMPINGAN) -->
        <div class="space-y-4">
          <h2 class="text-xl font-bold tracking-tight text-teal-400 font-mono uppercase">/ {{ t.sec_preview }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Mockup Web -->
            <div class="group relative bg-slate-900/40 rounded-xl overflow-hidden border border-slate-900 aspect-video flex flex-col justify-end p-4">
              <img src="/img/nayastra-web.png" alt="NAYASTRA Web Dashboard" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60" onerror="this.style.opacity='0'" />
              <div class="z-10 bg-slate-950/80 backdrop-blur-sm p-3 rounded-lg border border-slate-800/60">
                <p class="text-xs font-bold text-teal-400 font-mono">Web Interface</p>
                <p class="text-xs text-slate-400 mt-0.5">{{ t.desc_web_mockup }}</p>
              </div>
            </div>
            <!-- Mockup Mobile -->
            <div class="group relative bg-slate-900/40 rounded-xl overflow-hidden border border-slate-900 aspect-video flex flex-col justify-end p-4">
              <img src="/img/nayastra-mobile.png" alt="NAYASTRA Mobile App" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60" onerror="this.style.opacity='0'" />
              <div class="z-10 bg-slate-950/80 backdrop-blur-sm p-3 rounded-lg border border-slate-800/60">
                <p class="text-xs font-bold text-teal-400 font-mono">Mobile Interface</p>
                <p class="text-xs text-slate-400 mt-0.5">{{ t.desc_mobile_mockup }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- KONTRIBUSI & FITUR TEKNIS -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-slate-900">
          <div class="md:col-span-1">
            <h2 class="text-xl font-bold tracking-tight text-teal-400 font-mono uppercase">/ {{ t.sec_details }}</h2>
          </div>
          <div class="md:col-span-2 space-y-4">
            <ul class="space-y-4 text-slate-400 text-sm md:text-base list-none pl-0">
              <li v-for="(task, index) in t.contributions" :key="index" class="flex items-start gap-3">
                <span class="text-teal-400 mt-1">⚡</span>
                <span class="leading-relaxed">{{ task }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- AREA DOWNLOAD & AKSES FILE -->
        <div class="bg-slate-900/30 border border-slate-900 rounded-2xl p-6 md:p-8 space-y-4 text-center max-w-2xl mx-auto">
          <h3 class="text-base font-bold text-slate-200">{{ t.sec_download }}</h3>
          <p class="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">{{ t.download_note }}</p>
          
          <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
            <!-- Download APK -->
            <a :href="links.downloadApk" target="_blank" class="px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg text-xs transition shadow-md shadow-teal-500/10">
              📥 {{ t.btn_apk }}
            </a>
            <!-- Link PDF Laporan -->
            <a :href="links.projectPdf" target="_blank" class="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-medium rounded-lg text-xs transition">
              📄 {{ t.btn_pdf }}
            </a>
            <!-- Indikator Web Terkunci -->
            <span class="px-4 py-2.5 bg-slate-950 text-slate-500 border border-slate-900 rounded-lg text-xs font-mono cursor-not-allowed flex items-center gap-1.5" title="Akses jaringan lokal Rumah Sakit saja">
              🔒 {{ t.btn_web_private }}
            </span>
          </div>
        </div>

      </div>
    </Transition>

    <footer class="border-t border-slate-900 mt-24 py-6 text-center text-xs font-mono text-slate-700">
      <p>CGL.DEV — Project Case Study</p>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const currentLang = useState('lang', () => 'id')
const toggleLang = () => { currentLang.value = currentLang.value === 'id' ? 'en' : 'id' }

const projectTech = ['Vue', 'Nuxt', 'Flutter', 'Laravel', 'PostgreSQL', 'Docker']

const links = {
  downloadApk: 'https://drive.google.com/...ganti-link-apk-lu',
  projectPdf: 'https://drive.google.com/...ganti-link-pdf-lu'
}

const i18n = {
  id: {
    btn_back: 'Kembali ke Beranda',
    title: 'NAYASTRA — Healthcare Service System',
    subtitle: 'Sistem komprehensif Pelayanan Kesehatan Berbasis Mobile dan Website pada Rumah Sakit Bintang Medika yang dirancang untuk merombak efisiensi administrasi medis serta integrasi antrean sistem pasien.',
    sec_preview: 'Tampilan Aplikasi',
    desc_web_mockup: 'Dashboard admin, manajemen database pasien, rekam medis, dan pengaturan jadwal poli dokter RS.',
    desc_mobile_mockup: 'Aplikasi pasien untuk booking online, tiket antrean farmasi, dan manajemen profil kesehatan terintegrasi.',
    sec_details: 'Implementasi Teknis',
    sec_download: 'Akses Dokumen & Aplikasi',
    download_note: 'Aplikasi website dideploy dalam jaringan private (intranet) internal Rumah Sakit Bintang Medika. Anda dapat mencoba versi Mobile lewat installer APK Beta atau meninjau arsitektur sistem di PDF Laporan Akhir.',
    btn_apk: 'Download APK Pasien (Beta)',
    btn_pdf: 'Buka PDF Laporan Akhir',
    btn_web_private: 'Akses Web (RS Private Intranet)',
    contributions: [
      'Membangun sistem registrasi pasien, autentikasi aman, dan manajemen rekam medis tingkat lanjut.',
      'Mengembangkan sistem janji temu online dan manajemen alur antrean poliklinik secara real-time.',
      'Mendesain arsitektur database relasional yang scalable untuk integrasi data medis hulu-hilir.',
      'Mengintegrasikan aplikasi mobile Flutter dengan sistem backend API Laravel secara seamless.',
      'Kontributor utama (~90% kode) dalam tim pengembangan yang terdiri dari 3 developer.'
    ]
  },
  en: {
    btn_back: 'Back to Home',
    title: 'NAYASTRA — Healthcare Service System',
    subtitle: 'A comprehensive mobile and web-based healthcare ecosystem built for Rumah Sakit Bintang Medika to digitalize medical administration workflows and streamline patient queues.',
    sec_preview: 'Application Interfaces',
    desc_web_mockup: 'Admin dashboard managing patient records, database infrastructure, and doctor appointment scheduling.',
    desc_mobile_mockup: 'Patient app featuring real-time clinic booking, pharmacy queue tracking, and digital health profiles.',
    sec_details: 'Technical Execution',
    sec_download: 'Resource Access',
    download_note: 'The web application is hosted within the secure, private intranet of Rumah Sakit Bintang Medika. You can preview the system by installing the Mobile APK Beta or examining the comprehensive structural system blueprint inside the Final Report PDF.',
    btn_apk: 'Download Patient APK (Beta)',
    btn_pdf: 'View Final Report (PDF)',
    btn_web_private: 'Web App (Private RS Intranet)',
    contributions: [
      'Developed secure patient registration pipelines, token authentication, and medical record structures.',
      'Built online polyclinic appointment booking features and active real-time queue synchronization.',
      'Designed a scalable relational database scheme optimized for interconnected medical records.',
      'Seamlessly bridged the Flutter mobile application with Laravel backend production API endpoints.',
      'Acted as the lead framework architect, driving over ~90% of the codebase across a 3-member engineer team.'
    ]
  }
}
const t = computed(() => i18n[currentLang.value])
</script>

<style>
.mac-fade-enter-active, .mac-fade-leave-active { transition: all 0.45s cubic-bezier(0.25, 1, 0.5, 1); }
.mac-fade-enter-from { opacity: 0; transform: scale(0.99) translateY(4px); }
.mac-fade-leave-to { opacity: 0; transform: scale(1.01) translateY(-4px); }
</style>