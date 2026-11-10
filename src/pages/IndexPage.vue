<template>
  <q-page id="top">
    <!-- ================= HERO ================= -->
    <section class="hero">
      <div class="hero-grid-bg" aria-hidden="true" />
      <div class="container hero-inner">
        <div class="hero-copy">
          <div class="pill hero-status" v-reveal>
            <span class="status-dot" />
            Currently Frontend Developer at <strong>Sinyatek</strong>
          </div>

          <h1 class="hero-title display" v-reveal="0.08">
            Kürşat<br>Şahin<span class="hero-dot">.</span>
          </h1>

          <p class="hero-lead" v-reveal="0.16">
            <span class="hl">Frontend Developer</span> crafting fast, accessible and
            user-focused web interfaces with React, Next.js, Vue.js &amp; Quasar.
          </p>

          <div class="hero-actions" v-reveal="0.24">
            <a class="btn btn-red" href="#projects" @click.prevent="scrollTo('projects')">
              See my work
              <span class="btn-arrow"><q-icon name="arrow_forward" size="14px" /></span>
            </a>
            <a class="btn btn-ghost" href="https://www.linkedin.com/in/kursat-sahin0/" target="_blank" rel="noopener">
              LinkedIn ↗
            </a>
            <a class="btn btn-ghost" href="https://github.com/kursadsahin0" target="_blank" rel="noopener">
              GitHub ↗
            </a>
          </div>
        </div>

        <div class="hero-visual" v-reveal="0.2">
          <div class="photo-card">
            <img :src="profilePicture" alt="Kürşat Şahin" class="photo">
            <div class="photo-tag">
              <q-icon name="place" size="16px" /> Trabzon, Türkiye
            </div>
          </div>
          <img
            class="icon3d icon3d--computer"
            :src="icon('5f20be-computer')"
            alt=""
            @error="hideImg"
          >
          <img
            class="icon3d icon3d--fire"
            :src="icon('6bfe8c-fire')"
            alt=""
            @error="hideImg"
          >
          <div class="sticker">
            <svg viewBox="0 0 100 100" class="sticker-ring">
              <defs>
                <path id="circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
              </defs>
              <text>
                <textPath href="#circle">OPEN TO WORK • OPEN TO WORK • </textPath>
              </text>
            </svg>
            <q-icon name="north_east" size="22px" class="sticker-arrow" />
          </div>
        </div>
      </div>

      <!-- Skills marquee -->
      <div class="marquee" aria-label="Skills">
        <div class="marquee-track">
          <span v-for="(s, i) in [...skills, ...skills]" :key="i" class="marquee-item">
            {{ s }} <span class="marquee-star">✦</span>
          </span>
        </div>
      </div>
    </section>

    <!-- ================= ABOUT ================= -->
    <section id="about" class="section">
      <div class="container">
        <div class="about-grid">
          <div>
            <span class="eyebrow" v-reveal>About me</span>
            <h2 class="section-title" v-reveal="0.05">
              Interfaces that feel <em>effortless</em>.
            </h2>
          </div>
          <div class="about-text" v-reveal="0.1">
            <p>
              I'm a frontend developer who puts user experience at the centre of everything I build. I work with
              modern JavaScript technologies like ReactJS, Next.js, Vue.js and Quasar, focusing on
              <strong>performance, accessibility and scalability</strong>.
            </p>
            <p>
              Thanks to my fast learning and adaptability, I ramp up on new projects quickly and contribute
              effectively. I care about clean, maintainable code, component-driven architecture and
              user-centred functionality.
            </p>
          </div>
        </div>

        <!-- Stats -->
        <div class="stats">
          <div v-for="(s, i) in stats" :key="s.label" class="stat" v-reveal="i * 0.08">
            <div class="stat-value display">{{ s.value }}</div>
            <div class="stat-label">{{ s.label }}</div>
          </div>
        </div>

        <!-- Bento cards -->
        <div class="bento">
          <article class="bento-card bento-card--ink" v-reveal>
            <span class="bento-icon-wrap"><img :src="icon('744cc0-rocket')" alt="" class="bento-icon" @error="hideImg"></span>
            <h3>Performance first</h3>
            <p>Lean bundles, smart rendering and smooth interactions on every device.</p>
          </article>
          <article class="bento-card bento-card--mint" v-reveal="0.08">
            <img :src="icon('5f20be-computer')" alt="" class="bento-icon" @error="hideImg">
            <h3>Component architecture</h3>
            <p>Modular, reusable and sustainable UI systems that scale with the product.</p>
          </article>
          <article class="bento-card" v-reveal="0.16">
            <img :src="icon('eec43d-chat-bubble')" alt="" class="bento-icon" @error="hideImg">
            <h3>REST API integration</h3>
            <p>Clean data flows and optimised user interactions backed by real APIs.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ================= EXPERIENCE ================= -->
    <section id="experience" class="section section--dark">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow eyebrow--dark" v-reveal>Experience</span>
            <h2 class="section-title" v-reveal="0.05">Where I've <em>worked</em>.</h2>
          </div>
          <p class="section-sub" v-reveal="0.1">
            From solo-owning a company's entire frontend to building scalable apps in modern teams.
          </p>
        </div>

        <ol class="timeline">
          <li v-for="(job, i) in experience" :key="job.company" class="job" v-reveal="i * 0.05">
            <div class="job-meta">
              <span class="job-date">{{ job.date }}</span>
              <span class="job-loc">{{ job.location }}</span>
            </div>
            <div class="job-body">
              <div class="job-head">
                <h3 class="job-company display">{{ job.company }}</h3>
                <span v-if="job.current" class="job-badge"><span class="status-dot" /> Current</span>
              </div>
              <div class="job-role">{{ job.role }}</div>
              <ul class="job-points">
                <li v-for="p in job.points" :key="p">{{ p }}</li>
              </ul>
              <div class="job-tags">
                <span v-for="t in job.tags" :key="t" class="tag-dark">{{ t }}</span>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- ================= PROJECTS ================= -->
    <section id="projects" class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <span class="eyebrow" v-reveal>Selected work</span>
            <h2 class="section-title" v-reveal="0.05">Things I've <em>built</em>.</h2>
          </div>
          <a class="btn btn-ghost" href="https://github.com/kursadsahin0" target="_blank" rel="noopener" v-reveal="0.1">
            All projects on GitHub ↗
          </a>
        </div>

        <div class="projects">
          <article
            v-for="(p, i) in projects"
            :key="p.name"
            class="project"
            :class="{ 'project--wide': p.wide }"
            v-reveal="(i % 2) * 0.08"
          >
            <a
              :href="p.url || p.github"
              target="_blank"
              rel="noopener"
              class="project-cover"
              :class="{ 'project-cover--dark': p.dark }"
              :style="{ '--cover': p.color }"
              :aria-label="`${p.name} — ${p.url ? 'live site' : 'source code'}`"
            >
              <img v-if="p.image" :src="p.image" :alt="p.name" class="project-img" loading="lazy">
              <template v-else>
                <span class="project-initial display">{{ p.name }}</span>
                <img :src="icon(p.icon)" alt="" class="project-3d" loading="lazy" @error="hideImg">
              </template>
              <span v-if="p.badge" class="project-badge">{{ p.badge }}</span>
              <span class="project-go"><q-icon name="north_east" size="20px" /></span>
            </a>
            <div class="project-info">
              <div class="project-text">
                <h3 class="project-name">{{ p.name }}</h3>
                <p class="project-desc">{{ p.description }}</p>
                <div class="project-tags">
                  <span v-for="t in p.tags" :key="t" class="pill">{{ t }}</span>
                </div>
              </div>
              <div class="project-links">
                <a v-if="p.url" :href="p.url" target="_blank" rel="noopener" class="project-link project-link--live">
                  Live <q-icon name="north_east" size="14px" />
                </a>
                <a v-if="p.github" :href="p.github" target="_blank" rel="noopener" class="project-link">
                  <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
                  Code
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ================= SKILLS / EDUCATION ================= -->
    <section class="section section--tight">
      <div class="container">
        <div class="edu-grid">
          <div class="edu-card" v-reveal>
            <img :src="icon('49654f-trophy')" alt="" class="edu-icon" @error="hideImg">
            <span class="eyebrow">Education</span>
            <h3 class="edu-title display">Bartın University</h3>
            <p class="edu-sub">Management Information Systems (English)</p>
            <span class="pill">2016 – 2021 · Bachelor's degree</span>
          </div>

          <div class="edu-card edu-card--surface" v-reveal="0.08">
            <span class="eyebrow">Certificates</span>
            <ul class="cert-list">
              <li v-for="c in certs" :key="c">
                <q-icon name="verified" size="20px" class="cert-icon" />
                {{ c }}
              </li>
            </ul>
          </div>

          <div class="edu-card edu-card--wide" v-reveal="0.12">
            <span class="eyebrow">Toolbox</span>
            <div class="skill-cloud">
              <span v-for="s in skills" :key="s" class="skill">{{ s }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import profilePicture from 'assets/profile_picture.png'

// 3D icons from 3dicons.co (CC0)
const ICON_BASE = 'https://bvconuycpdvgzbvbkijl.supabase.co/storage/v1/object/public/sizes'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const icon = (id) => `${ICON_BASE}/${id}/dynamic/400/color.webp`
    const hideImg = (e) => { e.target.style.display = 'none' }
    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

    const skills = [
      'React', 'Next.js', 'Vue.js', 'Quasar', 'JavaScript',
      'HTML / CSS / SCSS', 'Chart.js', 'REST API', 'PHP', 'Jira', 'Responsive Design'
    ]

    const stats = [
      { value: '3+', label: 'Years building for the web' },
      { value: '4', label: 'Companies & clients' },
      { value: '10+', label: 'Projects shipped' },
      { value: '4', label: 'Frameworks in daily use' }
    ]

    const experience = [
      {
        company: 'Sinyatek',
        role: 'Frontend Developer',
        date: 'Nov 2025 — Present',
        location: 'Kocaeli',
        current: true,
        points: [
          'Leading frontend development of a scalable web application with Vue.js and Quasar Framework.',
          'Building modular, maintainable and reusable component structures with a modern frontend architecture.',
          'Integrating REST APIs to optimise data management and user interactions.',
          'Improving UX, interface performance and overall code quality.'
        ],
        tags: ['Vue.js', 'Quasar', 'REST API']
      },
      {
        company: 'Pazaryeri Converter',
        role: 'Frontend Developer · Freelance',
        date: 'May 2025 — Jun 2025',
        location: 'Ankara',
        points: [
          'Identified and fixed bugs across web interfaces, improving UI functionality.',
          'Ensured visual consistency with Next.js and refined the interface to improve user experience.'
        ],
        tags: ['Next.js', 'UI/UX']
      },
      {
        company: 'Daynex Yazılım',
        role: 'Frontend Developer',
        date: 'Jun 2024 — Aug 2024',
        location: 'Trabzon',
        points: [
          'Built web interfaces and delivered visual and functional integrations.',
          'Developed user-experience focused solutions.'
        ],
        tags: ['JavaScript', 'UI']
      },
      {
        company: 'Toonlands',
        role: 'Frontend Developer',
        date: 'Oct 2022 — Feb 2023',
        location: 'Bursa',
        points: [
          "Solely responsible for all of the company's frontend development.",
          'Built dynamic, user-friendly web interfaces with Next.js.',
          'Adapted quickly to new technologies and delivered under a fast-paced, demanding schedule.'
        ],
        tags: ['Next.js', 'React']
      }
    ]

    const GH = 'https://github.com/kursadsahin0/'
    const projects = [
      {
        name: 'KPSS Haritası',
        url: 'https://kpssharitasi.com.tr/',
        github: GH + 'kpssharitasi',
        description: 'Interactive map-based study platform for KPSS candidates — a live product with real users.',
        tags: ['Vue.js', 'Quasar', 'Pinia', 'Interactive map'],
        color: '#f42902',
        icon: '1858b9-map-pin',
        badge: 'Live product',
        wide: true
      },
      {
        name: 'menümGo',
        url: 'https://menumgo.netlify.app/',
        github: GH + 'menumGo',
        description: 'QR menu SaaS for cafés & restaurants: TR/EN menus, allergens, stock flags and an admin dashboard with analytics.',
        tags: ['Vue.js', 'Quasar', 'Fastify', 'Prisma', 'Chart.js'],
        color: '#83fd80',
        icon: '628100-notebook',
        badge: 'Full-stack'
      },
      {
        name: 'ParkKasa',
        url: 'https://park-kasa.vercel.app',
        github: GH + 'park_kasa',
        description: 'Parking-lot cash register panel: entries/exits, subscribers, receipts, end-of-day reports and CSV export.',
        tags: ['Vue.js', 'Quasar', 'Supabase', 'Pinia'],
        color: '#fff1c2',
        icon: 'dd7474-calculator',
        badge: 'SaaS'
      },
      {
        name: 'PDFix',
        url: 'https://pdfixx.netlify.app/',
        github: GH + 'pdfix',
        description: 'Modern PDF editor for web, Android and iOS — view, edit and share PDFs right on the device.',
        tags: ['Quasar', 'Capacitor', 'pdf-lib', 'PDF.js'],
        color: '#ffd6cc',
        icon: '65d841-file-text',
        badge: 'Web · iOS · Android'
      },
      {
        name: 'CodeDNA',
        url: 'https://codednas.netlify.app/',
        github: GH + 'codeDNA',
        description: 'Developer workspace for exploring repository structure, dependency graphs and change history.',
        tags: ['Next.js', 'React', 'TypeScript', 'Radix UI'],
        color: '#0e0e10',
        icon: 'a68576-puzzle',
        dark: true
      },
      {
        name: 'Tidelark',
        github: GH + 'turkuaz-adalar',
        description: 'Mobile-first endless island runner game with 3D physics, built for the web and mobile stores.',
        tags: ['Three.js', 'TypeScript', 'Rapier3D', 'Capacitor'],
        color: '#cdf3ff',
        icon: '801da3-sun',
        badge: 'Game'
      },
      {
        name: 'Liora Beauty',
        url: 'https://liorabeaut.netlify.app/',
        github: GH + 'liora-beauty',
        description: 'Premium one-page site for a beauty studio with services, gallery and appointment booking.',
        tags: ['Next.js', 'React', 'GSAP', 'TypeScript'],
        color: '#e9fde8',
        icon: '82db59-color-palette'
      },
      {
        name: 'Tripma',
        url: 'https://tripmavacation.netlify.app/',
        github: GH + 'tripma',
        description: 'Flight booking web app built from a Figma community design — search, select and book flows.',
        tags: ['Vue 3', 'Pinia', 'Vue Router'],
        color: '#ffe8f0',
        icon: '0ef25b-calender'
      },
      {
        name: 'Crypto Currency',
        url: 'https://cryptocurrencytest.netlify.app/',
        github: GH + 'crypto',
        description: 'Real-time cryptocurrency tracker with charts, coin details and listings.',
        tags: ['React', 'Chart.js', 'Ant Design', 'REST API'],
        color: '#f42902',
        icon: '4a4275-chart'
      },
      {
        name: 'Restaurant',
        url: 'https://restaurantbarva.netlify.app/',
        github: GH + 'restaurant-reactjs',
        description: 'Restaurant site focused on presentation, menu and reservations.',
        tags: ['React', 'React Router', 'Responsive'],
        color: '#fff1c2',
        icon: 'f71a3e-bag'
      },
      {
        name: 'Recipe App',
        url: 'https://foodanrecipe.netlify.app/',
        github: GH + 'food-recipe-app',
        description: 'Recipe application with categories, search and recipe detail pages.',
        tags: ['React', 'SCSS', 'React Router'],
        color: '#83fd80',
        icon: '6bfe8c-fire'
      }
    ]

    const certs = [
      'API & API Testing',
      'Responsive Web Design',
      'Web Development Fundamentals',
      'Software Test Automation'
    ]

    return { profilePicture, icon, hideImg, scrollTo, skills, stats, experience, projects, certs }
  }
})
</script>

