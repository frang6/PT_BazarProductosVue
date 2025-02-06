## 📖 BazarApp - Full Stack de Bazar

## 🚀 Proyecto Full Stack - Bazar Virtual 

### Autor: Fran Garcia 

<a href="https://tusitio.netlify.app/](https://67a4d044c2d11e1f660c7294--relaxed-eclair-eeef15.netlify.app/" target="_blank">🌍 Enlace al Sitio Web</a> 

## 📝 Sobre el Proyecto

- Este es un proyecto de desarrollo Full Stack para la creación de una aplicación web de un bazar virtual. Su propósito principal es permitir que los usuarios busquen productos, vean los resultados de búsqueda y accedan a detalles específicos de cada producto.

- La aplicación incluye dos partes:
  - **Frontend** - Cliente realizado en Vue.js con Typescript.
  - **Backend** - API RESTful con Node.JS para gestionar las consultas de los productos.

## 🌟 Funcionalidades

- ✔️ **Búsqueda de productos** - Los usuarios pueden buscar productos por nombre.
- ✔️ **Resultados de búsqueda** - Visualización de productos filtrados con detalles como título, precio, categoría, imagen y puntuación.
- ✔️ **Vista de detalles del producto** - Información completa de cada producto seleccionado, incluyendo precio, stock, y más.
- ✔️ **Paginación** - Resultados paginados para una navegación más fluida en búsquedas con muchos productos.
- ✔️ **API RESTful** - El servidor proporciona dos endpoints principales para obtener productos.
- ✔️ **Diseño responsivo** - La aplicación está optimizada para dispositivos móviles.

## 🔧 Tecnologías Implementadas

- 🎯 **Vue.js 3** - Framework progresivo de JavaScript.
- 🛠 **Typescript** - Tipado estático para mejorar la calidad del código.
- 🔌 **Node.JS** - Backend para la gestión de productos y resultados de búsqueda.
- 🎨 **CSS personalizado** - Estilos adaptados para una experiencia fluida y responsiva.
- 🔧 **Vitest** - Herramienta para pruebas unitarias.

## ⚙️ Instalación y Ejecución como Desarrollador

- Para ejecutar este proyecto en tu entorno local, sigue los siguientes pasos:

# 1️⃣ Clona el repositorio:

- Abre una ventana en tu IDE y clona el repositorio con la siguiente ruta
- git clone https://github.com/fraang6/PT_BazarProductosVue/
# 2️⃣ Ejecuta el server:

- En una consola de sh acceede a: 
- cd serverNode

- Instala las dependencias que son necesarias con
- npm i

- Si no hay fallo ejecuta
- npm run dev
# 3️⃣ Ejecuta VUE 3:

- Mismo procedimiento:
- cd bazarOnline
- npm i
- npm run dev
# 4️⃣ Comenzar el desarrollo de pruebas y cambios:

- Accede a la url que te proporciona la terminal de VUE y en live podras observar los cambios realizados.
- Una vez hecho ejecuta npm run build y sube la carpeta a netlify mediante esta url:

- <a href="https://app.netlify.com/sites/relaxed-eclair-eeef15/deploys" target="_blank"> Netlify </a>


# 🎨 Rutas de la Aplicación 
- Home (/): Página principal con una caja de búsqueda para productos.
- Resultados de Búsqueda (/items?search=<query>): Muestra los productos que coinciden con la búsqueda, con detalles breves.
- Detalle del Producto (/items/:id): Muestra información completa sobre un producto seleccionado, incluyendo su precio, marca, descripción, stock, etc.
# 🛠 API Endpoints
- /api/items?q=:query
- Método: GET
- Descripción: Retorna una lista de productos que coinciden con la búsqueda realizada por el usuario.

- /api/items/:id
- Método: GET
- Descripción: Retorna los detalles completos de un producto específico usando su id.

# 👥 Equipo y Colaboradores
# Creador: Fran Garcia [@frang6]

- Colaboradores: ¡Aún no hay! Anímate a participar.

# 📩 Si tienes dudas o sugerencias, abre una issue en el repositorio.

# 🌟 ¡Gracias por tu interés en este proyecto! 💙
** Ajustes claves: **
- Enfoque en el Bazar Virtual: Cambié los detalles del proyecto para reflejar que ahora estás trabajando en una aplicación de productos con búsqueda, detalles y API.
- Detalles de Rutas y Funcionalidades: Agregué la descripción de las tres páginas y los endpoints requeridos.
- Backend: Incluí una sección para ejecutar el backend, lo cual es necesario para la funcionalidad de la API.
- SEO y Compartir en Redes Sociales: Considerando los requerimientos adicionales del ejercicio, resalté el diseño responsivo y la importancia de un buen SEO.
- Este README refleja ahora tanto la estructura básica del proyecto como las nuevas funcionalidades del bazar y la API RESTful que necesitas implementar.
