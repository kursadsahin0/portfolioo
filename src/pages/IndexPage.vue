<template>
  <q-page class="page-wrapper">
    <!-- HERO -->
    <section class="hero-section q-mb-xl">
      <div class="row items-center q-col-gutter-xl">
        <div class="col-12 col-md-7">
          <div class="q-mb-sm text-primary text-body2 text-uppercase">
            Hello, I'm
          </div>
          <h1 class="hero-title">
            Kürşat Şahin
          </h1>
          <div class="hero-subtitle">
            Frontend Developer
          </div>
          <div class="hero-text">
            I currently work as a frontend developer at
            <span class="text-white text-weight-medium">Sinyatek</span>. I build user-focused, modern
            and high-performance web interfaces with Vue.js and Quasar.
          </div>
          <div class="row q-gutter-sm">
            <q-btn
              class="btn-primary"
              label="Contact Me"
              type="a"
              href="mailto:kursatsahin565@gmail.com"
            />
            <q-btn
              class="btn-outline"
              label="My Projects"
              @click="scrollToProjects"
            />
          </div>
        </div>
        <div class="col-12 col-md-5 gt-sm">
          <div class="hero-image-wrap">
            <img
              :src="heroImage"
              alt="Geliştirme ortamı"
              class="hero-image"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- HAKKIMDA -->
    <section class="q-mb-xl">
      <div class="section-title">
        About
      </div>
      <div class="card">
        <p class="q-mb-md text-grey-4">
          I'm a frontend developer specialized in building modern, interactive web interfaces that put
          user experience at the center. I work with modern JavaScript technologies such as ReactJS,
          Next.js, Vue.js and Quasar, focusing on performance, accessibility and scalability.
        </p>
        <p class="q-mb-md text-grey-5">
          With my fast learning and technical adaptation skills, I can quickly contribute to projects.
          I closely follow web development trends and prioritize clean code, component-driven
          architecture and functionality.
        </p>
        <p class="text-grey-5">
          I graduated from Bartın University, Management Information Systems (English). I've been
          interested in web development since my second year at university and build projects with
          JavaScript, React and Vue.js.
        </p>
      </div>
    </section>

    <!-- DENEYİM -->
    <section class="q-mb-xl">
      <div class="section-title">
        Experience
      </div>
      <div class="experience-grid">
        <div class="card">
          <div class="experience-item-header">
            <div>
              <div class="text-subtitle1 text-white">
                Frontend Developer
                <q-badge color="primary" class="q-ml-xs" align="top" outline>
                  Currently
                </q-badge>
              </div>
              <div class="text-primary text-body2">
                Sinyatek
              </div>
            </div>
            <div class="text-right">
              <div class="text-grey-5 text-caption">
                Nov 2025 –
              </div>
              <div class="text-grey-6 text-caption">
                Turkey
              </div>
            </div>
          </div>
          <ul class="q-pl-md text-grey-5 text-body2">
            <li>I take part in frontend development processes.</li>
            <li>I develop modern web applications with VueJs and Quasar.</li>
          </ul>
        </div>

        <div class="card">
          <div class="experience-item-header">
            <div>
              <div class="text-subtitle1 text-white">
                Frontend Developer
              </div>
              <div class="text-primary text-body2">
                Pazaryeri Converter
              </div>
            </div>
            <div class="text-right">
              <div class="text-grey-5 text-caption">
                May 2025 – June 2025
              </div>
              <div class="text-grey-6 text-caption">
                Ankara
              </div>
            </div>
          </div>
          <ul class="q-pl-md text-grey-5 text-body2">
            <li>
              As a freelancer, I identified and fixed issues in web interfaces and improved UI
              functionality.
            </li>
            <li>
              Using Next.js, I ensured visual consistency and made interface adjustments to improve the
              user experience.
            </li>
          </ul>
        </div>

        <div class="card">
          <div class="experience-item-header">
            <div>
              <div class="text-subtitle1 text-white">
                Frontend Developer
              </div>
              <div class="text-primary text-body2">
                Daynex Yazılım
              </div>
            </div>
            <div class="text-right">
              <div class="text-grey-5 text-caption">
                June 2024 – August 2024
              </div>
              <div class="text-grey-6 text-caption">
                Trabzon
              </div>
            </div>
          </div>
          <ul class="q-pl-md text-grey-5 text-body2">
            <li>Web interfaces were created; visual and functional integrations were provided.</li>
            <li>User experience-focused solutions were developed.</li>
          </ul>
        </div>

        <div class="card">
          <div class="experience-item-header">
            <div>
              <div class="text-subtitle1 text-white">
                Frontend Developer
              </div>
              <div class="text-primary text-body2">
                Toonlands
              </div>
            </div>
            <div class="text-right">
              <div class="text-grey-5 text-caption">
                October 2022 – February 2023
              </div>
              <div class="text-grey-6 text-caption">
                Bursa
              </div>
            </div>
          </div>
          <ul class="q-pl-md text-grey-5 text-body2">
            <li>I was solely responsible for all frontend development processes of the company.</li>
            <li>I developed dynamic and user-friendly web interfaces using Next.js.</li>
            <li>I quickly adapted to new technologies and contributed effectively to projects.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- PROJELER -->
    <section id="projeler" class="q-mb-xl">
      <div class="section-title">
        Projects
      </div>

      <div class="row q-col-gutter-md q-row-gutter-md q-mb-md">
        <div
          class="col-12 col-md-6"
          v-for="project in projects"
          :key="project.name"
        >
          <q-card flat bordered class="project-card bg-transparent">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.name"
              class="project-card__image"
            >
            <q-card-section class="relative-position project-card__content">
              <div class="row items-start q-mb-xs">
                <div>
                  <div class="text-subtitle2 text-white">
                    {{ project.name }}
                  </div>
                  <div class="text-grey-5 text-body2">
                    {{ project.description }}
                  </div>
                </div>
              </div>
              <q-icon
                name="north_east"
                size="18px"
                class="text-primary cursor-pointer absolute-top-right q-mt-sm q-mr-sm"
                @click="openProject(project.url)"
              />
              <div
                v-if="project.tags && project.tags.length"
                class="chips q-mt-sm"
              >
                <div
                  v-for="tag in project.tags"
                  :key="tag"
                  class="chip"
                >
                  {{ tag }}
                </div>
              </div>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn
                flat
                dense
                no-caps
                label="Live Demo"
                type="a"
                :href="project.url"
                target="_blank"
              />
              <q-btn
                v-if="project.github"
                flat
                dense
                no-caps
                label="GitHub"
                type="a"
                :href="project.github"
                target="_blank"
              />
            </q-card-actions>
          </q-card>
        </div>
      </div>

      <div class="text-right text-caption text-grey-5">
        For all my projects,
        <a
          href="https://github.com/kursadsahin0"
          target="_blank"
          class="text-primary"
        >
          my GitHub profile
        </a>
        .
      </div>
    </section>

    <!-- BECERİLER -->
    <section class="q-mb-xl">
      <div class="section-title">
        Skills
      </div>
      <div class="chips">
        <div
          v-for="skill in skills"
          :key="skill"
          class="chip"
        >
          {{ skill }}
        </div>
      </div>
    </section>

    <!-- EĞİTİM & İLETİŞİM -->
    <section class="education-contact-section">
      <div class="education-contact-grid">
        <div class="section-title">
          Education & Certificates
        </div>
        <div class="section-title">
          Contact
        </div>
        <div class="card education-contact-card">
          <div class="text-subtitle1 text-white q-mb-sm">
            Bartın University
          </div>
          <div class="text-primary text-body1 q-mb-xs">
            Management Information Systems (English)
          </div>
          <div class="text-grey-5 text-body2 q-mb-md">
            2016 – 2021 · Bachelor's degree
          </div>
          <p class="text-grey-5 text-body2 q-ma-none">
            Bachelor's education in web development and information systems.
          </p>
        </div>
        <div class="card education-contact-card">
          <p class="text-grey-4 text-body2 q-mb-md q-ma-none">
            You can contact me for projects or collaborations.
          </p>
          <div class="row items-center no-wrap q-gutter-md q-mb-sm">
            <div class="text-body2 text-grey-5" style="min-width: 4.5rem">Email</div>
            <a href="mailto:kursatsahin565@gmail.com" class="text-white text-body1">kursatsahin565@gmail.com</a>
          </div>
          <div class="row items-center no-wrap q-gutter-md q-mb-sm">
            <div class="text-body2 text-grey-5" style="min-width: 4.5rem">Phone</div>
            <a href="tel:+905433728561" class="text-white text-body1">+90 543 372 85 61</a>
          </div>
          <div class="row items-center no-wrap q-gutter-md q-mb-sm">
            <div class="text-body2 text-grey-5" style="min-width: 4.5rem">Location</div>
            <span class="text-grey-4 text-body1">Trabzon</span>
          </div>
          <div class="row q-gutter-sm q-mt-md">
            <q-btn flat dense no-caps label="LinkedIn" type="a" href="https://www.linkedin.com/in/kursat-sahin0/" target="_blank" class="text-body2" />
            <q-btn flat dense no-caps label="GitHub" type="a" href="https://github.com/kursadsahin0" target="_blank" class="text-body2" />
          </div>
        </div>
        <div class="education-contact-cert">
          <div class="text-body2 text-grey-5 q-mb-sm">Certificates</div>
          <ul class="text-grey-5 text-body1 q-pl-md q-ma-none">
            <li v-for="c in certs" :key="c">{{ c }}</li>
          </ul>
        </div>
        <div></div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import profilePicture from 'assets/profile_picture.png'
