// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

// Middleware para procesar JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.json({
    mensaje: "Bienvenido a la API de ejemplo",
    autor: "Adrian Paredes",
    descripcion: "Aplicación Express con múltiples rutas"
  });
});

// Ruta de productos
app.get('/productos', (req, res) => {
  const productos = [
    { id: 1, nombre: "Laptop", precio: 999.99 },
    { id: 2, nombre: "Smartphone", precio: 499.99 },
    { id: 3, nombre: "Auriculares", precio: 79.99 }
  ];
  
  res.json({
    mensaje: "Lista de productos disponibles",
    total: productos.length,
    productos: productos
  });
});

// Ruta de usuarios
app.get('/usuarios', (req, res) => {
  const usuarios = [
    { id: 1, nombre: "Ana", email: "ana@ejemplo.com" },
    { id: 2, nombre: "Luis", email: "luis@ejemplo.com" },
    { id: 3, nombre: "Elena", email: "elena@ejemplo.com" }
  ];
  
  res.json({
    mensaje: "Lista de usuarios registrados",
    total: usuarios.length,
    usuarios: usuarios
  });
});

// Ruta para manejar 404
app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada",
    ruta: req.originalUrl
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

module.exports = app;