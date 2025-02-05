<template>

    <header>
        <img src="../assets/img/logo.png" alt="Logo" @click="volverAInicio" class="logo" />
        <Busqueda v-model="busqueda" />
    </header>

    <nav>
        <button @click="volverAtras" class="volver">⬅ Volver</button>
    </nav>

    <div class="detalle-producto">
        
        <div v-if="loading">Cargando producto...</div>
        <div v-else-if="error" class="error">{{ error }}</div>
        <div v-else-if="producto">
            <img :src="producto.thumbnail" :alt="producto.title" class="imagen-detalle" />
            <h1>{{ producto.title }}</h1>
            <p>{{ producto.description }}</p>
            <strong>Precio: {{ producto.price }}€</strong>
            <div class="rating">⭐ {{ producto.rating }}</div>
            <button class="agregar-carrito" @click="agregarAlCarrito">🛒 Añadir al carrito</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Busqueda from "./Busqueda.vue";
import axios from "axios";

const route = useRoute();
const router = useRouter();
const busqueda = ref(route.query.q?.toString() || ""); 

const producto = ref<any>(null);
const loading = ref(false);
const error = ref<string | null>(null);

const fetchProducto = async () => {
    loading.value = true;
    error.value = null;

    try {
        const response = await axios.get(`http://localhost:3000/api/items/${route.params.id}`);
        producto.value = response.data;
    } catch (err) {
        error.value = "Error al obtener el producto";
    } finally {
        loading.value = false;
    }
};

const volverAInicio = () => {
    router.push({ path: "/" });
};

const volverAtras = () => {
    router.back();
};

const agregarAlCarrito = () => {
    alert(`${producto.value.title} añadido al carrito 🛒`);
};

onMounted(fetchProducto);
</script>

<style scoped>

.logo {
    cursor: pointer; 
    width: 100px; 
}

header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: linear-gradient(to bottom, rgb(236, 177, 169), rgb(255, 255, 255));
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
}
.detalle-producto {
    text-align: center;
    padding: 20px;
}

.volver {
    margin-bottom: 10px;
    padding: 5px 10px;
    cursor: pointer;
    background: #ddd;
    border: none;
    border-radius: 5px;
}

.imagen-detalle {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 10px;
}

.agregar-carrito {
    background: #ff9800;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.agregar-carrito:hover {
    background: #e68900;
}

.error {
    color: red;
}
</style>
