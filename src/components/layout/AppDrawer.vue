<template>
  <q-drawer v-model="open" show-if-above :width="260" class="app-drawer">
    <q-scroll-area class="fit">
      <q-list class="q-px-sm">
        <DrawerMenuItems v-for="item in menu" :key="item.to" v-bind="item" />
        <q-separator dark spaced />
        <q-item-label header class="text-gray-5 text-uppercase text-caption"
          >Modalidades</q-item-label
        >

        <DrawerMenuItems
          v-for="s in esportes"
          :key="s.slug"
          :label="s.label"
          :icon="s.icon"
          :color="s.color"
          :to="`/esportes/${s.slug}`"
        />
      </q-list>
    </q-scroll-area>

    <DrawerFooter />
  </q-drawer>
</template>

<script setup lang="ts">
import { menu } from '@/config/menu.js';
import { esportes } from '@/config/sports.js';
import DrawerFooter from './DrawerFooter.vue';
import DrawerMenuItems from './DrawerMenuItems.vue';

const open = defineModel<boolean>({ default: false });
</script>
