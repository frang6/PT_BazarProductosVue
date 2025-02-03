<template>
    <main>
        <img src="../assets/img/logo.png" alt="Logo" />
        <h2>Bazar Online Fran Garcia</h2>
        <form @submit.prevent="buscar">
            <input type="text" v-model="busqueda" placeholder="Buscar..." class="input"/>
            <Boton label="Buscar" type="submit" class="boton" />
        </form>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Boton from '@/components/BotonBusqueda.vue'; // Asegúrate de que la ruta sea correcta

const busqueda = ref('');

const buscar = () => {
    console.log("Buscando:", busqueda.value);
};
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

h2{
  font-size: 2em;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.5);

}

.input{
    width: 300px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #ccc;
    padding: 10px;
    font-size: 1.2em;
}

.boton{
    margin: 10px;
    height: 50px;
    margin-left: 25%;
}



</style>
