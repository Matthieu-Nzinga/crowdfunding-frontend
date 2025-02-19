<!-- <template>
    <div class="flex justify-between w-full py-[21px] px-32 fixed bg-white z-50">
      <v-toolbar-title>
        <RouterLink to="/" class="text-blue-600 text-xl font-bold">
          <v-icon color="primary">mdi-handshake</v-icon>
          InvestProject
        </RouterLink>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="flex gap-5 items-center text-lg">
        <RouterLink to="/" class="hover:underline">Accueil</RouterLink>
        <RouterLink to="/projects" class="hover:underline">Projets</RouterLink>
        <v-btn to="/login" color="primary" variant="outlined" style="text-transform: none">Connexion</v-btn>
        <v-btn color="primary" variant="flat" to="/register" style="text-transform: none">Inscription</v-btn>
      </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script> -->

<template>
  <div>
   
    <div class="flex items-center justify-between w-full py-[21px] p-6 md:px-32 fixed bg-white z-50">
      <v-toolbar-title>
        <RouterLink to="/" class="text-blue-600 text-xl font-bold">
          <v-icon color="primary">mdi-handshake</v-icon>
          InvestProject
        </RouterLink>
      </v-toolbar-title>
      

      <div class="hidden md:flex gap-5 items-center text-lg">
        <RouterLink to="/" class="hover:underline">Accueil</RouterLink>
        <RouterLink to="/projects" class="hover:underline">Projets</RouterLink>
        <v-btn to="/login" color="primary" variant="outlined" style="text-transform: none">Connexion</v-btn>
        <v-btn color="primary" variant="flat" to="/register" style="text-transform: none">Inscription</v-btn>
      </div>

     
      <div class="md:hidden flex items-center">
        <v-btn icon @click="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>
    </div>

  
    <v-navigation-drawer v-model="drawer" temporary right>
      <v-list>
        <v-list-item>
          <RouterLink to="/" class="text-gray-600 text-xl font-bold">Accueil</RouterLink>
        </v-list-item>
        <v-list-item>
          <RouterLink to="/projects" class="text-gray-600 text-xl font-bold">Projets</RouterLink>
        </v-list-item>
        <v-list-item>
          <RouterLink to="/login" class="text-gray-600 text-xl font-bold">Connexion</RouterLink>
        </v-list-item>
        <v-list-item>
          <RouterLink to="/register" class="text-gray-600 text-xl font-bold">Inscription</RouterLink>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';


const drawer = ref(false);
</script>
