<template>
    <div class="product-card" @click="mostrarVistaDetallada">
        <img :src="producto.thumbnail" :alt="producto.title" class="product-image" />
        <h3>{{ producto.title }}</h3>
        <p>{{ producto.description }}</p>
        <strong>{{ producto.price }}€</strong>
        <div class="rating">⭐ {{ producto.rating }}</div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps<{ producto: any }>();
const router = useRouter();

const mostrarVistaDetallada = () => {
  router.push({ name: "productoDetalle", params: { id: props.producto.id } });
};
</script>

<style scoped>
.product-card {
    cursor: pointer;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 10px;
    transition: transform 0.2s ease-in-out;
}

.product-card:hover {
    transform: scale(1.05);
}
</style>
