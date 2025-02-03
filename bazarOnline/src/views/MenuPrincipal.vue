<template>
    <main>
        <img src="../assets/img/logo.png" alt="Logo" />
        <h2>Bazar Online Fran Garcia</h2>
        <form @submit.prevent="buscar">
            <div class="InputContainer">
                <input type="text" v-model="busqueda" placeholder="Buscar..." class="input"/>
            </div>
            <Boton label="Buscar" type="submit" class="boton" />
        </form>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Boton from '../components/BotonBusqueda.vue'; // Asegúrate de que la ruta sea correcta

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

.InputContainer {
  width: 210px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom,rgb(240, 136, 122),rgb(235, 208, 60));
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
}

.input {
  width: 200px;
  height: 40px;
  border: none;
  outline: none;
  caret-color: rgb(255, 81, 0);
  background-color: rgb(255, 255, 255);
  border-radius: 30px;
  padding-left: 15px;
  letter-spacing: 0.8px;
  color: rgb(19, 19, 19);
  font-size: 13.4px;
}


.boton{
    margin: 20px;
    height: 50px;
    margin-left: 18%;
    box-shadow: 0 10px 15px rgba(0,0,0,0.3);
}

.boton:hover{
    scale: 1.1;
    transition: 0.5s;
    background: linear-gradient(to bottom,rgb(240, 136, 122),rgb(235, 208, 60));
}



</style>