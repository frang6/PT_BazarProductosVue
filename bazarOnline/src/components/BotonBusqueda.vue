<template>
    <button :type="type" @click="$emit('click')">
        {{ label }}
    </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps<{
    label: string;
    type?: 'button' | 'submit' | 'reset';
}>();

defineEmits(['click']);
</script>

<style scoped>

/* From Uiverse.io by adamgiebl */ 
button {
  align-items: center;
  background-image: linear-gradient(144deg,#FF9A76, #FF6363 50%,#FF1E62);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(255, 154, 118, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 18px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  transition: all .3s;
}

button:active,
button:hover {
  outline: 0;
}

button span {
  background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

button:hover span {
  background: none;
}

button:active {
  transform: scale(0.9);
}
</style>