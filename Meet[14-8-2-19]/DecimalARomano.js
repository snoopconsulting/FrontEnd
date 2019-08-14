var decimal = 450;
var arrayRomano = [['I','II','III','IV','V','VI','VII','VIII','IX'],
    ['X','XX','XXX','XL', 'L', 'LX', 'LXX','LXXX','XC'],['C', 'CC','CCC',]]
// console.log(decimal.toString().split(''));
function toRoman(decimal) {
    var romano;

    
    if (decimal > 999 || decimal < 0) {
        return false;
    }
    var listString = decimal.toString().split('');

    var valor = listString[0];

    for(let i = 0; i < listString; i++){

    }

    // for (let i = decimalString.length; i > 0; i--) {
    //     switch(decimalString) {
    //         case 1:

    //     }
    // }

    switch (valor){
        case 1: 
            valor = "I"
        break
    }

    // for (let i = decimalString.length; i > 0; i--) {
    //     switch(decimalString.length) {
    //         case 1:

    //     }
    // }

    return romano;
}
toRoman(decimal)