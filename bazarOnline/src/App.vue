<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <!-- Aquí se mostrará la vista según la ruta activa -->
    <RouterView />
  </div>
</template>

<style scoped>
nav {
  margin: 20px;
}

RouterLink {
  margin-right: 20px;
  text-decoration: none;
  color: #42b983;
}

RouterLink:hover {
  text-decoration: underline;
}
</style>

