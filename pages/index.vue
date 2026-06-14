<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
    
    <header class="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-900">
      <div class="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <span class="font-bold text-xl tracking-wider text-teal-400 font-mono">Cerdas G Lesmana S.Kom</span>
        <nav class="flex items-center gap-6">
          <button @click="scrollToSection('about')" class="text-sm text-slate-400 hover:text-teal-400 transition bg-transparent border-none cursor-pointer">
            {{ t.navbar.about }}
          </button>
          <button @click="scrollToSection('skills')" class="text-sm text-slate-400 hover:text-teal-400 transition bg-transparent border-none cursor-pointer">
            {{ t.navbar.skills }}
          </button>
          
          <NuxtLink to="/nasyastra" class="text-sm text-slate-400 hover:text-teal-400 transition">
            {{ t.navbar.projects }}
          </NuxtLink>
          
          <button @click="scrollToSection('experience')" class="text-sm text-slate-400 hover:text-teal-400 transition bg-transparent border-none cursor-pointer">
            {{ t.navbar.experience }}
          </button>
          
          <NuxtLink to="/sertifikat" class="text-sm text-slate-400 hover:text-teal-400 transition">
            {{ t.navbar.certificates }}
          </NuxtLink>

          <button @click="toggleLang" class="ml-2 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-teal-400 border border-slate-800 rounded-md transition-all flex items-center gap-1">
            🌐 {{ currentLang }}
          </button>
        </nav>
      </div>
    </header>

    <Transition name="mac-fade" mode="out-in">
      <div :key="currentLang" class="max-w-4xl mx-auto px-6 py-12 space-y-24">
        
        <section class="py-12 md:py-20 flex flex-col justify-center min-h-[70vh]">
          <div class="space-y-4 max-w-4xl">
            <p class="text-teal-400 font-mono text-sm tracking-widest uppercase">{{ t.hero.welcome }}</p>
            <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-slate-100 via-slate-300 to-teal-400 bg-clip-text text-transparent">
              {{ t.hero.greeting }}
            </h1>
            <p class="text-xl md:text-2xl text-slate-400 font-medium">{{ t.hero.tagline }}</p>
            <p class="text-slate-400 leading-relaxed text-base md:text-lg pt-2">{{ t.hero.sub_tagline }}</p>
            
            <div class="flex flex-wrap gap-4 pt-4">
              <NuxtLink to="/nasyastra" class="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold rounded-lg transition text-sm">
                {{ t.hero.cta_work }}
              </NuxtLink>
              <a :href="`mailto:${profile.email}`" class="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-lg transition text-sm">
                {{ t.hero.cta_contact }}
              </a>
            </div>

            <div class="flex items-center gap-5 pt-6 border-t border-slate-900/60 max-w-xs">
              <span class="text-xs font-mono text-slate-500 uppercase tracking-wider">{{ t.hero.connect_text }}</span>
              <div class="flex items-center gap-4">
                <a :href="profile.socials.whatsapp" target="_blank" class="text-slate-400 hover:text-teal-400 transition-colors flex items-center justify-center" title="WhatsApp">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 12.008 0c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 12.004-11.948 12.004-.001 0 0 0 0 0-2.003-.001-3.973-.524-5.717-1.516L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.602-1.01-5.05-2.85-6.893-1.84-1.842-4.29-2.856-6.893-2.858-5.442 0-9.868 4.372-9.872 9.744-.002 1.733.458 3.423 1.332 4.918l-.986 3.601 3.69-.96c1.52.831 2.91 1.251 4.39 1.251zM16.518 14.1c-.267-.134-1.58-.78-1.824-.868-.243-.088-.419-.133-.596.134-.177.265-.685.867-.839 1.046-.154.177-.309.2-.576.067-.267-.134-1.127-.417-2.148-1.327-.794-.709-1.33-1.584-1.486-1.85-.157-.267-.017-.412.117-.545.12-.12.267-.312.4-.469.133-.156.177-.267.267-.445.089-.178.044-.334-.022-.469-.067-.134-.596-1.436-.817-1.97-.215-.519-.432-.449-.596-.457-.154-.008-.33-.01-.506-.01-.177 0-.464.067-.706.334-.241.266-.921.9-.921 2.196 0 1.296.944 2.547 1.076 2.724.133.177 1.86 2.84 4.505 3.985.63.272 1.122.435 1.506.557.633.201 1.21.173 1.666.105.507-.076 1.58-.646 1.802-1.238.222-.593.222-1.101.155-1.209-.067-.108-.242-.177-.51-.31z"/></svg>
                </a>
                <a :href="profile.socials.instagram" target="_blank" class="text-slate-400 hover:text-teal-400 transition-colors flex items-center justify-center" title="Instagram">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/></svg>
                </a>
                <a :href="profile.socials.threads" target="_blank" class="text-slate-400 hover:text-teal-400 transition-colors flex items-center justify-center" title="Threads">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.182 15.442c-.397.647-1.02 1.09-1.868 1.33-.426.12-.9.18-1.424.18-.893 0-1.67-.168-2.33-.503-.66-.336-1.168-.823-1.523-1.463-.356-.64-.533-1.4-.533-2.28 0-.85.176-1.58.53-2.19.352-.613.856-1.08 1.512-1.4.656-.32 1.422-.48 2.3-.48.91 0 1.685.163 2.327.49.642.327 1.137.794 1.487 1.4.35 1.255.432 2.61.246 4.07-.152 1.18-.616 2.096-1.39 2.75-.776.653-1.743.98-2.9.98-1.515 0-2.766-.46-3.753-1.383C5.644 15.803 5.15 14.4 5.15 12.72c0-1.89.513-3.41 1.54-4.56C7.717 7.01 9.155 6.43 11 6.43c1.01 0 1.944.184 2.8.552.856.368 1.458.874 1.805 1.52l-1.526 1.03c-.227-.377-.597-.674-1.11-.89-.513-.217-1.117-.325-1.81-.325-1.248 0-2.222.404-2.923 1.21-.7 1.045-1.053 2.148-1.053 3.524 0 1.267.318 2.274.954 3.02.636.747 1.493 1.12 2.57 1.12.83 0 1.5-.205 2.01-.613.51-.41.815-.99.914-1.74l.056-.56c-.287.26-.643.46-1.07.6-.425.14-.882.21-1.37.21-.652 0-1.222-.123-1.71-.37-.487-.247-.866-.604-1.137-1.072-.27-.468-.406-1.025-.406-1.672 0-.67.142-1.237.426-1.7.284-.465.68-.818 1.187-1.06.507-.24 1.096-.362 1.767-.362.636 0 1.196.115 1.68.347.484.232.853.565 1.107.998l.084-.814h1.76l-.42 5.03c-.056.66-.017 1.162.115 1.51.13.344.384.517.76.517.388 0 .708-.184.96-.552.25-.368.423-.92.52-1.654.165-1.22.096-2.355-.208-3.4-.306-1.047-.84-1.874-1.603-2.483-.764-.61-1.727-.914-2.89-.914-1.42 0-2.61.47-3.568 1.41-.957.94-1.436 2.16-1.436 3.65 0 1.423.447 2.57 1.34 3.44.893.87 2.054 1.306 3.483 1.306.963 0 1.834-.21 2.612-.633.778-.422 1.353-.997 1.724-1.724l1.525.922z"/></svg>
                </a>
              </div>
            </div>

          </div>
        </section>

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

        <section id="projects" class="scroll-mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-900 pt-16">
          <div class="md:col-span-1"><h2 class="text-2xl font-bold tracking-tight text-teal-400 font-mono uppercase">/ {{ t.projects.title }}</h2></div>
          <div class="md:col-span-2">
            <div class="bg-slate-900/20 border border-slate-900 p-6 md:p-8 rounded-2xl space-y-6">
              <div>
                <span class="text-xs font-mono px-2 py-1 bg-teal-500/10 text-teal-400 rounded border border-teal-500/20">Featured Project</span>
                <h3 class="text-xl md:text-2xl font-bold text-slate-100 mt-3">{{ t.projects.nayastra.title }}</h3>
                <p class="text-sm text-slate-400 mt-1 italic">{{ t.projects.nayastra.subtitle }}</p>
              </div>
              <div>
                <NuxtLink to="/nasyastra" class="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-lg text-sm transition-all duration-300 hover:scale-[1.02]">
                  {{ t.projects.nayastra.btn_view_details }} →
                </NuxtLink>
              </div>
            </div>
          </div>
        </section>

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

    <footer class="border-t border-slate-900 mt-24 py-10 text-center space-y-4">
      <div class="flex justify-center gap-6 text-sm font-mono">
        <a :href="profile.socials.whatsapp" target="_blank" class="text-slate-500 hover:text-teal-400 transition-colors">WhatsApp</a>
        <a :href="profile.socials.instagram" target="_blank" class="text-slate-500 hover:text-teal-400 transition-colors">Instagram</a>
        <a :href="profile.socials.threads" target="_blank" class="text-slate-500 hover:text-teal-400 transition-colors">Threads</a>
      </div>
      <p class="text-xs font-mono text-slate-600">© 2026 Cerdas Gabriel Lesmana. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const currentLang = useState('lang', () => 'id')