<style scoped>
/* ================= HERO ================= */
.hero {
  position: relative;
  padding-top: 8.5rem;
  overflow: hidden;
}

.hero-grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--line) 1px, transparent 1px),
    linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse at 70% 30%, #000 10%, transparent 65%);
  -webkit-mask-image: radial-gradient(ellipse at 70% 30%, #000 10%, transparent 65%);
  pointer-events: none;
}

.hero-inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 3rem;
  align-items: center;
  padding-bottom: 4rem;
}

.hero-status {
  font-size: 0.85rem;
  padding: 0.5rem 1rem;
  box-shadow: 0 6px 20px -10px rgba(14, 14, 16, 0.2);
}

.hero-title {
  font-size: clamp(4rem, 13vw, 10.5rem);
  margin: 1.5rem 0 1.5rem;
  font-weight: 800;
}

.hero-dot {
  color: var(--red);
}

.hero-lead {
  font-size: clamp(1.1rem, 1.8vw, 1.35rem);
  line-height: 1.55;
  color: var(--muted);
  max-width: 32rem;
  margin-bottom: 2.25rem;
}

.hl {
  color: var(--ink);
  font-weight: 600;
  background: linear-gradient(transparent 60%, var(--mint) 60%);
  padding: 0 0.15em;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.hero-visual {
  position: relative;
  justify-self: center;
  width: min(100%, 400px);
}

.photo-card {
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: 200px 200px var(--radius-lg) var(--radius-lg);
  overflow: hidden;
  background: var(--red);
  transform: rotate(2deg);
  box-shadow: 0 40px 80px -30px rgba(244, 41, 2, 0.55);
}

.photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  display: block;
}

