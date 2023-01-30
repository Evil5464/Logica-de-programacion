/* Dada una cadena de texto, recortar el string mostrando los x primeros caracteres */

let texto = 'dabale arroz a la zorra el abad';

function getPrimeros(texto, numero){
    let result ='';
    result = texto.substring(0, numero);
    return result;
}

console.log(getPrimeros(texto, 10));