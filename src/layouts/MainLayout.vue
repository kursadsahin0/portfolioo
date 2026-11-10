<template>
  <q-layout view="hHh lpR fFf">
    <!-- Scroll progress -->
    <div class="scroll-progress" :style="{ transform: `scaleX(${progress})` }" />

    <!-- Floating pill navbar -->
    <header class="nav-wrap" :class="{ 'is-scrolled': scrolled, 'menu-open': menuOpen }">
      <nav class="nav">
        <a href="#top" class="brand" @click.prevent="go('top')">
          <span class="brand-mark" aria-hidden="true">K<span class="brand-dot" /></span>
          <span class="brand-name">Kürşat Şahin</span>
        </a>

        <ul class="nav-links">
          <li v-for="l in links" :key="l.id">
            <a :href="`#${l.id}`" :class="{ active: active === l.id }" @click.prevent="go(l.id)">
              {{ l.label }}
            </a>
          </li>
        </ul>

        <div class="nav-actions">
          <a class="btn btn-red nav-cta" href="mailto:kursatsahin565@gmail.com">
            Let's talk
            <span class="btn-arrow"><q-icon name="arrow_forward" size="14px" /></span>
          </a>
          <button
            class="burger"
            :class="{ open: menuOpen }"
            aria-label="Menu"
            :aria-expanded="menuOpen"
            @click="menuOpen = !menuOpen"
          >
            <span /><span />
          </button>
        </div>
      </nav>
    </header>

    <!-- Full-screen mobile menu -->
    <transition name="menu">
      <div v-if="menuOpen" class="mobile-menu">
        <ul>
          <li v-for="(l, i) in links" :key="l.id" :style="{ '--i': i }">
            <a :href="`#${l.id}`" @click.prevent="go(l.id)">
              <span class="mm-index">0{{ i + 1 }}</span>{{ l.label }}
            </a>
          </li>
        </ul>
        <div class="mm-social">
          <a href="https://www.linkedin.com/in/kursat-sahin0/" target="_blank" rel="noopener">LinkedIn ↗</a>
          <a href="https://github.com/kursadsahin0" target="_blank" rel="noopener">GitHub ↗</a>
          <a href="mailto:kursatsahin565@gmail.com">Email ↗</a>
        </div>
      </div>
    </transition>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- CTA -->
    <section id="contact" class="cta-section">
      <div class="container">
        <div class="cta-card reveal" v-reveal>
          <img
            class="cta-icon cta-icon--a"
            src="https://bvconuycpdvgzbvbkijl.supabase.co/storage/v1/object/public/sizes/eec43d-chat-bubble/dynamic/400/color.webp"
            alt=""
            loading="lazy"
            @error="hideImg"
          >
          <img
            class="cta-icon cta-icon--b"
            src="https://bvconuycpdvgzbvbkijl.supabase.co/storage/v1/object/public/sizes/744cc0-rocket/dynamic/400/color.webp"
            alt=""
            loading="lazy"
            @error="hideImg"
          >
          <span class="eyebrow eyebrow--light">Open to new opportunities</span>
          <h2 class="cta-title display">
            Have a project in mind?<br>
            <span class="cta-accent">Let's build it.</span>
          </h2>
          <p class="cta-text">
            I'm open to full-time roles, freelance work and collaborations. Drop me a line and I'll get back
            to you shortly.
          </p>
          <div class="cta-actions">
            <a class="btn btn-mint" href="mailto:kursatsahin565@gmail.com">
              Send an email
              <span class="btn-arrow"><q-icon name="arrow_forward" size="14px" /></span>
            </a>
            <button class="btn btn-outline-light" @click="copyEmail">
              <q-icon :name="copied ? 'check' : 'content_copy'" size="16px" />
              {{ copied ? 'Copied!' : 'kursatsahin565@gmail.com' }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-col">
            <div class="footer-label">Navigation</div>
            <a v-for="l in links" :key="l.id" :href="`#${l.id}`" @click.prevent="go(l.id)">{{ l.label }}</a>
          </div>
          <div class="footer-col">
            <div class="footer-label">Socials</div>
            <a href="https://www.linkedin.com/in/kursat-sahin0/" target="_blank" rel="noopener">LinkedIn ↗</a>
            <a href="https://github.com/kursadsahin0" target="_blank" rel="noopener">GitHub ↗</a>
          </div>
          <div class="footer-col">
            <div class="footer-label">Contact</div>
            <a href="mailto:kursatsahin565@gmail.com">kursatsahin565@gmail.com</a>
            <a href="tel:+905433728561">+90 543 372 85 61</a>
            <span>Trabzon, Türkiye</span>
          </div>
          <button class="to-top" aria-label="Back to top" @click="go('top')">
            <q-icon name="north" size="22px" />
          </button>
        </div>

        <div class="footer-wordmark" aria-hidden="true">KÜRŞAT<span>.</span></div>

        <div class="footer-bottom">
          <span>© {{ year }} Kürşat Şahin. All rights reserved.</span>
        </div>
      </div>
    </footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted, onBeforeUnmount, watch } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const links = [
      { id: 'about', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' }
    ]
    const menuOpen = ref(false)
    const scrolled = ref(false)
    const progress = ref(0)
    const active = ref('')
    const copied = ref(false)
    const year = new Date().getFullYear()

    const go = (id) => {
      menuOpen.value = false
      if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    const onScroll = () => {
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      scrolled.value = y > 20
      progress.value = max > 0 ? Math.min(y / max, 1) : 0

      let current = ''
      for (const l of links) {
        const el = document.getElementById(l.id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) current = l.id
      }
      active.value = current
    }

    const copyEmail = async () => {
      try {
        await navigator.clipboard.writeText('kursatsahin565@gmail.com')
        copied.value = true
        setTimeout(() => { copied.value = false }, 1800)
      } catch (e) {
        window.location.href = 'mailto:kursatsahin565@gmail.com'
      }
    }

    const hideImg = (e) => { e.target.style.display = 'none' }

    watch(menuOpen, (v) => {
      document.body.style.overflow = v ? 'hidden' : ''
    })

    onMounted(() => {
      window.addEventListener('scroll', onScroll, { passive: true })
      onScroll()
    })
    onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

    return { links, menuOpen, scrolled, progress, active, copied, year, go, copyEmail, hideImg }
  }
})
</script>

