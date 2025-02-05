<template>
    <span :style="{ backgroundColor: color }" class="categoria">
      {{ categoria }} ({{ cantidad }})
    </span>
  </template>
  
  <script setup lang="ts">
  import { computed } from "vue";
  
  const props = defineProps<{
    categoria: string;
    cantidad: number;
  }>();
  
  // Lista de colores predefinidos
  const colores = [
    "#64B5F3", // Azul claro
    "#E57373", // Rojo claro
    "#283592",
    "#D8BFD8",
    "#81C784", // Verde
    "#FBC02D", // Amarillo
    "#FF8A65"  // Naranja
  ];
  
  // Función para asignar un color basado en la categoría
  const color = computed(() => {
    const index = Math.abs(props.categoria.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)) % colores.length;
    return colores[index];
  });
  </script>
  
  <style scoped>
  .categoria {
    display: inline-block;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 12px;
    color: white;
    font-weight: bold;
    font-size: 14px;
  }
  </style>
  
  