// Obtener referencias a los elementos
const textarea = document.getElementById('texto');
const contadorElement = document.getElementById('contador');

// Función para actualizar el contador
function actualizarContador() {
    const cantidad = textarea.value.length;
    contadorElement.textContent = cantidad + (cantidad === 1 ? ' caracter' : ' caracteres');
    
    // Opcional: cambiar estilo si supera cierto límite
    if (cantidad > 100) {
        contadorElement.classList.add('limite');
    } else {
        contadorElement.classList.remove('limite');
    }
}

// Escuchar el evento input en el textarea
textarea.addEventListener('input', actualizarContador);