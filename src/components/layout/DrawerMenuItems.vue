<template>
  <q-item clickable v-ripple :to="to" active-class="menu-active" class="menu-item">
    <q-item-section avatar>
      <q-icon :name="icon" :color="color" />
    </q-item-section>
    <q-item-section>{{ label }}</q-item-section>
    <q-item-section v-if="live" side>
      <q-badge color="negative">AO VIVO</q-badge>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  icon: string;
  to: string;
  color?: string;
  live?: boolean;
}>();
</script>
