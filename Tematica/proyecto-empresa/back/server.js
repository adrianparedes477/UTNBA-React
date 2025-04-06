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
  password: 'LAPTOP-DUP89PHE\\adria', // Nota: Escapé el backslash
  server: 'localhost', 
  database: 'empresa',
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

// Endpoint de login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    // Conectar a la base de datos
    let pool = await sql.connect(dbConfig);
    
    // Consulta SQL para verificar credenciales
    // NOTA: En producción, nunca almacenes contraseñas en texto plano
    const result = await pool.request()
      .input('username', sql.VarChar, username)
      .input('password', sql.VarChar, password)
      .query('SELECT id, nombre, email FROM usuarios WHERE username = @username AND password = @password');
    
    // Verificar si el usuario existe
    if (result.recordset.length > 0) {
      const user = result.recordset[0];
      
      // Respuesta exitosa
      res.json({
        success: true,
        message: 'Inicio de sesión exitoso',
        user: {
          id: user.id,
          nombre: user.nombre,
          email: user.email
        }
      });
    } else {
      // Credenciales inválidas
      res.status(401).json({
        success: false,
        message: 'Nombre de usuario o contraseña incorrectos'
      });
    }
  } catch (err) {
    console.error('Error en login:', err);
    res.status(500).json({
      success: false,
      message: 'Error en el servidor',
      error: err.message
    });
  }
});

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});