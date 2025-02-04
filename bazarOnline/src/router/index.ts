import { createRouter, createWebHistory } from 'vue-router'
import MenuPrincipal from '../views/MenuPrincipal.vue'
import ProductosEncontrados from '@/views/ProductosEncontrados.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'menuPrincipal',
      component: MenuPrincipal,
    },
    { path: "/resultados", 
      component: ProductosEncontrados, },
  ],
})

export default router
