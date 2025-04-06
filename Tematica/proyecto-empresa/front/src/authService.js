// URL base para los endpoints de autenticación
const API_URL = 'http://localhost:3000/api';

/**
 * Realiza una petición de inicio de sesión
 * @param {string} username - Nombre de usuario
 * @param {string} password - Contraseña
 * @returns {Promise<Object>} - Respuesta del servidor
 */
export const login = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    
    return await response.json();
  } catch (error) {
    console.error('Error en servicio login:', error);
    throw error;
  }
};

/**
 * Valida un token con el servidor
 * @param {string} token - Token JWT
 * @returns {Promise<Object>} - Respuesta del servidor
 */
export const validateToken = async (token) => {
  try {
    const response = await fetch(`${API_URL}/validate-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    
    return await response.json();
  } catch (error) {
    console.error('Error validando token:', error);
    throw error;
  }
};

/**
 * Cierra la sesión del usuario
 * @returns {Promise<Object>} - Respuesta del servidor
 */
export const logout = async () => {
  try {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      return { success: true };
    }
    
    const response = await fetch(`${API_URL}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    
    return await response.json();
  } catch (error) {
    console.error('Error en servicio logout:', error);
    throw error;
  }
};