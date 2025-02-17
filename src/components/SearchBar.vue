<script setup lang="ts">
import { ref } from 'vue';

const searchQuery = ref('');
const category = ref(null);
const budget = ref(null);
const popularity = ref(null);

const categories = ['Immobilier', 'Technologie', 'Commerce'];
const budgets = ['< 50 000 €', '50 000 - 100 000 €', '> 100 000 €'];
const popularities = ['Croissante', 'Décroissante'];
</script>

<template>
  <main class="bg-[#E5E7EB]">
    <div class="flex flex-col md:flex-row items-center gap-4 pt-6 px-32 rounded-lg">
    <v-text-field
      v-model="searchQuery"
      label="Rechercher un projet..."
      variant="outlined"
      density="comfortable"
      class="w-full md:w-1/3"
    />
    
    <v-select
      v-model="category"
      :items="categories"
      label="Catégorie"
      variant="outlined"
      density="comfortable"
      class="w-full md:w-1/6"
    />

    <v-select
      v-model="budget"
      :items="budgets"
      label="Budget"
      variant="outlined"
      density="comfortable"
      class="w-full md:w-1/6"
    />

    <v-select
      v-model="popularity"
      :items="popularities"
      label="Popularité"
      variant="outlined"
      density="comfortable"
      class="w-full md:w-1/6"
    />
  </div>
  </main>
</template>