.photo-tag {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  background: rgba(253, 253, 255, 0.92);
  backdrop-filter: blur(8px);
  font-size: 0.82rem;
  font-weight: 600;
}

.icon3d {
  position: absolute;
  pointer-events: none;
  mix-blend-mode: multiply;
  animation: float 6s ease-in-out infinite;
}

.icon3d--computer {
  width: 46%;
  left: -24%;
  top: 8%;
  --rot: -10deg;
}

.icon3d--fire {
  width: 30%;
  right: -16%;
  bottom: -6%;
  --rot: 12deg;
  animation-delay: -2.5s;
}

.sticker {
  position: absolute;
  right: -6%;
  top: -4%;
  width: 112px;
  height: 112px;
  border-radius: 50%;
  background: var(--mint);
  display: grid;
  place-items: center;
  box-shadow: 0 16px 30px -12px rgba(14, 14, 16, 0.35);
}

.sticker-ring {
  position: absolute;
  inset: 0;
  animation: spin 14s linear infinite;
}

.sticker-ring text {
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 1.6px;
  fill: var(--ink);
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Marquee */
.marquee {
  position: relative;
  background: var(--ink);
  color: var(--paper);
  padding: 1.1rem 0;
  overflow: hidden;
  transform: rotate(-1.5deg);
  margin: 1rem -2rem 0;
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 32s linear infinite;
}

.marquee-item {
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
  padding-right: 1.5rem;
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 2.5vw, 1.9rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  white-space: nowrap;
}

.marquee-star {
  color: var(--mint);
  font-size: 0.8em;
}

@media (max-width: 900px) {
  .hero {
    padding-top: 7rem;
  }

  .hero-inner {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }

  .hero-visual {
    width: min(78%, 340px);
    order: -1;
  }
}

@media (max-width: 600px) {
  .hero-status {
    font-size: 0.78rem;
  }

  .hero-title {
    margin: 1.25rem 0;
  }

  .sticker {
    width: 88px;
    height: 88px;
  }

  .icon3d--computer {
    left: -18%;
  }
}

/* ================= ABOUT ================= */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: end;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--muted);
  margin-bottom: 1rem;
}