import imgWeb from 'assets/website-web.png'
import imgCryptoCard from 'assets/project-crypto.svg'
import cryptoCurrencyImage from 'assets/cryptoCurrency.png'
import imgRestaurant from 'assets/restaurant-web.png'
import imgRecipe from 'assets/food-recipe.png'
import imgPortfolio from 'assets/emlak-site.png'
import imgCarRental from 'assets/car-rental.png'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const projects = ref([
      {
        name: 'Website',
        url: 'https://beamish-cobbler-01b388.netlify.app/',
        description: 'Modern, responsive one-page website.',
        tags: ['ReactJS', 'Responsive UI'],
        image: imgWeb
      },
      {
        name: 'CryptoCurrency',
        url: 'https://gentle-kitten-16e743.netlify.app/',
        description: 'Real-time cryptocurrency information and listing interface.',
        tags: ['API', 'React', 'CSS', 'ChartJs', 'UI'],
        image: cryptoCurrencyImage
      },
      {
        name: 'Restaurant Website',
        url: 'https://dancing-fudge-34a9da.netlify.app/',
        description: 'Restaurant website focused on presentation, menu and calls to action.',
        tags: ['ReactJS', 'UI', 'Responsive'],
        image: imgRestaurant
      },
      {
        name: 'Recipe App',
        url: 'https://elegant-babka-19f03e.netlify.app/',
        description: 'Recipe application with categories and search features.',
        tags: ['ReactJS', 'SCSS', 'UI'],
        image: imgRecipe
      },
      {
        name: 'Real Estate Website',
        url: 'https://jovial-frangipane-8b0589.netlify.app/',
        description: 'Modern real estate listing site with featured properties, filtering and detail pages.',
        tags: ['NextJs', 'SEO', 'Responsive UI'],
        image: imgPortfolio
      },
      {
        name: 'Car Rental',
        url: '#',
        description: 'Luxury car rental interface with vehicle listing, filtering and detail pages.',
        tags: ['TypeScript', 'CSS', 'UI'],
        image: imgCarRental
      }
    ])

    const skills = ref([
      'React',
      'Next.js',
      'Vue.js',
      'Quasar',
      'JavaScript',
      'HTML / CSS / SCSS',
      'Chart.js',
      'PHP',
      'Jira',
      'Responsive Design'
    ])

    const certs = ref([
      'API and API Testing',
      'Responsive Web Design',
      'Web Development Fundamentals',
      'Software Test Automation'
    ])

    const openProject = (url) => {
      if (!url) return
      window.open(url, '_blank')
    }

    const scrollToProjects = () => {
      document.getElementById('projeler')?.scrollIntoView({ behavior: 'smooth' })
    }

    return {
      heroImage: profilePicture,
      projects,
      skills,
      certs,
      openProject,
      scrollToProjects
    }
  }
})
</script>
