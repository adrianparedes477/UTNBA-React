import React, { useState, useEffect } from 'react';
import { validateToken, login, logout } from './authService';

const AuthButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  // Verificar el estado de autenticación al cargar el componente
  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          const response = await validateToken(token);
          if (response.valid) {
            setIsLoggedIn(true);
            setUsername(response.username);
          }
        } catch (error) {
          console.error('Error validando token:', error);
          localStorage.removeItem('authToken');
        }
      }
    };

    checkAuthStatus();
  }, []);

  const handleAuthClick = async () => {
    if (isLoggedIn) {
      // Proceso de logout
      try {
        await logout();
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
        setUsername('');
      } catch (error) {
        console.error('Error en logout:', error);
      }
    } else {
      // Proceso de login
      const enteredUsername = prompt('Ingrese su nombre de usuario:');
      const password = prompt('Ingrese su contraseña:');
      
      if (enteredUsername && password) {
        try {
          const response = await login(enteredUsername, password);
          if (response.success) {
            localStorage.setItem('authToken', response.token);
            setIsLoggedIn(true);
            setUsername(enteredUsername);
          } else {
            alert('Credenciales incorrectas');
          }
        } catch (error) {
          console.error('Error en login:', error);
          alert('Error al iniciar sesión');
        }
      }
    }
  };

  return (
    <div className="auth-container">
      <button 
        className="btn btn-primary" 
        onClick={handleAuthClick}
      >
        {isLoggedIn ? 'Cerrar Sesión' : 'Iniciar Sesión'}
      </button>
      
      {isLoggedIn && (
        <span className="ms-2">
          Bienvenido, <strong>{username}</strong>
        </span>
      )}
    </div>
  );
};

export default AuthButton;