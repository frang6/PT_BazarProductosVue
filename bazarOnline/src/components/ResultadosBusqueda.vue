<template>
    <div>
        <h2>Resultados para "{{ busqueda }}"</h2>
        <div v-if="loading">Cargando...</div>
        <div v-else-if="error" class="error">{{ error }}</div>
        <div v-else>
            <ul v-if="productos.length">
                <li v-for="producto in productos" :key="producto.id" class="producto">
                    <h3>{{ producto.title }}</h3>
                    <p>{{ producto.description }}</p>
                    <strong>Categoría: {{ producto.category }}</strong>
                    <p>Precio: ${{ producto.price }}</p>
                </li>
            </ul>
            <p v-else>No se encontraron productos.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import axios from "axios"; // Importamos axios

const props = defineProps<{ busqueda: string }>();
const productos = ref<any[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);

const fetchProductos = async () => {
    if (!props.busqueda) return;

    loading.value = true;
    error.value = null;

    try {
        const response = await axios.get(`/api/items?q=${encodeURIComponent(props.busqueda)}`);
        productos.value = response.data;
    } catch (err: any) {
        error.value = "Error al obtener productos";
    } finally {
        loading.value = false;
    }
};

// Llamar a la API cuando cambia la búsqueda
watchEffect(fetchProductos);
</script>

<style scoped>
h2 {
    text-align: center;
    margin-top: 20px;
}

ul {
    list-style: none;
    padding: 0;
}

.producto {
    background: #f9f9f9;
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.error {
    color: red;
    text-align: center;
}
</style>
