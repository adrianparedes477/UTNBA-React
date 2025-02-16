// Obtener referencias a los cuadrados
const cuadrado1 = document.getElementById('cuadrado1');
const cuadrado2 = document.getElementById('cuadrado2');
const cuadrado3 = document.getElementById('cuadrado3');

// Añadir event listeners para el clic
cuadrado1.addEventListener('click', function() {
    document.body.style.backgroundColor = '#FF5733';
});

cuadrado2.addEventListener('click', function() {
    document.body.style.backgroundColor = '#33FF57';
});

cuadrado3.addEventListener('click', function() {
    document.body.style.backgroundColor = '#3357FF';
});