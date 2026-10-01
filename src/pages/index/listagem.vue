<script setup lang="ts">
import { computed, ref } from 'vue';
interface Item {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
}

const search = ref('');

const items = ref<Item[]>([
  {
    id: 1,
    title: 'titulo 1',
    category: 'categoria 1',
    price: 200,
    image: 'https://picsum.photos/id/21/600/400',
  },
  {
    id: 2,
    title: 'titulo 2',
    category: 'categoria 2',
    price: 10,
    image: 'https://picsum.photos/id/22/600/400',
  },
]);

const filtered = computed(() =>
  items.value.filter((i) => i.title.toLowerCase().includes(search.value.toLocaleLowerCase())),
);

const brl = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
</script>

<template>
  <q-page class="q-pa-md">
    <div class="page-container">
      <h1 class="text-h4 text-weight-bold q-mt-none">Listagem</h1>
      <q-input v-model="search" outlined rounded clearable placeholder="Buscar..." class="q-mb-lg">
        <template #prepend>
          <q-icon name="search"></q-icon>
        </template>
      </q-input>

      <div class="row q-col-gutter-md">
        <div v-for="item in filtered" :key="item.id" class="col-12 col-sm-6 col-md-4 col-lg-3">
          <q-card class="item-card" flat bordered>
            <q-img :src="item.image" :ratio="3 / 2" />
            <q-card-section>
              <q-badge color="primary" outline :label="item.category" class="q-mb-sm" />
              <div class="text-subtitle1 text-weight-medium">{{ item.title }}</div>
              <div class="text-h6 text-primary">{{ brl(item.price) }}</div>
            </q-card-section>
            <q-card-actions>
              <q-btn unelevated rounded color="primary" label="Ver detalhes" class="full-width" />
            </q-card-actions>
          </q-card>
        </div>
      </div>

      <div v-if="!filtered.length" class="text-center text-grey q-mt-xl">Nenhum item</div>
    </div>
  </q-page>
</template>
