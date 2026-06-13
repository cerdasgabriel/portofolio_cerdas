<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
    
    <!-- NAVBAR -->
    <header class="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-900">
      <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span class="font-bold text-xl tracking-wider text-teal-400 font-mono">CGL.DEV</span>
        <nav class="flex items-center gap-6">
          <a href="#about" class="text-sm text-slate-400 hover:text-teal-400 transition">{{ t.navbar.about }}</a>
          <a href="#skills" class="text-sm text-slate-400 hover:text-teal-400 transition">{{ t.navbar.skills }}</a>
          <a href="#projects" class="text-sm text-slate-400 hover:text-teal-400 transition">{{ t.navbar.projects }}</a>
          <a href="#experience" class="text-sm text-slate-400 hover:text-teal-400 transition">{{ t.navbar.experience }}</a>
          <button @click="toggleLang" class="ml-2 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-teal-400 border border-slate-800 rounded-md transition-all flex items-center gap-1">
            🌐 {{ currentLang }}
          </button>
        </nav>
      </div>
    </header>

    <Transition name="mac-fade" mode="out-in">
      <div :key="currentLang" class="max-w-5xl mx-auto px-6 py-12 space-y-24">
        
        <!-- HERO SECTION -->
        <section class="py-12 md:py-20 flex flex-col justify-center min-h-[70vh]">
          <div class="space-y-4 max-w-3xl">
            <p class="text-teal-400 font-mono text-sm tracking-widest uppercase">{{ t.hero.welcome }}</p>
            <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-slate-100 via-slate-300 to-teal-400 bg-clip-text text-transparent">
              {{ t.hero.greeting }}
            </h1>
            <p class="text-xl md:text-2xl text-slate-400 font-medium">{{ t.hero.tagline }}</p>
            <p class="text-slate-400 leading-relaxed text-base md:text-lg pt-2">{{ t.hero.sub_tagline }}</p>
            <div class="flex flex-wrap gap-4 pt-4">
              <a href="#projects" class="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold rounded-lg transition text-sm">
                {{ t.hero.cta_work }}
              </a>
              <a :href="`mailto:${profile.email}`" class="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-lg transition text-sm">
                {{ t.hero.cta_contact }}
              </a>
            </div>
          </div>
        </section>

        <!-- ABOUT ME SECTION -->
        <section id="about" class="scroll-mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-900 pt-16">
          <div class="md:col-span-1"><h2 class="text-2xl font-bold tracking-tight text-teal-400 font-mono uppercase">/ {{ t.about.title }}</h2></div>
          <div class="md:col-span-2 space-y-6">
            <p class="text-slate-400 leading-relaxed text-lg">{{ t.about.desc }}</p>
            <div class="border-l-2 border-teal-500/30 pl-4 space-y-4">
              <h3 class="font-semibold text-slate-200">{{ t.about.education_title }}</h3>
              <div class="space-y-2 text-sm text-slate-400">
                <p>⏱️ <span class="text-slate-200 font-medium">{{ t.about.edu_s2 }}</span></p>
                <p>🎓 <span>{{ t.about.edu_s1 }}</span></p>
              </div>
            </div>
          </div>
        </section>

        <!-- TECHNICAL SKILLS SECTION -->
        <section id="skills" class="scroll-mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-900 pt-16">
          <div class="md:col-span-1"><h2 class="text-2xl font-bold tracking-tight text-teal-400 font-mono uppercase">/ {{ t.skills.title }}</h2></div>
          <div class="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div v-for="(skills, category) in profile.skillsGroup" :key="category" class="bg-slate-900/30 border border-slate-900/60 p-5 rounded-xl">
              <h3 class="text-sm font-semibold tracking-wider text-teal-400 font-mono uppercase mb-3">{{ category }}</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="skill in skills" :key="skill" class="text-xs px-2.5 py-1 bg-slate-950 text-slate-400 border border-slate-900 rounded font-mono">{{ skill }}</span>
              </div>
            </div>
          </div>
        </section>

        <!-- PORTFOLIO BRIEF PROJECT SECTION -->
        <section id="projects" class="scroll-mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-900 pt-16">
          <div class="md:col-span-1"><h2 class="text-2xl font-bold tracking-tight text-teal-400 font-mono uppercase">/ {{ t.projects.title }}</h2></div>
          <div class="md:col-span-2">
            <div class="bg-slate-900/20 border border-slate-900 p-6 md:p-8 rounded-2xl space-y-6">
              <div>
                <span class="text-xs font-mono px-2 py-1 bg-teal-500/10 text-teal-400 rounded border border-teal-500/20">Featured Project</span>
                <h3 class="text-xl md:text-2xl font-bold text-slate-100 mt-3">{{ t.projects.nayastra.title }}</h3>
                <p class="text-sm text-slate-400 mt-1 italic">{{ t.projects.nayastra.subtitle }}</p>
              </div>
              <!-- BUTTON TOMBOL PINDAH HALAMAN KHUSUS -->
              <div>