.about-text strong {
  color: var(--ink);
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 4rem 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.stat {
  padding: 2rem 1.25rem;
  border-right: 1px solid var(--line);
}

.stat:last-child {
  border-right: none;
}

.stat-value {
  font-size: clamp(2.8rem, 6vw, 4.5rem);
  color: var(--red);
}

.stat-label {
  margin-top: 0.5rem;
  color: var(--muted);
  font-size: 0.92rem;
}

.bento {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.bento-card {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-lg);
  padding: 2rem;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: var(--surface);
  transition: transform 0.5s var(--ease);
}

.bento-card:hover {
  transform: translateY(-6px);
}

.bento-card h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 0.5rem;
  line-height: 1.15;
}

.bento-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.55;
}

.bento-card--ink {
  background: var(--ink);
  color: var(--paper);
}

.bento-card--ink p {
  color: var(--muted-light);
}

.bento-card--mint {
  background: var(--mint);
}

.bento-card--mint p {
  color: rgba(14, 14, 16, 0.7);
}

.bento-icon {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 130px;
  transition: transform 0.6s var(--ease);
  mix-blend-mode: multiply;
}

.bento-card--ink .bento-icon-wrap {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 130px;
  height: 130px;
  border-radius: 32px;
  overflow: hidden;
  background: var(--mint);
  isolation: isolate;
  transform: rotate(6deg);
}

