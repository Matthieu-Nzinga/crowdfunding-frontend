<template>
  <div class="bg-gray-900 text-white py-6 px-32">
    <div class="flex justify-between">
      <div class="w-1/4 pr-10">
        <h3 class="text-2xl font-semibold mb-2">InvestProject</h3>
        <p class="text-gray-400 text-sm">
          Plateforme de financement participatif pour projets innovants.
        </p>
      </div>

      <div class="w-1/4 px-10">
        <h3 class="text-2xl font-semibold mb-2">À propos</h3>
        <ul class="text-gray-400 text-sm space-y-1">
          <li>
            <RouterLink to="/" class="hover:text-white">Notre mission</RouterLink>
          </li>
          <li>
            <RouterLink to="/projects" class="hover:text-white"
              >Comment ça marche</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/about" class="hover:text-white"
              >Équipe</RouterLink
            >
          </li>
        </ul>
      </div>

      <div class="w-1/4 px-10">
        <h3 class="text-2xl font-semibold mb-2">Support</h3>
        <ul class="text-gray-400 text-sm space-y-1">
          <li>
            <RouterLink to="/" class="hover:text-white">FAQ</RouterLink>
          </li>
          <li>
            <RouterLink to="/projects" class="hover:text-white"
              >Contact</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/about" class="hover:text-white"
              >Aide</RouterLink
            >
          </li>
        </ul>
      </div>

      <div class="w-1/4 px-10">
        <h3 class="text-2xl font-semibold mb-2">Suivez-nous</h3>
        <div class="flex space-x-4">
          <RouterLink to="" class="text-gray-400">
            <v-icon size="40">mdi-facebook</v-icon>
          </RouterLink>
          <RouterLink to="" class="text-gray-400">
            <v-icon size="40">mdi-twitter</v-icon>
          </RouterLink>
          <RouterLink to="" class="text-gray-400">
            <v-icon size="40">mdi-linkedin</v-icon>
          </RouterLink>
          <RouterLink to="" class="text-gray-400">
            <v-icon size="40">mdi-instagram</v-icon>
          </RouterLink>
        </div>
      </div>
    </div>

    <v-divider thickness="2" class="my-4 border-gray-300"></v-divider>

    <div class="text-center text-gray-500 text-sm">
      &copy; {{ new Date().getFullYear() }} Tous droits réservés.
    </div>
  </div>
</template>