<NuxtLink to="/nasyastra" class="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg text-sm transition-all duration-300 hover:scale-[1.02]">
    {{ t.projects.nayastra.btn_view_details }} →
  </NuxtLink>
              </div>
            </div>
          </div>
        </section>

        <!-- PROFESSIONAL EXPERIENCE & CERTIFICATION -->
        <section id="experience" class="scroll-mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-900 pt-16">
          <div class="md:col-span-1"><h2 class="text-2xl font-bold tracking-tight text-teal-400 font-mono uppercase">/ {{ t.experience.title }}</h2></div>
          <div class="md:col-span-2 space-y-12">
            <div class="relative pl-6 border-l border-slate-800 space-y-4">
              <div class="absolute w-2.5 h-2.5 bg-teal-400 rounded-full -left-[5.5px] top-1.5 shadow-[0_0_8px_rgba(45,212,191,0.5)]"></div>
              <div>
                <h3 class="text-lg font-bold text-slate-100">{{ t.experience.bobhasan.role }}</h3>
                <p class="text-sm font-mono text-slate-400">{{ t.experience.bobhasan.company }}</p>
              </div>
              <ul class="space-y-2 text-sm text-slate-400">
                <li v-for="(task, index) in t.experience.bobhasan.tasks" :key="index">- {{ task }}</li>
              </ul>
            </div>
            <div class="pt-6 border-t border-slate-900 space-y-3">
              <h3 class="text-sm font-bold tracking-wider text-slate-400 font-mono uppercase">🏷️ {{ t.certifications.title }}</h3>
              <p class="text-sm text-slate-300 leading-relaxed bg-slate-900/10 p-4 rounded-xl border border-slate-900 font-mono">{{ t.certifications.bnsp }}</p>
            </div>
          </div>
        </section>

      </div>
    </Transition>

    <footer class="border-t border-slate-900 mt-24 py-8 text-center text-xs font-mono text-slate-600">
      <p>© 2026 Cerdas Gabriel Lesmana. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Gunakan useState bawaan nuxt agar state bahasa sinkron antar halaman
const currentLang = useState('lang', () => 'id')
const toggleLang = () => { currentLang.value = currentLang.value === 'id' ? 'en' : 'id' }

const profile = {
  email: 'lesmanacerdas.100@gmail.com',
  skillsGroup: {
    frontend: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'Vue', 'Nuxt'],
    backend: ['PHP', 'Laravel', 'Strapi'],
    mobile: ['Flutter', 'Dart'],
    database: ['PostgreSQL', 'MySQL'],
    tools: ['Docker', 'Git', 'Postman'],
    others: ['SEO', 'Video Editing', 'Social Media Analytics']
  }
}

