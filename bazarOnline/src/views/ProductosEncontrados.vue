<template>
    <div>
        <ResultadosBusqueda :busqueda="busqueda" />
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import ResultadosBusqueda from "../components/ResultadosBusqueda.vue";

const route = useRoute();
const busqueda = computed(() => route.query.q?.toString() || "");
</script>
