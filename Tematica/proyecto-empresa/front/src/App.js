import React from 'react';
import AuthButton from './AuthButton';

function App() {
  return (
    <div className="App">
      {/* Suponiendo que tu navegación es un componente separado */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Mi Empresa</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><a className="nav-link" href="sobre-nosotros.html">Sobre Nosotros</a></li>
              <li className="nav-item"><a className="nav-link" href="productos.html">Productos</a></li>
              <li className="nav-item"><a className="nav-link" href="contacto.html">Contacto</a></li>
              <li className="nav-item"><a className="nav-link" href="preguntas-frecuentes.html">FAQ</a></li>
            </ul>
            {/* Componente de autenticación */}
            <AuthButton />
          </div>
        </div>
      </nav>
      
      <div className="container mt-4">
        <h1>Bienvenido a Nuestra Página Web</h1>
        {/* Resto del contenido */}
      </div>
    </div>
  );
}

export default App;