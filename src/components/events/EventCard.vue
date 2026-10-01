<template>
  <q-card bordered flat class="event-card">
    <div class="justify-center row items-center event-card__banner" :class="`bg-${color}`">
      <q-icon :name="sport?.icon ?? 'sports'" size="56px" color="dark" />
      <q-badge v-if="event.live" color="negative" class="event-card__live">AO VIVO</q-badge>
    </div>

    <q-card-section>
      <div class="text-caption text-uppercase text-grey-5">{{ sport?.label }}</div>
      <div class="text-subtitle1 text-weight-bold ellipsis-2-lines">{{ event.title }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none column q-gutter-xs text-body2">
      <div class="row items-center no-wrap">
        <q-icon name="schedule" class="q-mr-sm" /> {{ dateLabel }}
      </div>

      <div class="row items-center no-wrap">
        <q-icon name="place" class="q-mr-sm" /> {{ event.venue }} · {{ event.neighborhood }}
      </div>
    </q-card-section>

    <q-card-actions class="q-px-md q-pb-md">
      <q-chip
        dense
        :color="event.free ? 'positive' : 'grey-8'"
        text-color="black"
        :label="event.free ? 'Grátis' : 'Pago'"
      />
      <q-space />
      <q-btn flat round dense aria-label="Favoritar" icon="favorite_border" />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { esportes } from '@/config/sports';
import type { SportEvent } from '@/types/event';
import { computed } from 'vue';

const props = defineProps<{ event: SportEvent }>();

const sport = computed(() => esportes.find((s) => s.slug === props.event.sport));
const color = computed(() => sport.value?.color ?? 'grey-5');

const dateLabel = computed(() =>
  new Date(props.event.start).toLocaleString('pt-BR', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }),
);
</script>
<style scoped>
.event-card {
  height: 100%;
  border-radius: 14px;
  overflow: hidden;
}
.event-card__banner {
  height: 110px;
  position: relative;
}
.event-card__live {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
