<template>
  <q-page class="q-pa-md">
    <h1 class="text-h5 text-weight-bold q-mt-none q-mb-md">Eventos na cidade</h1>

    <!-- filtor start -->
    <div class="row q-gutter-sm q-mb-sm">
      <q-chip
        v-for="d in dateOptions"
        :key="d.value"
        clickable
        :color="dateFilter === d.value ? 'primary' : 'grey-9'"
        :text-color="dateFilter === d.value ? 'black' : 'white'"
        @click="dateFilter = d.value"
        >{{ d.label }}</q-chip
      >
      <q-chip
        clickable
        icon="paid"
        :color="onlyFree ? 'primary' : 'grey-9'"
        :text-color="onlyFree ? 'black' : 'white'"
        @click="onlyFree = !onlyFree"
        >Grátis</q-chip
      >
    </div>

    <div class="row q-gutter-sm q-mb-lg">
      <q-chip
        v-for="s in esportes"
        :key="s.slug"
        clickable
        :icon="s.icon"
        :color="sportFilter === s.slug ? 'primary' : 'grey-9'"
        :text-color="sportFilter === s.slug ? 'black' : 'white'"
        @click="sportFilter = sportFilter === s.slug ? null : s.slug"
        >{{ s.label }}</q-chip
      >
    </div>
    <!-- filtro end -->

    <!-- ##### -->

    <!-- ao vivo start -->
    <template v-if="live.length">
      <h2 class="text-h6 text-weight-bold q-mt-none">Ao vivo agora</h2>
      <div class="row q-col-gutter-md q-mb-lg">
        <div v-for="e in live" :key="e.id" class="col-12 col-sm-6 col-lg-3">
          <EventCard :event="e" />
        </div>
      </div>
    </template>
    <!-- ao vivo end -->

    <!-- ##### -->

    <!-- proximo start -->
    <h2 class="text-h6 text-weight-bold q-mt-none">Próximos eventos</h2>
    <div v-if="upcoming.length" class="row q-col-gutter-md">
      <div v-for="e in upcoming" :key="e.id" class="col-12 col-sm-6 col-md-3">
        <EventCard :event="e" />
      </div>
    </div>
    <!-- proximo end -->

    <!-- ##### -->

    <div v-else class="text-grey-5 column items-center q-pa-xl">
      <q-icon name="event_busy" size="48px" />
      <div class="q-mt-sm">Nenhum evento encontrado com esses filtros</div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import EventCard from '@/components/events/EventCard.vue';
import { events } from '@/data/events';
import { esportes } from '@/config/sports';

type DateFilter = 'todos' | 'hoje' | 'amanha' | 'fds';

const dateOptions: { label: string; value: DateFilter }[] = [
  { label: 'Todos', value: 'todos' },
  { label: 'Hoje', value: 'hoje' },
  { label: 'Amanhã', value: 'amanha' },
  { label: 'Fim de semana', value: 'fds' },
];

const dateFilter = ref<DateFilter>('todos');
const sportFilter = ref<string | null>(null);
const onlyFree = ref(false);

const sameDay = (a: Date, b: Date) => a.toDateString() === b.toDateString();

const filtered = computed(() =>
  events.filter((e) => {
    if (sportFilter.value && e.sport !== sportFilter.value) return false;
    if (onlyFree.value && !e.free) return false;

    const d = new Date(e.start);
    const now = new Date();
    const tomorrow = new Date(now.getTime() + 86_400_000);

    if (dateFilter.value === 'hoje') return sameDay(d, now);
    if (dateFilter.value === 'amanha') return sameDay(d, tomorrow);
    if (dateFilter.value === 'fds') return [0, 6].includes(d.getDay());
    return true;
  }),
);

const live = computed(() => filtered.value.filter((e) => e.live));
const upcoming = computed(() =>
  filtered.value.filter((e) => !e.live).sort((a, b) => a.start.localeCompare(b.start)),
);
</script>
