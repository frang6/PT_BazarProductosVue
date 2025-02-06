<template>
    <header>
        <img src="../assets/img/logo.png" alt="Logo" @click="volverAInicio" class="logo" />
        <Busqueda v-model="busqueda" />
    </header>
    <nav>
        <BotonVolverAtras @click="volverAtras"/>
        <img src="../assets/img/carrito.png" @click="verCarrito" class="logoCarrito">
    </nav>

    <main>
        <div v-if="producto" class="detalle-producto">
            <div class="contenedorImagenes">
                <img :src="producto.images[0]" :alt="producto.title" class="imagen-detalle" />
                <div class="imagenes-secundarias">
                    <span v-for="(img, index) in producto.images.slice(1, 4)" :key="index" class="img-detalle">
                        <img :src="img" :alt="producto.title" />
                    </span>
                </div>
            </div>
            <h1>{{ producto.title }}</h1>
            <strong>Precio: {{ producto.price }}€</strong>
            <span class="rating">⭐ {{ producto.rating }}</span>
            <p>{{ producto.description }}</p>
            <BotonAnadirCarrito @click="añadirAlCarrito" />
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import Busqueda from "./Busqueda.vue";
import axios from "axios";
import BotonAnadirCarrito  from "./BotonAnadirCarrito.vue";
import BotonVolverAtras from "./BotonVolverAtras.vue";

const route = useRoute();
const router = useRouter();
const toast = useToast();
const busqueda = ref(route.query.q?.toString() || ""); 

const producto = ref<any>(null);
const loading = ref(false);
const error = ref<string | null>(null);
const carrito = ref(JSON.parse(localStorage.getItem("carrito") || '[]'));

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

const añadirAlCarrito = () => {
    if (!producto.value) return;

    // Verificar si el producto ya está en el carrito
    const existe = carrito.value.find((item: any) => item.id === producto.value.id);
    
    if (!existe) {
        carrito.value.push({ ...producto.value });
        localStorage.setItem("carrito", JSON.stringify(carrito.value));
        toast.success("Producto añadido al carrito");
    } 
};


const volverAInicio = () => {
    router.push({ path: "/" });
};

const volverAtras = () => {
    router.back();
};

const verCarrito = () =>{
    router.push({path:"/carrito"})
}

onMounted(fetchProducto);
</script>

<style scoped>
.logo {
    cursor: pointer; 
    width: 100px; 
}

nav{
    display: flex;
    padding: 10px 20px;
    align-items: center;
    justify-content: space-between;
}

.logoCarrito{
    cursor: pointer;
    width: 60px;
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
    background: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contenedorImagenes {
    display: flex;
    align-items: center;
}

.imagen-detalle {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 10px;
}

.imagenes-secundarias {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}

.img-detalle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ccc;
}

.img-detalle img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

p{
    font-size: 14px;
    color: #333;
    margin: 50px 10px;
}

h1{
    margin: 20px;
}

strong {
    margin: 20px;
}
</style>