.bento-card--ink .bento-icon-wrap .bento-icon {
  top: 5px;
  right: 5px;
  width: 120px;
}

.bento-card:hover .bento-icon {
  transform: rotate(-8deg) scale(1.08);
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat:nth-child(2) {
    border-right: none;
  }

  .stat:nth-child(-n + 2) {
    border-bottom: 1px solid var(--line);
  }

  .bento {
    grid-template-columns: 1fr;
  }

  .bento-card {
    min-height: 240px;
  }
}

/* ================= EXPERIENCE ================= */
.section--dark {
  background: var(--ink);
  color: var(--paper);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.section--dark + .section {
  border-radius: 0;
}

.eyebrow--dark {
  color: var(--muted-light);
}

.eyebrow--dark::before {
  background: var(--mint);
}

.section--dark .section-title em {
  color: var(--mint);
}

.section-sub {
  max-width: 26rem;
  color: var(--muted-light);
  line-height: 1.6;
  margin: 0;
}

.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
}

.job {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 2rem;
  padding: 2.5rem 0;
  border-top: 1px solid var(--line-dark);
  transition: background 0.4s var(--ease);
}

.job:last-child {
  border-bottom: 1px solid var(--line-dark);
}

.job-meta {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.job-date {
  font-weight: 600;
  color: var(--paper);
}

.job-loc {
  color: var(--muted-light);
  font-size: 0.9rem;
}

.job-head {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.job-company {
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  margin: 0;
  transition: color 0.3s;
}

.job:hover .job-company {
  color: var(--red);
}

.job-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  background: rgba(131, 253, 128, 0.12);
  color: var(--mint);
  font-size: 0.8rem;
  font-weight: 600;
}

.job-role {
  color: var(--muted-light);
  margin: 0.5rem 0 1rem;
}

.job-points {
  margin: 0 0 1.25rem;
  padding-left: 1.1rem;
  color: rgba(253, 253, 255, 0.82);
  line-height: 1.65;
  max-width: 46rem;
}

.job-points li::marker {
  color: var(--red);
}

.job-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-dark {
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  border: 1px solid var(--line-dark);
  font-size: 0.8rem;
  color: var(--muted-light);
}

@media (max-width: 767px) {
  .job {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    padding: 2rem 0;
  }

  .job-meta {
    flex-direction: row;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
}

/* ================= PROJECTS ================= */
.projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.project {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  color: var(--ink);
}

.project--wide {
  grid-column: 1 / -1;
}

.project-cover {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-lg);
  aspect-ratio: 16 / 10;
  background: var(--cover, var(--surface));
  isolation: isolate;
}

.project--wide .project-cover {
  aspect-ratio: 21 / 9;
}

.project-cover {
  display: block;
}

.project-cover--dark .project-initial {
  color: var(--paper);
}

.project-cover--dark .project-3d {
  mix-blend-mode: normal;
  border-radius: 28px;
  width: 30%;
  top: 40%;
}

.project-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  background: var(--ink);
  color: var(--mint);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  z-index: 2;
}