const i18n = {
  id: {
    navbar: { about: 'Tentang', skills: 'Keahlian', projects: 'Project', experience: 'Pengalaman' },
    hero: {
      welcome: 'Full-Stack / Mobile Developer',
      greeting: 'Halo, Saya Cerdas Gabriel Lesmana.',
      tagline: 'Junior Fullstack Developer | Web & Mobile Specialist',
      sub_tagline: 'Menghubungkan kode yang efisien dengan strategi digital. Berpengalaman dalam membangun sistem pelayanan kesehatan serta manajemen deployment web & mobile dari hulu ke hilir. Saat ini sedang menempuh studi Magister Ilmu Komputer.',
      cta_work: 'Lihat Project',
      cta_contact: 'Hubungi Saya'
    },
    about: {
      title: 'Tentang Saya',
      desc: 'Saya adalah seorang Junior Fullstack Developer dengan fokus pada pengembangan aplikasi Web dan Mobile. Memiliki pengalaman kuat dalam merancang sistem dari nol—mulai dari struktur database, integrasi backend, hingga optimasi frontend. Selain menulis kode, latar belakang saya di bidang infrastruktur server dan manajemen media digital memberikan perspektif yang lebih luas dalam membangun produk digital yang berdampak nyata.',
      education_title: 'Pendidikan',
      edu_s2: 'S2 Magister Ilmu Komputer – Universitas Lampung (On Going)',
      edu_s1: 'S1 Teknik Informatika – Universitas Pamulang (Lulus 2026)'
    },
    skills: { title: 'Keahlian' },
    projects: {
      title: 'Project Utama',
      nayastra: {
        title: 'NAYASTRA – Healthcare Service System',
        subtitle: 'Sistem pelayanan kesehatan komprehensif untuk digitalisasi layanan di Rumah Sakit Bintang Medika.',
        btn_view_details: 'Buka Detail Project & Case Study'
      }
    },
    experience: {
      title: 'Pengalaman',
      bobhasan: {
        role: 'Digital Media Specialist & IT Support',
        company: 'Bob Hasan & Partners Law Firm | 2023 - Sekarang',
        tasks: [
          'Mengelola dan mengoptimalkan aset digital perusahaan di YouTube, TikTok, Instagram, dan Facebook.',
          'Melakukan editing video profesional, optimasi SEO, dan analisis performa konten untuk meningkatkan engagement.',
          'Menyusun strategi pertumbuhan media sosial berbasis data analytics.'
        ]
      }
    },
    certifications: { title: 'Sertifikasi', bnsp: 'Sertifikasi Kompetensi BNSP Pemrograman (CRUD, HTML, CSS, Web Programming)' }
  },
  en: {
    navbar: { about: 'About', skills: 'Skills', projects: 'Projects', experience: 'Experience' },
    hero: {
      welcome: 'Full-Stack / Mobile Developer',
      greeting: "Hi, I'm Cerdas Gabriel Lesmana.",
      tagline: 'Junior Fullstack Developer | Web & Mobile Specialist',
      sub_tagline: 'Bridging scalable code with digital strategy. Experienced in building comprehensive healthcare systems and managing end-to-end web & mobile deployment. Currently pursuing a Master\'s degree in Computer Science.',
      cta_work: 'View My Works',
      cta_contact: 'Contact Me'
    },
    about: {
      title: 'About Me',
      desc: 'I am a Junior Fullstack Developer specializing in Web and Mobile application development. I have hands-on experience in full-cycle architectural design—from database structures and backend integrations to frontend optimization. Beyond writing clean code, my background in server infrastructure and digital media management allows me to view product development through a broader, more impactful lens.',
      education_title: 'Education',
      edu_s2: 'M.S. in Computer Science – Universitas Lampung (Ongoing)',
      edu_s1: 'B.S. in Informatics Engineering – Universitas Pamulang (Graduated 2026)'
    },
    skills: { title: 'Skills' },
    projects: {
      title: 'Featured Project',
      nayastra: {
        title: 'NAYASTRA – Healthcare Service System',
        subtitle: 'Comprehensive healthcare system designed to digitalize hospital services at Rumah Sakit Bintang Medika.',
        btn_view_details: 'Open Project Details & Case Study'
      }
    },
    experience: {
      title: 'Experience',
      bobhasan: {
        role: 'Digital Media Specialist & IT Support',
        company: 'Bob Hasan & Partners Law Firm | 2023 - Present',
        tasks: [
          "Managed and optimized the firm's digital assets across YouTube, TikTok, Instagram, and Facebook.",
          'Executed professional video editing, SEO optimization, and content performance analysis to drive audience engagement.',
          'Formulated data-driven social media growth strategies.'
        ]
      }
    },
    certifications: { title: 'Certifications', bnsp: 'National Professional Certification (BNSP Indonesia) – Software Programming (CRUD, HTML, CSS, Web Programming)' }
  }
}
const t = computed(() => i18n[currentLang.value])
</script>

<style>
.mac-fade-enter-active, .mac-fade-leave-active { transition: all 0.45s cubic-bezier(0.25, 1, 0.5, 1); }
.mac-fade-enter-from { opacity: 0; transform: scale(0.99) translateY(4px); }
.mac-fade-leave-to { opacity: 0; transform: scale(1.01) translateY(-4px); }
html { scroll-behavior: smooth; }
</style>