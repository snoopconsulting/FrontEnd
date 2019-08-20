// - Obtenemos el numero romano por partes. Restando el numero decimal tantas veces como se pueda hasta llegar al caso base.

let simbolosRomanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'LX', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
let simbolos = [900, 500, 400, 100, 90, 50, 40, 10, 9, 4, 5, 1];
let decimal = 1;
let pos = 0;
let romano = [];

if ( 0 < decimal < 1000 ) {// N° decimal de 3 digitos
 recursiva(decimal, pos, romano);
}

function recursiva (decimal, pos, romano) {
  if ( decimal == 0 ) {// Caso base
    return romano.join('');
  } else {
    console.log(pos, simbolos[pos]);
    if ( decimal >= simbolos[pos] ) {// Continuo restando posiciones del array simbolos al decimal hasta que sea menor a la posicion en el array de simbolos
      console.log(decimal);
      decimal = decimal - simbolos[pos];
      romano.push(simbolosRomano[pos]);// Voy armando el n° Romano
      recursiva(decimal, pos, romano);
    } else {// Llamo recursivamente a la funcion con el decimal decrementado hasta el momento y posicion incrementado en 1
      pos = pos +1;
      recursiva(decimal, pos, romano);
    }
  }
}