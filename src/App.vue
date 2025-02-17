<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <v-app>
    <NavBar />
    <main class="mt-20">
      <RouterView />
    </main>
    <Footer />
  </v-app>
</template>
