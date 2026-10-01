<template>
  <q-header class="app-header"
    ><q-toolbar class="q-py-sm"
      ><q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="emit('toggle-drawer')"
      /><q-toolbar-title class="text-bold">titulo</q-toolbar-title>
      <q-input
        v-model="busca"
        dense
        rounded
        dark
        placeholder="Buscar evento, modalidade ou local"
        class="gt-xs search-input"
        aria-label="Buscar"
        ><template #prepend><q-icon name="search"></q-icon></template
      ></q-input> </q-toolbar
  ></q-header>
</template>


<script setup lang="ts">
const busca = defineModel<string>('busca', { default: '' });
const emit = defineEmits<{ 'toggle-drawer': [] }>();
</script>
