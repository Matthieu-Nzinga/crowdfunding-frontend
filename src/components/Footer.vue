<script setup lang="ts">

</script>
<template>
  <v-footer class="bg-gray-900 text-white py-6">
    <v-container>
      <v-row>
        <!-- Colonne 1 : À propos -->
        <v-col cols="12" md="4">
          <h3 class="text-lg font-semibold mb-2">À propos</h3>
          <p class="text-gray-400 text-sm">
            Nous aidons les entrepreneurs à financer leurs projets en connectant des investisseurs avec des idées innovantes.
          </p>
        </v-col>

        <!-- Colonne 2 : Liens rapides -->
        <v-col cols="12" md="4">
          <h3 class="text-lg font-semibold mb-2">Liens rapides</h3>
          <ul class="text-gray-400 text-sm space-y-1">
            <li><RouterLink to="/" class="hover:text-white">Accueil</RouterLink></li>
            <li><RouterLink to="/projects" class="hover:text-white">Projets</RouterLink></li>
            <li><RouterLink to="/about" class="hover:text-white">À propos</RouterLink></li>
            <li><RouterLink to="/contact" class="hover:text-white">Contact</RouterLink></li>
          </ul>
        </v-col>

        <!-- Colonne 3 : Réseaux sociaux -->
        <v-col cols="12" md="4">
          <h3 class="text-lg font-semibold mb-2">Suivez-nous</h3>
          <div class="flex space-x-4">
            <v-btn icon color="white">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon color="white">
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn icon color="white">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- Ligne de séparation -->
      <v-divider class="my-4 border-gray-700"></v-divider>

      <!-- Copyright -->
      <div class="text-center text-gray-500 text-sm">
        &copy; {{ new Date().getFullYear() }} Tous droits réservés.
      </div>
    </v-container>
  </v-footer>
</template>