.project-text {
  min-width: 0;
}

.project-text .project-tags {
  margin-top: 0.9rem;
}

.project-links {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  font-size: 0.88rem;
  font-weight: 600;
  transition: background 0.25s, color 0.25s, border-color 0.25s;
}

.project-link:hover {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--paper);
}

.project-link--live {
  background: var(--red);
  border-color: var(--red);
  color: var(--paper);
}

.project-link--live:hover {
  background: var(--red-dark);
  border-color: var(--red-dark);
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
  transition: transform 0.8s var(--ease);
}

.project-initial {
  position: absolute;
  left: 1.75rem;
  bottom: 1.25rem;
  font-size: clamp(2.2rem, 6vw, 5rem);
  font-weight: 800;
  color: var(--ink);
  max-width: 60%;
  line-height: 0.95;
}

.project-3d {
  position: absolute;
  right: 6%;
  top: 50%;
  width: 38%;
  max-width: 260px;
  transform: translateY(-50%) rotate(-8deg);
  mix-blend-mode: multiply;
  transition: transform 0.8s var(--ease);
}

.project-go {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--paper);
  color: var(--ink);
  transform: scale(0.6);
  opacity: 0;
  transition: transform 0.4s var(--ease), opacity 0.4s var(--ease), background 0.3s;
  z-index: 2;
}

