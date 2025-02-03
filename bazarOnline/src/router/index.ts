import { createRouter, createWebHistory } from 'vue-router'
import MenuPrincipal from '../views/MenuPrincipal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'menuPrincipal',
      component: MenuPrincipal,
    },
  ],
})

export default router
