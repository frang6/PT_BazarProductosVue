<template>
    <header>
        <img src="../assets/img/logo.png" alt="Logo" @click="volverAInicio" class="logo" />
        <h1>Carrito de Compras</h1>
    </header>

    <main>
        <div v-if="carrito.length">
            <div v-for="(item, index) in carrito" :key="index" class="producto-carrito">
                <img :src="item.images[0]" :alt="item.title" class="imagen-carrito" />
                <div>
                    <h2>{{ item.title }}</h2>
                    <p>Precio: {{ item.price }}€</p>
                    <button @click="eliminarDelCarrito(index)">Eliminar</button>
                </div>
            </div>
            <h3>Total: {{ total }}€</h3>
        </div>
        <p v-else>El carrito está vacío.</p>
    </main>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const carrito = ref(JSON.parse(localStorage.getItem("carrito")) || []);

const eliminarDelCarrito = (index) => {
    carrito.value.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito.value));
};

const total = computed(() => carrito.value.reduce((sum, item) => sum + item.price, 0));

const volverAInicio = () => router.push("/");
</script>

<style scoped>
.logo { cursor: pointer; width: 100px; }
.producto-carrito { display: flex; align-items: center; margin: 10px 0; }
.imagen-carrito { width: 80px; height: 80px; margin-right: 10px; }
</style>
