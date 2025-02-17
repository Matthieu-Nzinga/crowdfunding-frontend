<script setup lang="ts">
import { ref } from 'vue';
import SearchBar from '@/components/SearchBar.vue';
import ProjectCard from '@/components/ProjectCard.vue';
const projects = ref([
  {
    id: 1,
    title: 'Résidence Écologique Smart',
    description: 'Construction d’une résidence intelligente avec impact environnemental minimal.',
    image: '/images/img.jpg',
    category: 'Immobilier',
    categoryColor: 'green',
    collected: 250000,
    goal: 350000,
  },
  {
    id: 2,
    title: 'AI Analytics Platform',
    description: 'Plateforme d’analyse de données utilisant l’intelligence artificielle.',
    image: '/images/img.jpg',
    category: 'Technologie',
    categoryColor: 'purple',
    collected: 80000,
    goal: 200000,
  },
  {
    id: 3,
    title: 'Bio Market Express',
    description: 'Chaîne de magasins bio avec système de livraison écologique.',
    image: '/images/img.jpg',
    category: 'Commerce',
    categoryColor: 'orange',
    collected: 45000,
    goal: 50000,
  },
]);
</script>

<template>
  <div class="">
    <div class="absolute bg-black w-full h-[500px] opacity-55"></div>
    <img src="/images/img.jpg" alt="Logo du site" class="w-full h-[500px]">
  </div>
  <SearchBar />
  <div class="py-12 px-32">
    <h2 class="text-2xl font-bold mb-6">Projets à financer</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        v-bind="project"
      />
    </div>
  </div>
</template>
