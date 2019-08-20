function romanize(num) {
  //valida si el valor ingresado es un número
 if (isNaN(num)){
		return "El valor debe ser un número";
    }
  //valida que el número ingresado sea menor a 1000
 if(num > 999){
    return "El número debe ser menor a 1000";
    }
  //Se declaran las variables,
  //Un Json con clave en romano y valor en decimal
  //solo se toman en cuanto las letras que no se repiten
  //variable romanReturn vacia que se utiliza para el return
  //variable i que se utiliza en el loop for
  var romanJson = {CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
      romanReturn = '',
      i;
  //Se realiza un loop con cada uno de los valores del Json
  //Si el numero es igual o mayor al primer valor del Json entra al while
  //escribe la letra correspondiente en la variable romanReturn
  //le resta el valor a la variable num y se repite el ciclo hasta que num sea menor al valor del Json
  //se realiza proceso hasta que el parametro num queda en 0
  for ( i in romanJson ) {
    while ( num >= romanJson[i] ) {
      romanReturn += i;
      num -= romanJson[i];
    }
  }
  //se devuelve la variable romanReturn
  return romanReturn;
}
