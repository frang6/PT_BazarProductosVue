<template>
    <div class="product-card" @click="agregarAlCarrito">
        <!-- Ajustamos la imagen para tomar la primera del array -->
        <img :src="producto.images[0]" :alt="producto.title" class="product-image" />
        <h3>{{ producto.title }}</h3>
        <p>{{ producto.description }}</p>
        <strong>{{ producto.price }}€</strong>
        <div class="rating">⭐ {{ producto.rating }}</div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{ producto: any }>();

const agregarAlCarrito = () => {
    alert(`${props.producto.title} añadido al carrito 🛒`);
};
</script>

<style scoped>
.product-card {
    background: #fff;
    padding: 15px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    text-align: center;
    transition: transform 0.2s ease-in-out;
}

.product-card:hover {
    transform: scale(1.05);
}

.product-image {
    width: 100%;
    max-height: 180px;
    object-fit: cover;
    border-radius: 8px;
}

h3 {
    margin: 10px 0;
}

.rating {
    margin-top: 5px;
    color: #ff9800;
    font-weight: bold;
}
</style>
