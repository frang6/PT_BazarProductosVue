<template>
    <header>
        <img src="../assets/img/logo.png" alt="Logo" @click="volverAInicio" class="logo" />
        <Busqueda v-model="busqueda" />
    </header>

    <nav>
        <h3 v-if="busqueda">Resultados para "{{ busqueda }}": "{{ productos.length }}"</h3>
    </nav>

    <main>
        <div class="manejoExcepciones">
            <p v-if="loading">Cargando productos...</p>
            <p v-else-if="error" class="error">{{ error }}</p>
            <p v-else-if="productos.length === 0">No se encontraron productos.</p> 
        </div>
        
        
        <div class="products-container">
            <ProductCard 
                v-for="producto in productos" 
                :key="producto.id" 
                :producto="producto" 
            />
        </div>
            
        
    </main>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import Busqueda from "./Busqueda.vue";
import ProductCard from "./CartaProducto.vue";

const route = useRoute();
const router = useRouter();

const busqueda = ref(route.query.q?.toString() || ""); // Permite editar el campo de búsqueda
const productos = ref<any[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);

const fetchProductos = async () => {
    if (!busqueda.value.trim()) {
        productos.value = [];
        return;
    }

    loading.value = true;
    error.value = null;

    try {
        const response = await axios.get(`http://localhost:3000/api/items?q=${encodeURIComponent(busqueda.value)}`);
        productos.value = response.data;
    } catch (err) {
        error.value = "Error al obtener productos";
    } finally {
        loading.value = false;
    }
};

const volverAInicio = () => {
    router.push({ path: "/" });
};


const buscar = () => {
    if (busqueda.value.trim()) {
        router.push({ query: { q: busqueda.value } }); // Actualiza la URL sin cambiar de página
    }
};

// Observar cambios en la búsqueda y actualizar resultados
watch(busqueda, fetchProductos, { immediate: true });
watch(() => route.query.q, (newQ) => {
    busqueda.value = newQ?.toString() || "";
    fetchProductos();
});
</script>

<style scoped>

.logo {
    cursor: pointer; 
    width: 100px; 
}

h2 {
    text-align: center;
    margin-top: 20px;
}

ul {
    list-style: none;
    padding: 0;
}

.products-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

.error {
    color: red;
    text-align: center;
}
</style>
