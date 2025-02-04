<template>
    <main>
        <img src="../assets/img/logo.png" alt="Logo" />
        <h2>Bazar Online Fran Garcia</h2>
        <Buscar />
    </main>
</template>

<script setup lang="ts">
import Buscar from '../components/Busqueda.vue';

</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}

img {
    margin-top: 8%;
    width: 300px;
}

h2 {
    font-size: 2em;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}
</style>
