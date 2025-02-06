const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Función para cargar productos desde el archivo JSON
function loadProducts() {
    const filePath = path.join(__dirname, "data", "products.json");

    try {
        if (!fs.existsSync(filePath)) {
            console.error("🚨 El archivo products.json no existe.");
            return [];
        }

        const data = fs.readFileSync(filePath, "utf8");
        const jsonData = JSON.parse(data);

        return Array.isArray(jsonData.products) ? jsonData.products : [];
    } catch (error) {
        console.error("🚨 Error al leer el archivo JSON:", error.message);
        return [];
    }
}


// Ruta de prueba
app.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente 🚀");
});

// Ruta para obtener productos según búsqueda
app.get("/api/items", (req, res) => {
    const { q } = req.query;
    const products = loadProducts();

    if (!q) {
        return res.status(400).json({ error: "Debes proporcionar un término de búsqueda" });
    }

    const filteredProducts = products.filter((product) =>
        product.title?.toLowerCase().includes(q.toLowerCase()) ||
        product.description?.toLowerCase().includes(q.toLowerCase()) ||
        product.category?.toLowerCase().includes(q.toLowerCase())
    );

    res.json(filteredProducts);
});


app.get("/api/items/:id", (req, res) => {
    const { id } = req.params;
    const products = loadProducts();

    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json(product);
});


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
