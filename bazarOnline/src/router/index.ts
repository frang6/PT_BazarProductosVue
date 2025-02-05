import { createRouter, createWebHistory } from "vue-router";
import MenuPrincipal from "../views/MenuPrincipal.vue";
import ProductosEncontrados from "@/views/ProductosEncontrados.vue";
import ProductoDetalle from "@/views/ProductoDetalle.vue"; // Importamos la vista de detalle del producto

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "menuPrincipal",
      component: MenuPrincipal,
    },
    {
      path: "/resultados",
      name: "productosEncontrados",
      component: ProductosEncontrados,
    },
    {
      path: "/producto/:id", 
      name: "productoDetalle", 
      component: ProductoDetalle,
      props: true, // Permitimos pasar los parámetros de la URL como props al componente
    },
  ],
});

export default router;