<style scoped>
/* ---------- Progress ---------- */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--red), var(--mint));
  transform-origin: 0 50%;
  z-index: 3000;
}

/* ---------- Navbar ---------- */
.nav-wrap {
  position: fixed;
  top: 14px;
  left: 0;
  right: 0;
  z-index: 2000;
  padding: 0 1rem;
  pointer-events: none;
}

.nav {
  pointer-events: auto;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem 0.5rem 0.5rem 0.75rem;
  border-radius: 999px;
  background: rgba(253, 253, 255, 0.7);
  border: 1px solid var(--line);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  transition: box-shadow 0.4s var(--ease), background 0.4s var(--ease);
}

.is-scrolled .nav {
  background: rgba(253, 253, 255, 0.88);
  box-shadow: 0 12px 40px -16px rgba(14, 14, 16, 0.25);
}

.menu-open .nav {
  background: var(--paper);
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.brand-mark {
  position: relative;
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  padding-right: 6px;
  border-radius: 10px;
  background: var(--red);
  color: var(--paper);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.45rem;
  line-height: 1;
  transition: transform 0.4s var(--ease);
}

.brand:hover .brand-mark {
  transform: rotate(-6deg);
}

.brand-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--mint);
  right: 4.5px;
  top: 23px;
}

.brand-name {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  display: block;
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--muted);
  transition: color 0.25s, background 0.25s;
}

.nav-links a:hover {
  color: var(--ink);
}

.nav-links a.active {
  color: var(--ink);
  background: var(--surface);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-cta {
  padding: 0.6rem 0.7rem 0.6rem 1.1rem;
}

.burger {
  display: none;
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: var(--ink);
  cursor: pointer;
}

.burger span {
  position: absolute;
  left: 13px;
  right: 13px;
  height: 2px;
  background: var(--paper);
  border-radius: 2px;
  transition: transform 0.35s var(--ease), top 0.35s var(--ease);
}

.burger span:first-child { top: 18px; }
.burger span:last-child { top: 24px; }
.burger.open span:first-child { top: 21px; transform: rotate(45deg); }
.burger.open span:last-child { top: 21px; transform: rotate(-45deg); }

@media (max-width: 860px) {
  .nav-links { display: none; }
  .burger { display: block; }
}

@media (max-width: 480px) {
  .nav-cta { display: none; }
}

/* ---------- Mobile menu ---------- */
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 1500;
  background: var(--ink);
  color: var(--paper);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 7rem 1.5rem 2.5rem;
}

