
 <script setup lang="ts">
 const props = defineProps<{
   title: string;
   description: string;
   image: string;
   category: string;
   collected: number;
   goal: number;
 }>();
 
 
 const categoryColors: Record<string, string> = {
   "Technologie": "blue",
   "Immobilier": "pink",
   "Éducation": "green",
   "Santé": "red",
   "Environnement": "teal",
   "Autres": "lime"
 };
 
 
 const categoryColor = categoryColors[props.category] || "gray";
 </script>
 
 <template>
   <v-card class="rounded-lg overflow-hidden shadow-md">
     
     <div class="relative">
       <v-img :src="image" height="180px" cover class="relative"></v-img>
 
       
       <v-chip
         :color="categoryColor"
         variant="elevated"
         class="text-white font-bold"
         style="position: absolute !important; top: 10px; right: 10px; z-index: 10;"
       >
         {{ category }}
       </v-chip>
     </div>
 
     
     <div class="p-4">
       <h3 class="text-lg font-semibold">{{ title }}</h3>
       <p class="text-gray-600 text-sm mb-3">{{ description }}</p>
 
       <v-progress-linear
         :model-value="(collected / goal) * 100"
         color="blue"
         height="6"
         class="mb-3"
       ></v-progress-linear>
 
       <p class="text-sm font-medium mb-3">
         {{ collected.toLocaleString() }} € / {{ goal.toLocaleString() }} €
       </p>
 
       <v-btn color="primary" block>Voir le projet</v-btn>
     </div>
   </v-card>
 </template>
 