var x = [3,4,6,9];
var y = [5,0,1,-2];
var coordenadas = [];
var result = [];

function validarArray(x,y){
    return x.length>0 && y.length>0;
}

function ordenar(a){
   return a.sort();
}

function generarArrayCordenadas(x , y){
    x.forEach(elementX => {
        y.forEach(elementY => {
            coordenadas.push({x: elementX, y: elementY});
        });
    });
}

function distanciaEntreDosPuntos(par1, par2)
{
    par1 = JSON.parse(par1);
    console.log(par1);
    return Math.sqrt(Math.pow((par2.x - par1.x), 2) + Math.pow((par2.y - par1.y), 2));
}

function init(x, y) {
    //console.log('Es valido: ', validarArray(x, y));
    if (!validarArray(x, y)) {
        return false;
    }

    generarArrayCordenadas(x, y);
    //console.log('Array de coordenadas: ', coordenadas);

    coordenadas.map((par1, i) => {
        //console.log(i, par1, coordenadas.length);
        if (i < coordenadas.length){
            var par2 = coordenadas[i+1];
            var dist = {
                dis: distanciaEntreDosPuntos(par1, par2),
                par1: par1,
                par2: par2
            };
            console.log('distancia entre par1('+ par1+ ') par2('+ par2 +') dist: '+ dist);
            
            result.push(dist);
        }
        
    });

    console.log(result);
}

init(x, y);