// Ejercicio imprime la tabla de multiplicar de un número predeterminado

'use strict'

let n = 8;

function listaMultiplicaciones(n){
    let result = '# Tabla del número' + n +'#' +'\n\n';
    for(let i = 1 ; i<= 10; i++){
        result += n +' x '+ i + ' = ' + n*i + '\n';
    }
    return result;
}

console.log(listaMultiplicaciones(n));