.mobile-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mobile-menu li {
  border-bottom: 1px solid var(--line-dark);
  animation: mm-in 0.6s var(--ease) both;
  animation-delay: calc(var(--i) * 70ms + 100ms);
}

.mobile-menu li a {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  padding: 1rem 0;
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 10vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
}

.mobile-menu li a:active {
  color: var(--red);
}

.mm-index {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--mint);
}

.mm-social {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  color: var(--muted-light);
}

@keyframes mm-in {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: none; }
}

.menu-enter-active,
.menu-leave-active {
  transition: clip-path 0.55s var(--ease);
}

.menu-enter-from,
.menu-leave-to {
  clip-path: circle(0% at calc(100% - 44px) 40px);
}

.menu-enter-to,
.menu-leave-from {
  clip-path: circle(150% at calc(100% - 44px) 40px);
}

/* ---------- CTA ---------- */
.cta-section {
  padding: 2rem 0 5rem;
  background: var(--paper);
}

.cta-card {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: var(--red);
  color: var(--paper);
  padding: clamp(2.5rem, 7vw, 6rem) clamp(1.5rem, 6vw, 5rem);
  isolation: isolate;
}

.cta-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 85% 20%, rgba(131, 253, 128, 0.35), transparent 40%),
    radial-gradient(circle at 10% 110%, rgba(14, 14, 16, 0.45), transparent 50%);
  z-index: -1;
}

.eyebrow--light {
  color: rgba(253, 253, 255, 0.85);
}

.eyebrow--light::before {
  background: var(--mint);
}

.cta-title {
  font-size: clamp(2.4rem, 7vw, 5.5rem);
  margin: 1.25rem 0 1.5rem;
  max-width: 14ch;
}

.cta-accent {
  color: var(--ink);
}

.cta-text {
  max-width: 34rem;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(253, 253, 255, 0.9);
  margin-bottom: 2.25rem;
}

.cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.btn-outline-light {
  background: transparent;
  color: var(--paper);
  border-color: rgba(253, 253, 255, 0.45);
}

.btn-outline-light:hover {
  border-color: var(--paper);
}

.cta-icon {
  position: absolute;
  z-index: -1;
  pointer-events: none;
  mix-blend-mode: multiply;
  animation: float 6s ease-in-out infinite;
}

.cta-icon--a {
  width: clamp(120px, 18vw, 240px);
  right: 6%;
  top: 10%;
  --rot: 8deg;
}

.cta-icon--b {
  width: clamp(110px, 16vw, 220px);
  right: 22%;
  bottom: -4%;
  --rot: -12deg;
  animation-delay: -3s;
}

@media (max-width: 767px) {
  .cta-icon--a { opacity: 0.35; right: -8%; top: 4%; }
  .cta-icon--b { display: none; }
}

/* ---------- Footer ---------- */
.footer {
  background: var(--ink);
  color: var(--paper);
  padding: 5rem 0 2rem;
  overflow: hidden;
}

.footer-top {
  display: grid;
  grid-template-columns: repeat(3, 1fr) auto;
  gap: 2rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--line-dark);
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  color: var(--muted-light);
  font-size: 0.95rem;
  min-width: 0;
  overflow-wrap: anywhere;
}

.footer-col a {
  transition: color 0.2s;
}

.footer-col a:hover {
  color: var(--mint);
}

.footer-label {
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--paper);
  font-weight: 600;
  margin-bottom: 0.4rem;
}

.to-top {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background: var(--mint);
  color: var(--ink);
  cursor: pointer;
  transition: transform 0.3s var(--ease);
}

.to-top:hover {
  transform: translateY(-4px);
}

.footer-wordmark {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(4rem, 19vw, 17rem);
  letter-spacing: -0.06em;
  line-height: 0.85;
  text-align: center;
  margin: 3rem 0 1.5rem;
  background: linear-gradient(180deg, var(--paper) 30%, rgba(253, 253, 255, 0.08));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  user-select: none;
}

.footer-wordmark span {
  color: var(--red);
  -webkit-text-fill-color: var(--red);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-size: 0.85rem;
  color: var(--muted-light);
}

@media (max-width: 767px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
  }

  .to-top {
    grid-column: 2;
    grid-row: 1;
    justify-self: end;
  }

  .footer-col:nth-child(3) {
    grid-column: 1 / -1;
  }
}
</style>
