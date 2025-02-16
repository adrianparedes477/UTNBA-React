function encontrarMayor(numeros) {
    // Verificar si el array está vacío
    if (numeros.length === 0) {
      return "El array está vacío";
    }
    
    // Inicializar la variable mayor con el primer elemento del array
    let mayor = numeros[0];
    
    // Recorrer el array para encontrar el número mayor
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > mayor) {
        mayor = numeros[i];
      }
    }
    
    return mayor;
  }
  
  // Ejemplos de uso
  console.log(encontrarMayor([1, 5, 3, 9, 4]));         // 9
  console.log(encontrarMayor([10, 7, 15, 8, 3]));       // 15
  console.log(encontrarMayor([100, 200, 50, 75, 150])); // 200
  console.log(encontrarMayor([-5, -2, -10, -1, -7]));   // -1
  console.log(encontrarMayor([0]));                     // 0
  console.log(encontrarMayor([]));                      // "El array está vacío"