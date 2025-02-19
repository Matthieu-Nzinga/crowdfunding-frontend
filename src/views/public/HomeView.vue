<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import { onMounted } from "vue";
import { useProjectStore } from "@/stores/useProjectStore";
const store = useProjectStore();

onMounted(() => {
  store.fetchProjects();
});
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
        v-for="project in store.projects"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :category="project.category"
        :collected="project.collected"
        :goal="project.goal"
      />

    </div>
  </div>
</template>
