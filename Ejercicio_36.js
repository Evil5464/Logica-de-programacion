/* Dado un texto, devolver cuantas consonantes y cuantas vocales tiene*/

let texto = 'Dabale arroz a la zorra el abad';

function cuentaLetras(texto){
    let result = '';
    let textoLimpio = texto.replaceAll(' ', '');
    let arrVocales = texto.match(/[aeiou]/gi);
    let contVocales = arrVocales.length;
    let contConsonantes = textoLimpio.length - contVocales;
    console.log(contConsonantes);
    result = `El número de vocales es: ${contVocales} y el número de consonantes es: ${contConsonantes}`;


    return result; 
}

console.log(cuentaLetras(texto));