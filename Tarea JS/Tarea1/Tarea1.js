function determinarTransporte(distancia) {
    if (distancia >= 0 && distancia <= 1000) {
        return "pie";
    } else if (distancia > 1000 && distancia <= 10000) {
        return "bicicleta";
    } else if (distancia > 10000 && distancia <= 30000) {
        return "colectivo";
    } else if (distancia > 30000 && distancia <= 100000) {
        return "auto";
    } else if (distancia > 100000) {
        return "avion";
    } else {
        return "Distancia no válida";
    }
}


console.log(determinarTransporte(500));       // pie
console.log(determinarTransporte(5000));      // bicicleta
console.log(determinarTransporte(20000));     // colectivo
console.log(determinarTransporte(50000));     // auto
console.log(determinarTransporte(150000));    // avion
console.log(determinarTransporte(-10));       // Distancia no válida