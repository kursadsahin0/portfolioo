<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header text-white" height-hint="64">
      <q-toolbar class="toolbar">
        <q-toolbar-title class="row items-center">
          <div class="row items-center">
            <div class="logo-mark flex flex-center">
              <span class="logo-initials">KŞ</span>
            </div>
            <div class="column q-ml-sm">
              <div class="logo-name">Kürşat Şahin</div>
              <div class="logo-role">Frontend Developer</div>
            </div>
          </div>
        </q-toolbar-title>

        <!-- Desktop: linkler sağda -->
        <div class="row items-center q-gutter-sm gt-xs">
          <q-btn flat dense no-caps label="About" to="/" class="nav-btn" />
          <q-btn
            flat
            dense
            no-caps
            label="LinkedIn"
            type="a"
            href="https://www.linkedin.com/in/kursat-sahin0/"
            target="_blank"
            class="nav-btn"
          />
          <q-btn
            flat
            dense
            no-caps
            label="GitHub"
            type="a"
            href="https://github.com/kursadsahin0"
            target="_blank"
            class="nav-btn"
          />
        </div>

        <!-- Mobil: hamburger -->
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menü"
          class="lt-sm"
          @click="drawerOpen = true"
        />
      </q-toolbar>
    </q-header>

    <!-- Mobil menü drawer -->
    <q-drawer
      v-model="drawerOpen"
      side="right"
      overlay
      bordered
      class="nav-drawer"
      :width="280"
    >
      <q-scroll-area class="fit">
        <q-list class="q-pt-lg q-px-md nav-drawer-list">
          <q-item clickable to="/" class="nav-drawer-item" @click="drawerOpen = false">
            <q-item-section avatar>
              <q-icon name="person" color="primary" size="sm" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-weight-medium">About</q-item-label>
              <q-item-label caption>Hakkımda</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            href="https://www.linkedin.com/in/kursat-sahin0/"
            target="_blank"
            class="nav-drawer-item"
            @click="drawerOpen = false"
          >
            <q-item-section avatar>
              <q-icon name="link" color="primary" size="sm" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-weight-medium">LinkedIn</q-item-label>
              <q-item-label caption>Profil</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            href="https://github.com/kursadsahin0"
            target="_blank"
            class="nav-drawer-item"
            @click="drawerOpen = false"
          >
            <q-item-section avatar>
              <q-icon name="code" color="primary" size="sm" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-weight-medium">GitHub</q-item-label>
              <q-item-label caption>Projeler</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const drawerOpen = ref(false)
    return { drawerOpen }
  }
})
</script>

<style scoped>
.header {
  background: var(--bg-elevated);
  border-bottom: 1px solid var(--border);
}

.toolbar {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

@media (min-width: 600px) {
  .toolbar {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.nav-btn {
  color: var(--text-muted);
  font-weight: 500;
}

.nav-btn:hover {
  color: var(--accent);
}

.nav-drawer {
  background: var(--bg-card);
  border-left: 1px solid var(--border);
}

.nav-drawer-list {
  padding-bottom: 2rem;
}

.nav-drawer-item {
  border-radius: 12px;
  margin-bottom: 4px;
}

.nav-drawer-item:hover {
  background: rgba(56, 189, 248, 0.08);
}
</style>
