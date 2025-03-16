// app.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

// Middleware para procesar JSON y datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal - Renderiza un formulario HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta que responde según el parámetro recibido
app.get('/producto/:id', (req, res) => {
  const productoId = req.params.id;
  
  // Catálogo de productos
  const productos = {
    '1': {
      id: 1,
      nombre: "Smartphone Premium",
      precio: 899.99,
      descripcion: "Último modelo con cámara de alta resolución y batería de larga duración",
      disponible: true,
      caracteristicas: ["5G", "256GB", "Pantalla AMOLED", "Resistente al agua"]
    },
    '2': {
      id: 2,
      nombre: "Laptop Ultradelgada",
      precio: 1299.99,
      descripcion: "Ideal para profesionales y estudiantes que necesitan portabilidad",
      disponible: true,
      caracteristicas: ["SSD 512GB", "16GB RAM", "14 pulgadas", "Procesador i7"]
    },
    '3': {
      id: 3,
      nombre: "Auriculares Inalámbricos",
      precio: 149.99,
      descripcion: "Cancelación de ruido activa y calidad de sonido excepcional",
      disponible: false,
      caracteristicas: ["Bluetooth 5.0", "30 horas de batería", "Resistente al sudor", "Micrófono integrado"]
    }
  };

  // Verificar si el producto existe
  if (productos[productoId]) {
    res.json({
      mensaje: `Información del producto ${productoId}`,
      producto: productos[productoId]
    });
  } else {
    res.status(404).json({
      error: "Producto no encontrado",
      mensaje: `No existe un producto con ID ${productoId}`,
      sugerencia: "Prueba con los IDs 1, 2 o 3"
    });
  }
});

// Ruta para búsqueda con formulario
app.post('/buscar', (req, res) => {
  const { categoria, precioMin, precioMax } = req.body;
  
  // Simulación de búsqueda de productos
  const resultados = [
    {
      id: 1,
      nombre: "Smartphone Premium",
      precio: 899.99,
      categoria: "Electrónica"
    },
    {
      id: 2,
      nombre: "Laptop Ultradelgada",
      precio: 1299.99,
      categoria: "Computadoras"
    },
    {
      id: 3,
      nombre: "Auriculares Inalámbricos",
      precio: 149.99,
      categoria: "Accesorios"
    }
  ].filter(producto => {
    let cumpleCriterios = true;
    
    // Filtrar por categoría si se especificó
    if (categoria && categoria !== "todas") {
      cumpleCriterios = cumpleCriterios && producto.categoria.toLowerCase() === categoria.toLowerCase();
    }
    
    // Filtrar por precio mínimo si se especificó
    if (precioMin && !isNaN(precioMin)) {
      cumpleCriterios = cumpleCriterios && producto.precio >= parseFloat(precioMin);
    }
    
    // Filtrar por precio máximo si se especificó
    if (precioMax && !isNaN(precioMax)) {
      cumpleCriterios = cumpleCriterios && producto.precio <= parseFloat(precioMax);
    }
    
    return cumpleCriterios;
  });
  
  res.json({
    mensaje: "Resultados de búsqueda",
    criterios: {
      categoria: categoria || "todas",
      precioMin: precioMin || "no especificado",
      precioMax: precioMax || "no especificado"
    },
    resultados: resultados,
    total: resultados.length
  });
});

// Ruta para manejar 404
app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada",
    ruta: req.originalUrl,
    sugerencia: "Prueba con / o /producto/:id"
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

module.exports = app;