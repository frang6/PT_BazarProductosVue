<template>
    <header>
        <img src="../assets/img/logo.png" alt="Logo" @click="volverAInicio" class="logo" />
        <h1>Mi cesta</h1>
    </header>
    <nav>
        <BotonVolverAtras @click="volverAtras" />
    </nav>

    <main>
        <div v-if="carrito.length">
            <div v-for="(item, index) in carrito" :key="index" class="producto-carrito">
                <img :src="item.images[0]" :alt="item.title" class="imagen-carrito" />
                <div>
                    <h2>{{ item.title }}</h2>
                    <p>Precio: {{ item.price }}€</p>
                    <BotonEliminarCarrito @click="eliminarDelCarrito(index)" class="boton" />
                </div>
            </div>
            <h3>Total: {{ total }}€</h3>
        </div>
        <p v-else>El carrito está vacío.</p>

        <BotonComprar class="botonCompra"/>
        

        <section>
            <h2>Términos y Condiciones de Compra</h2>
            <ul>
                <li v-for="(item, index) in terms" :key="index">
                    <strong>{{ item.title }}:</strong> {{ item.description }}
                </li>
            </ul>
            <p>
                Para consultas adicionales, contáctenos a través de nuestro servicio de atención al cliente.
            </p>
        </section>
    </main>



</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import BotonEliminarCarrito from "./BotonEliminarCarrito.vue";
import BotonVolverAtras from "./BotonVolverAtras.vue";
import BotonComprar from "./BotonComprar.vue";

const router = useRouter();
const carrito = ref(JSON.parse(localStorage.getItem("carrito")) || []);

const eliminarDelCarrito = (index) => {
    carrito.value.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito.value));
};

const total = computed(() => carrito.value.reduce((sum, item) => sum + item.price, 0));

const volverAInicio = () => router.push("/");

const volverAtras = () => {
    router.back();
};

const terms = [
    { title: "Generalidades", description: "La compra de productos a través de nuestra tienda online implica la aceptación de los presentes términos y condiciones." },
    { title: "Pedidos", description: "Todos los pedidos están sujetos a disponibilidad y confirmación del pago. Nos reservamos el derecho de rechazar cualquier pedido por razones justificadas." },
    { title: "Precios y Pagos", description: "Los precios incluyen impuestos aplicables y se presentan en la moneda indicada. El pago se debe realizar en el momento de la compra mediante los métodos disponibles en la tienda." },
    { title: "Envíos y Entregas", description: "Los plazos de entrega varían según la ubicación del comprador y la disponibilidad del producto. No nos responsabilizamos por retrasos causados por terceros." },
    { title: "Devoluciones y Reembolsos", description: "Se aceptan devoluciones dentro del plazo establecido en la normativa vigente, siempre que el producto esté en su estado original y sin uso. Los reembolsos se procesarán según el método de pago original." },
    { title: "Garantía y Responsabilidad", description: "Los productos cuentan con la garantía legal establecida. No nos hacemos responsables de daños derivados de un uso indebido del producto." },
    { title: "Protección de Datos", description: "Los datos personales proporcionados serán tratados conforme a nuestra Política de Privacidad." }
]
</script>

<style scoped>
header {
    margin: 10px;
}
nav{
    display: flex;
    padding: 10px 20px;
    align-items: center;
    justify-content: space-between;
}

.logo {
    cursor: pointer;
    width: 100px;
}

.producto-carrito {
    display: flex;
    align-items: center;
    margin: 10px 50px;
    justify-content: space-between;
}

.imagen-carrito {
    width: 80px;
    height: 80px;
    margin-right: 10px;
}

.boton {
    margin-left: auto;
}

section {
    font-size: 12px;
    line-height: 1.6;
    max-width: 600px;
    margin: auto;
    margin-top: 15%;
}

h2 {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
}

ul {
    list-style-type: none;
    padding: 0;
}

ul li {
    margin-bottom: 10px;
    text-align: justify;
}

.botonCompra{
    margin-top: 20%;
    
}

</style>
