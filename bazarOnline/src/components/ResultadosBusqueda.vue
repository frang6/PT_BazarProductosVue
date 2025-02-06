<template>
    <header>
        <img src="../assets/img/logo.png" alt="Logo" @click="volverAInicio" class="logo" />
        <Busqueda v-model="busqueda" />
    </header>

    <nav>
        <h3 v-if="busqueda">Resultados para "{{ busqueda }}": {{ productos.length }}</h3>
        <div class="products-category">
            <MostrarCategorias 
                v-for="(cantidad, categoria) in categoriasContadas"  
                :key="categoria" 
                :categoria="categoria" 
                :cantidad="cantidad"
            />
        </div>
    </nav>

    <main>
        <div class="manejoExcepciones">
            <p v-if="loading">Cargando productos...</p>
            <p v-else-if="error" class="error">{{ error }}</p>
            <p v-else-if="productos.length === 0">No se encontraron productos.</p> 
        </div>
        
        
        <div class="products-container">
            <CartaProducto 
                v-for="producto in productos" 
                :key="producto.id" 
                :producto="producto" 
            />
        </div>
            
        
    </main>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import Busqueda from "./Busqueda.vue";
import CartaProducto from "./CartaProducto.vue";
import API_BASE_URL from '@/config.ts';

import MostrarCategorias from "./MostrarCategorias.vue";


const route = useRoute();
const router = useRouter();

const busqueda = ref(route.query.q?.toString() || ""); 
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
        const response = await axios.get(`${API_BASE_URL}/items?q=${busqueda.value}`);
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

// Computed para contar las categorías
const categoriasContadas = computed(() => {
    const contador: Record<string, number> = {};
    productos.value.forEach((producto) => {
        if (producto.category) {
            contador[producto.category] = (contador[producto.category] || 0) + 1;
        }
    });
    return contador;
});

// Metodos para coger los cambios de la búsqueda y actualizar los productos encontrados
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

header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: linear-gradient(to bottom, rgb(236, 177, 169), rgb(255, 255, 255));
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
}

nav{
    margin: 20px;
    padding: 10px;
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
