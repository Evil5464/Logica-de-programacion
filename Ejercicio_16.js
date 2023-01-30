// Dado una cadena de texto, devolver cuantas vocales (a,e,i,o,u) tiene.
let texto = 'dabale arroz a la zorra el abad';



function cuentaVocales(texto){
    let result;
    let arr = texto.match(new RegExp (/[aeiou]/, 'gi'));
    // console.log(arr);
    result = arr.length;

    return result;
}

console.log('El número de vocales es: '+ cuentaVocales(texto));