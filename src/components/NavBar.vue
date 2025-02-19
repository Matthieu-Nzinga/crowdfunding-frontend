<template>
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

<!-- <template>
  <v-app>
    <v-app-bar color="" density="compact" class="pr-16 pl-7 py-5">
      <v-toolbar-title>
        <RouterLink to="/" class="text-blue-600 text-3xl font-bold">
          <v-icon color="primary">mdi-handshake</v-icon>
          InvestProject
        </RouterLink>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="flex gap-5 items-center text-lg">
        <RouterLink to="/" class="hover:underline">Accueil</RouterLink>
        <RouterLink to="/projects" class="hover:underline">Projets</RouterLink>
        <v-btn to="/login" color="primary" variant="outlined">Connexion</v-btn>
        <v-btn color="primary" variant="flat" to="/register">Inscription</v-btn>
      </div>
    </v-app-bar>
  </v-app>
</template> -->


<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
