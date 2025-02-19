<script setup lang="ts">
import { computed } from "vue";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  category: string;
  collected?: number;
  goal: number;
}

const props = defineProps<ProjectProps>();

const categoryColors: Record<string, string> = {
  Technologie: "#A855F7",
  Immobilier: "#22C55E",
  Éducation: "green",
  Santé: "red",
  Environnement: "teal",
  Commerce: "#EAB308",
  Autres: "lime",
};

const categoryColor = categoryColors[props.category] || "gray";

const formattedDescription = computed(() => {
  const text = props.description;

  if (text.length > 100) {
    const truncated = text.substring(0, 97);
    return truncated + "...";
  } else {
    const missing = 100 - text.length;
    const filler = "&nbsp;".repeat(missing);
    return text + filler;
  }
});
</script>

<template>
  <v-card class="rounded-lg overflow-hidden shadow-md">
    <div class="relative">
      <v-img
        :src="props.image"
        height="250px"
        cover
        class="relative hover-img"
      ></v-img>

      <v-chip
        :color="categoryColor"
        variant="elevated"
        class="text-white font-bold"
        style="position: absolute; top: 10px; right: 10px; z-index: 10"
      >
        {{ category }}
      </v-chip>
    </div>

    <div class="p-4">
      <h3 class="text-xl font-semibold">{{ props.title }}</h3>
      <p class="text-gray-600 text-sm mb-3" v-html="formattedDescription"></p>

      <div
        class="flex justify-between text-base font-medium text-gray-700 mb-2"
      >
        Progression
        <span
          >{{ Math.round(((props.collected ?? 0) / props.goal) * 100) }}%</span
        >
      </div>
      <v-progress-linear
        :model-value="((props.collected ?? 0) / props.goal) * 100"
        color="blue"
        height="8"
        class="mb-3 rounded-lg"
      ></v-progress-linear>

      <div class="flex justify-between items-center">
        <p class="text-base font-bold text-blue-600">
          {{ (props.collected ?? 0).toLocaleString() }} $ /
          {{ props.goal.toLocaleString() }} $
        </p>

        <v-btn color="primary" style="text-transform: none"
          >Voir le projet</v-btn
        >
      </div>
    </div>
  </v-card>
</template>

<style scoped>
.hover-img {
  transition: transform 0.3s ease-in-out;
}
.hover-img:hover {
  transform: scale(1.05);
}
</style>
