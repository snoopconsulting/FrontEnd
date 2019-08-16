* Defino reglas y pseudo codigo para plantear la idea y luego llevarla a node.js

- La idea en resumidas cuentas seria ir obteniendo el numero romano por partes. Restando el numero decimal tantas veces como se pueda hasta llegar al caso base.
- Decimal que ingresa debe ser menor a 1000 y mayor a 0 para asegurarnos que el numero es de 3 digitos y no mas.
- Defino arrelo e valores de los simbolos en ROMANO [M, CM, D, CD, C, XC, LX, XL, X, IX, V, IV, I]
- Defino arreglo de valores de los simbolos romanos de mayor magnitud [900, 500, 400, 100, 90, 50, 40, 10, 9, 4, 5, 1].
- Podemos usar una funcion recursiva (ya que realizaremos repetidas veces la misma logica y aprovechamos lineas de codigo) que reciba el numero decimal de 3 digitos y devuelva el numero romano por partes hasta llegar a un caso base donde la resta de 0.
- Si el decimal es mayor o igual a la posicion inicial de magnitudes entonces continuo restando posiciones hasta que el decimal sea menor a la posicion y agrego el simbolo romano de pos y hago un push al array de numero romano (donde lo iremos guardando por partes) y llamo recursivamente a la funcion con el mismo pos (el decimal decrementado hasta el momento, posicion, array de numero romano).s
- Si el decimal es menor a la posicion inicial de magnitudes de llamo recursivamente a la funcion con (el decimal decrementado hasta el momento, posicion + 1, array de numero romano).
- Si es cero devuelve el array de numero romano en formato string y no array.


* Pseudocodigo

- simbolosRomanos = [M, CM, D, CD, C, XC, LX, XL, X, IX, V, IV, I]
- simbolos = [900, 500, 400, 100, 90, 50, 40, 10, 9, 4, 5, 1]
- decimal = 999
- pos = 0
- romano = []

- si 0 < decimal < 1000
- recursiva()


- recursiva (decimal, pos, romano) {

- si decimal == 0
- return romano.split('')

- sino
- si decimal >= simbolos[pos]
- decimal -= simbolos[pos]
- romano.push(simbolosRomanos[pos])
- recursiva(decimal, pos, romano)

- sino
- recursiva(decimal, pos++, romano)

- }



* Implementacion a mejorar en JS

let simbolosRomanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'LX', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
let simbolos = [900, 500, 400, 100, 90, 50, 40, 10, 9, 4, 5, 1];
let decimal = 1;
let pos = 0;
let romano = [];

if ( 0 < decimal < 1000 ) {
 recursiva(decimal, pos, romano);
}

function recursiva (decimal, pos, romano) {
  if ( decimal == 0 ) {
    return romano.join('');
  } else {
    console.log(pos, simbolos[pos]);
    if ( decimal >= simbolos[pos] ) {
      console.log(decimal);
      decimal = decimal - simbolos[pos];
      romano.push(simbolosRomano[pos]);
      recursiva(decimal, pos, romano);
    } else {
      pos = pos +1;
      recursiva(decimal, pos, romano);
    }
  }
}