const toggleLang = () => { currentLang.value = currentLang.value === 'id' ? 'en' : 'id' }

// FIXED: Fungsi scroll manual khusus agar sinkron penuh dengan sistem Hash Mode tanpa merusak routing
const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const profile = {
  email: 'lesmanacerdas.100@gmail.com',
  socials: {
    whatsapp: 'https://wa.me/6282246330981', 
    instagram: 'https://instagram.com/gabrillesmana_',
    threads: 'https://threads.net/@cerdasgabriel'
  },
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
    navbar: { about: 'Tentang', skills: 'Keahlian', projects: 'Project', experience: 'Pengalaman', certificates: 'Sertifikat' },
    hero: {
      welcome: 'Full-Stack / Mobile Developer',
      greeting: 'Halo, Saya Cerdas Gabriel Lesmana.',
      tagline: 'Junior Fullstack Developer | Web & Mobile Specialist',
      sub_tagline: 'Menghubungkan kode yang efisien dengan strategi digital. Berpengalaman dalam membangun sistem pelayanan kesehatan serta manajemen deployment web & mobile dari hulu ke hilir. Saat ini sedang menempuh studi Magister Ilmu Komputer.',
      cta_work: 'Lihat Project',
      cta_contact: 'Hubungi Saya',
      connect_text: 'Kontak:'
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
    navbar: { about: 'About', skills: 'Skills', projects: 'Projects', experience: 'Experience', certificates: 'Certificates' },
    hero: {
      welcome: 'Full-Stack / Mobile Developer',
      greeting: "Hi, I'm Cerdas Gabriel Lesmana.",
      tagline: 'Junior Fullstack Developer | Web & Mobile Specialist',
      sub_tagline: 'Bridging scalable code with digital strategy. Experienced in building comprehensive healthcare systems and managing end-to-end web & mobile deployment. Currently pursuing a Master\'s degree in Computer Science.',
      cta_work: 'View My Works',
      cta_contact: 'Contact Me',
      connect_text: 'Connect:'
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
</style>