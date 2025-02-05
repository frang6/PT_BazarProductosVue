<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <RouterView />
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

