<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
    
    <!-- HEADER NAV KHUSUS HALAMAN DETIL -->
    <header class="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-900">
      <div class="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
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
      <div :key="currentLang" class="max-w-4xl mx-auto px-6 py-12 space-y-16">
        
        <!-- HEADER PAGE -->
        <div class="space-y-3 border-b border-slate-900 pb-8">
          <span class="text-xs font-mono px-2 py-1 bg-teal-500/10 text-teal-400 rounded border border-teal-500/20">Credentials & Vault</span>
          <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-100">{{ t.title }}</h1>
          <p class="text-slate-400 text-base md:text-lg leading-relaxed">{{ t.subtitle }}</p>
          
          <div class="flex flex-wrap gap-2 pt-2">
            <span v-for="tech in projectTech" :key="tech" class="text-xs px-2.5 py-1 bg-slate-900 text-slate-400 border border-slate-800 rounded font-mono">
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- NEW RESPONSIVE INTERFACE GALLERY -->
        <div class="space-y-8">
          <h2 class="text-xl font-bold tracking-tight text-teal-400 font-mono uppercase">/ {{ t.sec_preview }}</h2>
          
          <!-- 1. NATIONAL CERTIFICATION (BNSP) -->
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span class="text-teal-400">🖥️</span> {{ t.categories_national }}
            </div>
            
            <!-- FIXED FIXED: Path masuk ke folder /img/ dan ekstensi diubah ke .jpg -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <!-- Lembar 1 -->
              <div class="space-y-2">
                <div class="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <span class="text-teal-400">📄</span> {{ t.bnsp_page1 }}
                </div>
                <div 
                  @click="openPreview('/img/bnsp_1.jpg', t.title + ' - ' + t.bnsp_page1)"
                  class="group relative bg-slate-900/40 rounded-xl overflow-hidden border border-slate-900 aspect-video flex flex-col justify-end p-4 cursor-zoom-in"
                >
                  <img src="/img/bnsp_1.jpg" :alt="t.bnsp_page1" class="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500 opacity-90" />
                </div>
              </div>

              <!-- Lembar 2 -->
              <div class="space-y-2">
                <div class="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <span class="text-teal-400">📄</span> {{ t.bnsp_page2 }}
                </div>
                <div 
                  @click="openPreview('/img/bnsp_2.jpg', t.title + ' - ' + t.bnsp_page2)"
                  class="group relative bg-slate-900/40 rounded-xl overflow-hidden border border-slate-900 aspect-video flex flex-col justify-end p-4 cursor-zoom-in"
                >
                  <img src="/img/bnsp_2.jpg" :alt="t.bnsp_page2" class="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500 opacity-90" />
                </div>
              </div>

            </div>
          </div>

          <!-- 2. COURSE & SPECIALIZATION -->
          <div class="space-y-3 pt-4">
            <div class="flex items-center justify-between text-xs font-mono text-slate-400">
              <div class="flex items-center gap-2">
                <span class="text-teal-400">📱</span> {{ t.categories_course }}
              </div>
              <div class="text-[10px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800 animate-pulse">
                {{ currentLang === 'id' ? 'Swipe atau Scroll ke kanan →' : 'Swipe or Scroll right →' }}
              </div>
            </div>
            
            <!-- Container Scroll Horizontal -->
            <div class="flex gap-4 overflow-x-auto pb-4 pt-2 snap-x scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
              
              <!-- Gambar Kursus 1 -->
              <div class="flex-none w-56 snap-start group bg-slate-900/40 rounded-2xl overflow-hidden border border-slate-900 p-2">
                <div 
                  @click="openPreview('https://placehold.co/360x270/0f172a/334155?text=Dicoding', t.screens.screen1)"
                  class="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-900/80 shadow-lg cursor-zoom-in"
                >
                  <img src="https://placehold.co/360x270/0f172a/334155?text=Dicoding" alt="Course View 1" class="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p class="text-[11px] font-mono text-center text-slate-400 mt-2 font-medium">{{ t.screens.screen1 }}</p>
              </div>

              <!-- Gambar Kursus 2 -->
              <div class="flex-none w-56 snap-start group bg-slate-900/40 rounded-2xl overflow-hidden border border-slate-900 p-2">
                <div 
                  @click="openPreview('https://placehold.co/360x270/0f172a/334155?text=Udemy', t.screens.screen2)"
                  class="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-900/80 shadow-lg cursor-zoom-in"
                >
                  <img src="https://placehold.co/360x270/0f172a/334155?text=Udemy" alt="Course View 2" class="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p class="text-[11px] font-mono text-center text-slate-400 mt-2 font-medium">{{ t.screens.screen2 }}</p>
              </div>

            </div>
          </div>
        </div>

        <!-- METRIK VALIDASI -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-900">
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

      </div>
    </Transition>

    <!-- NATIVE MODAL LIGHTBOX SYSTEM -->
    <Transition name="modal-fade">
      <div 
        v-if="isModalOpen" 
        @click.self="closePreview"
        class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md"
      >
        <button 
          @click="closePreview" 
          class="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 transition"
        >
          ✕
        </button>
        
        <div class="max-w-3xl w-full flex flex-col items-center space-y-4">
          <img 
            :src="activeImg" 
            :alt="activeTitle" 
            class="max-h-[80vh] w-auto object-contain rounded-xl border border-slate-900 shadow-2xl"
          />
          <p class="text-sm font-mono text-slate-400 bg-slate-900/50 px-4 py-1.5 rounded-full border border-slate-800/50">
            {{ activeTitle }}
          </p>
        </div>
      </div>
    </Transition>

    <footer class="border-t border-slate-900 mt-24 py-6 text-center text-xs font-mono text-slate-700">
      <p>CGL.DEV — Credentials Vault</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentLang = useState('lang', () => 'id')