.project-cover:hover .project-go {
  transform: scale(1);
  opacity: 1;
  background: var(--red);
  color: var(--paper);
}

.project-cover:hover .project-img {
  transform: scale(1.05);
}

.project-cover:hover .project-3d {
  transform: translateY(-55%) rotate(4deg) scale(1.06);
}

.project-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.1rem;
}

.project-name {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 0.3rem;
}

.project-desc {
  margin: 0;
  color: var(--muted);
  max-width: 34rem;
  line-height: 1.55;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

@media (max-width: 767px) {
  .projects {
    grid-template-columns: 1fr;
  }

  .project--wide .project-cover {
    aspect-ratio: 16 / 10;
  }

  .project-go {
    opacity: 1;
    transform: scale(0.85);
  }
}

/* ================= EDUCATION ================= */
.section--tight {
  padding-top: 0;
}

.edu-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.edu-card {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
  padding: 2rem;
}

.edu-card--surface {
  background: var(--surface);
  border-color: transparent;
}

.edu-card--wide {
  grid-column: 1 / -1;
}

.edu-icon {
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 120px;
  mix-blend-mode: multiply;
}

.edu-title {
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  margin: 1rem 0 0.5rem;
  max-width: 70%;
}

.edu-sub {
  color: var(--muted);
  margin-bottom: 1.25rem;
}

.cert-list {
  list-style: none;
  padding: 0;
  margin: 1.25rem 0 0;
}

.cert-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 0;
  border-bottom: 1px solid var(--line);
  font-weight: 500;
}

.cert-list li:last-child {
  border-bottom: none;
}

.cert-icon {
  color: var(--red);
}

.skill-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.25rem;
}

.skill {
  padding: 0.7rem 1.2rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  font-weight: 500;
  transition: background 0.25s, color 0.25s, border-color 0.25s, transform 0.25s var(--ease);
}

.skill:hover {
  background: var(--ink);
  color: var(--mint);
  border-color: var(--ink);
  transform: translateY(-3px);
}

@media (max-width: 767px) {
  .edu-grid {
    grid-template-columns: 1fr;
  }

  .edu-icon {
    width: 84px;
  }
}
</style>
