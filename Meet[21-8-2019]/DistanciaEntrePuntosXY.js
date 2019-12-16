// Arrays de entrada
var arrayX = [0, 2, 14, 7];
var arrayY = [-1, 3, -5];

// Variables que vamos a emplear
var x1;
var y1;

// Coordenadas con combinatorias entre todos los puntos X, Y posibles
var coordenadasX = [];
var coordenadasY = [];

// Objeto para armar parejas de 2 puntos y su distancia
var obj = {
    x1: '',
    y1: '',
    x2: '',
    y2: '',
    d: ''
}

// Array para almacenar todas las parejas de puntos con su distancia
var result = [];

// Se recorren los dos arrays de entrada para formar los arrays (coordenadasX y corrdenadasY) con todos los posibles puntos
function generarArrayCordenadas(arrayX , arrayY) {
    arrayX.forEach(x => {
        arrayY.forEach(y => {
            coordenadasX.push(x);
            coordenadasY.push(y);
        });
    });
}

// Se valida que cada array contenga al menos un elemento
function validarArray(arrayX, arrayY){
    return arrayX.length > 0 && arrayY.length > 0;
}

function ordenarPorMenorDistancia(result) {
    return result.sort((a, b) => a.d - b.d);
}

// Funcion principal de la aplicacion
function init(arrayX, arrayY) {
    // Se valida que los arrays contengan al menos un elemento cada uno
    if (!validarArray(arrayX, arrayY)) {
        console.log('Cada array debe contener al menos un elemento.');

        return false;
    }

    // Generar los dos arrays con todos los puntos posibles según los arrays de entrada
    generarArrayCordenadas(arrayX, arrayY);

    // Generar todas las posibles distancias entre cualquier pareja de puntos existente
    // Usamos mismo indice (index) para recorrer arreglo en X y en Y y mismo tamaño máximo (coordenadasX) ya tienen misma longitud
    for (let index = 0; index < coordenadasX.length -1; index++) {
        // Asignamos a las variables los valres del primer punto tanto en X como en Y
        x1 = coordenadasX[index];
        y1 = coordenadasY[index];

        // Recorremos los arreglos de las coordenadas X & Y con todas las combinaciones
        for (let i = index+1; i < coordenadasX.length; i++) {
            // Calculamos la distancia entre 2 puntos
            var distancia = Math.sqrt( (x1-coordenadasX[i])*(x1-coordenadasX[i]) + (y1-coordenadasY[i])*(y1-coordenadasY[i]) )

            // Redondeamos la distancia a 3 decimales
            var distancia = Math.round(distancia * 1000) / 1000;
            
            // Log para ir viendo en pantalla cada combinacion de 2 puntos que existe
            // console.log(x1, y1, coordenadasX[i], coordenadasY[i]);

            // Agregamos al array resultado las coordenadas de los dos puntos evaluados y su distancia
            result.push({
                x1: x1, 
                y1: y1, 
                x2: coordenadasX[i], 
                y2: coordenadasY[i], 
                d: distancia});    
        }
    }

    result = ordenarPorMenorDistancia(result);

    // Información de salida
    let rta = "";
    for (let i = 0; i < result.length; i++) {
        rta += "["+result[i].x1+","+ result[i].y1+"] ["+ result[i].x2+","+ result[i].y2+"] = " + result[i].d+"\n";
    }
    console.log(rta);
}

// Se lanza la funcion principal de la aplicacion
init(arrayX, arrayY);