const toggleLang = () => { currentLang.value = currentLang.value === 'id' ? 'en' : 'id' }

const projectTech = ['BNSP', 'CRUD', 'HTML', 'CSS', 'Web Programming', 'Flutter']

const isModalOpen = ref(false)
const activeImg = ref('')
const activeTitle = ref('')

const openPreview = (imgUrl, title) => {
  activeImg.value = imgUrl
  activeTitle.value = title
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closePreview = () => {
  isModalOpen.value = false
  document.body.style.overflow = ''
}

const i18n = {
  id: {
    btn_back: 'Kembali ke Beranda',
    title: 'Sertifikasi & Kompetensi',
    subtitle: 'Daftar pembuktian kompetensi formal, sertifikasi profesi nasional, serta riwayat pelatihan teknis yang telah saya selesaikan untuk mendukung standarisasi pengembangan perangkat lunak modern.',
    sec_preview: 'Berkas Sertifikat',
    categories_national: 'SERTIFIKASI PROFESI UTAMA / NASIONAL',
    categories_course: 'PELATIHAN SPESIALISASI & KURSUS IT',
    bnsp_page1: 'Lembar Utama (Kompetensi Dasar)',
    bnsp_page2: 'Lembar Transkrip / Detail Unit Kompetensi',
    sec_details: 'Metrik Validasi',
    screens: {
      screen1: 'Dicoding: Menjadi Flutter Developer Expert',
      screen2: 'Udemy: Laravel Skala Besar'
    },
    contributions: [
      'Seluruh dokumen diverifikasi secara sah melalui badan sertifikasi nasional dan lembaga kredibel terkait.',
      'Unit kompetensi mencakup kemampuan hulu-hilir pemrograman web, basis data, dan arsitektur aplikasi perangkat lunak.'
    ]
  },
  en: {
    btn_back: 'Back to Home',
    title: 'Certifications & Credentials',
    subtitle: 'A curated log of my formal competencies, national professional certifications, and technical specialized courses successfully accomplished to meet modern software engineering metrics.',
    sec_preview: 'Certificate Documents',
    categories_national: 'CORE / NATIONAL PROFESSIONAL CERTIFICATIONS',
    categories_course: 'SPECIALIZED TRAINING & TECH COURSES',
    bnsp_page1: 'Main Document (Core Credential)',
    bnsp_page2: 'Transcript / Unit Competency Details',
    sec_details: 'Validation Metrics',
    screens: {
      screen1: 'Dicoding: Becoming Flutter Developer Expert',
      screen2: 'Udemy: Large Scale Laravel'
    },
    contributions: [
      'All credentials are legally issued and validated by official national bodies and certified institutions.',
      'Competency scopes cover fundamental to advanced tracks of web development, architecture, and systems engineering.'
    ]
  }
}
const t = computed(() => i18n[currentLang.value])
</script>

<style scoped>
.scrollbar-thin::-webkit-scrollbar { height: 5px; }
.scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
.scrollbar-thin::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
.scrollbar-thin::-webkit-scrollbar-thumb:hover { background: #2dd4bf; }

.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.35s cubic-bezier(0.25, 1, 0.5, 1); }
.modal-fade-enter-active img, .modal-fade-leave-active img { transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1); }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }
.modal-fade-enter-from img { transform: scale(0.95); }
.modal-fade-leave-to img { transform: scale(1.02); }
</style>