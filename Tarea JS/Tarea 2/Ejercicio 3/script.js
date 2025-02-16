// Array de alumnos
var alumnos = [
    {
      nombre: 'Juan Gomez',
      nota: 7
    }, {
      nombre: 'Pedro Rodriguez',
      nota: 4
    }, {
      nombre: 'Roxana García',
      nota: 8
    }, {
      nombre: 'Luciano Lopez',
      nota: 5
    }, {
      nombre: 'Fernanda Gimenez',
      nota: 6
    }, {
      nombre: 'Florencia Martinez',
      nota: 10
    }, {
      nombre: 'Raul Sanchez',
      nota: 7
    }, {
      nombre: 'Sandra Figueroa',
      nota: 8
    }
  ];
  
  // Filtrar alumnos aprobados (nota >= 7)
  var alumnosAprobados = alumnos.filter(function(alumno) {
    return alumno.nota >= 7;
  });
  
  // Función para mostrar los alumnos en la lista
  function mostrarAlumnos() {
    const listaCompleta = document.getElementById('todos-alumnos');
    const listaAprobados = document.getElementById('alumnos-aprobados');
    
    // Mostrar todos los alumnos
    alumnos.forEach(function(alumno) {
      const li = document.createElement('li');
      li.className = 'alumno-item';
      
      const spanNota = document.createElement('span');
      spanNota.className = alumno.nota >= 7 ? 'nota aprobado' : 'nota reprobado';
      spanNota.textContent = alumno.nota;
      
      li.textContent = alumno.nombre + ' ';
      li.appendChild(spanNota);
      
      listaCompleta.appendChild(li);
    });
    
    // Mostrar alumnos aprobados
    alumnosAprobados.forEach(function(alumno) {
      const li = document.createElement('li');
      li.className = 'alumno-item';
      
      const spanNota = document.createElement('span');
      spanNota.className = 'nota aprobado';
      spanNota.textContent = alumno.nota;
      
      li.textContent = alumno.nombre + ' ';
      li.appendChild(spanNota);
      
      listaAprobados.appendChild(li);
    });
  }
  
  // Ejecutar cuando el documento esté listo
  document.addEventListener('DOMContentLoaded', mostrarAlumnos);