<template>
  <q-layout view="hHh LpR lFf">
    <AppHeader v-model="busca" @toggle-drawer="drawerOpen = !drawerOpen" />
    <AppDrawer v-model="drawerOpen" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import AppDrawer from '@/components/layout/AppDrawer.vue';
import AppHeader from '@/components/layout/AppHeader.vue';
import { ref } from 'vue';

const drawerOpen = ref(false);
const busca = ref('');
</script>

<style lang="scss" src="@/css/layout.scss"></style>
