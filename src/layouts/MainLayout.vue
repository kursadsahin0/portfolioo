<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-grey-10 text-white" height-hint="64">
      <q-toolbar class="q-px-xl">
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

        <div class="row items-center q-gutter-sm gt-xs">
          <q-btn flat dense no-caps label="About" to="/" />
          <q-btn
            flat
            dense
            no-caps
            label="LinkedIn"
            type="a"
            href="https://www.linkedin.com/in/kursat-sahin0/"
            target="_blank"
          />
          <q-btn
            flat
            dense
            no-caps
            label="GitHub"
            type="a"
            href="https://github.com/kursadsahin0"
            target="_blank"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    return {}
  }
})
</script>
