const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Permite recibir JSON en las peticiones

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente 🚀");
  console.log("Productos cargados:", loadProducts());
});

function loadProducts() {
  const filePath = path.join(__dirname, "data", "products.json");
  console.log("📌 Intentando leer archivo:", filePath);

  try {
    // Verificar si el archivo existe
    if (!fs.existsSync(filePath)) {
      console.error("🚨 El archivo products.json no se encuentra en la ruta.");
      return [];
    }

    const data = fs.readFileSync(filePath, "utf8");
    console.log("📌 Contenido del archivo JSON:", data); // Ver el contenido del archivo antes de parsearlo

    const jsonData = JSON.parse(data);
    
    // Asegurarse de que la propiedad "products" exista y sea un array
    if (!Array.isArray(jsonData.products)) {
      console.error("🚨 La propiedad 'products' no es un array:", jsonData.products);
      return [];
    }

    return jsonData.products; // Devolver el array de productos
  } catch (error) {
    console.error("🚨 Error al leer el archivo JSON:", error.message);
    return [];
  }
}

// Ruta para obtener productos según búsqueda
app.get("/api/items", (req, res) => {
  const { q } = req.query; // Captura el parámetro de búsqueda
  const products = loadProducts(); // Cargar productos

  if (!q) {
    return res.status(400).json({ error: "Debes proporcionar un término de búsqueda" });
  }

  // Filtrar productos que coincidan con la búsqueda
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(q.toLowerCase()) ||
    product.description.toLowerCase().includes(q.toLowerCase()) ||
    product.category.toLowerCase().includes(q.toLowerCase())
  );

  res.json(filteredProducts);
});

// Ruta para obtener un producto por su ID
app.get("/api/items/:id", (req, res) => {
  const { id } = req.params;
  const products = loadProducts(); // Cargar productos

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
