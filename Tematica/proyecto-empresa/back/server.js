const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configuración de conexión a SQL Server
const dbConfig = {
  user: 'tu_usuario',
  password: 'LAPTOP-DUP89PHE\adria',
  server: 'localhost', 
  database: 'empresa',
  options: {
    encrypt: true, // 
    trustServerCertificate: true //
  }
};