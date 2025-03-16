// Función para cambiar de pestañas
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    
    const tablinks = document.getElementsByClassName("tab");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Función para ver un producto por ID
function verProducto() {
    const productoId = document.getElementById("productoId").value;
    if (!productoId) {
        alert("Por favor, ingresa un ID de producto");
        return;
    }
    
    fetch(`/producto/${productoId}`)
        .then(response => response.json())
        .then(data => {
            const resultados = document.getElementById("resultados");
            if (data.error) {
                resultados.innerHTML = `
                    <h3>Error</h3>
                    <p>${data.mensaje}</p>
                    <p>${data.sugerencia}</p>
                `;
            } else {
                const producto = data.producto;
                resultados.innerHTML = `
                    <h3>${producto.nombre}</h3>
                    <p><strong>Precio:</strong> $${producto.precio}</p>
                    <p><strong>Descripción:</strong> ${producto.descripcion}</p>
                    <p><strong>Disponible:</strong> ${producto.disponible ? 'Sí' : 'No'}</p>
                    <p><strong>Características:</strong></p>
                    <ul>
                        ${producto.caracteristicas.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                `;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById("resultados").innerHTML = `
                <h3>Error</h3>
                <p>Ocurrió un error al buscar el producto.</p>
            `;
        });
}

// Inicializar eventos cuando se carga el documento
document.addEventListener('DOMContentLoaded', function() {
    // Manejar envío del formulario de búsqueda
    document.getElementById("formBusqueda").addEventListener("submit", function(e) {
        e.preventDefault();
        
        const categoria = document.getElementById("categoria").value;
        const precioMin = document.getElementById("precioMin").value;
        const precioMax = document.getElementById("precioMax").value;
        
        fetch("/buscar", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ categoria, precioMin, precioMax })
        })
        .then(response => response.json())
        .then(data => {
            const resultados = document.getElementById("resultados");
            resultados.innerHTML = `
                <h3>Resultados de Búsqueda</h3>
                <p>Criterios: ${data.criterios.categoria}, Precio: ${data.criterios.precioMin} - ${data.criterios.precioMax}</p>
                <p>Total de resultados: ${data.total}</p>
            `;
            
            if (data.resultados.length > 0) {
                resultados.innerHTML += `
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Categoría</th>
                        </tr>
                        ${data.resultados.map(producto => `
                            <tr>
                                <td>${producto.id}</td>
                                <td>${producto.nombre}</td>
                                <td>$${producto.precio}</td>
                                <td>${producto.categoria}</td>
                            </tr>
                        `).join('')}
                    </table>
                `;
            } else {
                resultados.innerHTML += `<p>No se encontraron productos con estos criterios.</p>`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById("resultados").innerHTML = `
                <h3>Error</h3>
                <p>Ocurrió un error al buscar productos.</p>
            `;
        });
    });
});