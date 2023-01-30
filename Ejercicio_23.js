/* Dada una cadena de texto, poner mayuscula a acada parlabra y devolver la cadena de texto */

let texto = 'dabale arroz a la zorra el abad';


function capitaliza(texto){
    let result='';
    let arraux = texto.match(/[\w]+/gi);
    // console.log(arraux);
    let primero ='';
    let auxPalabra = ' ';
    
    for (let i = 0; i < arraux.length; i++) {
        primero = arraux[i][0];
        console.log(primero);
        primero = primero.toUpperCase();
        auxPalabra = arraux[i].substring(1);
        console.log(auxPalabra);
        arraux[i] = primero + auxPalabra
        console.log(arraux[i]);

        //la misma solución simplificada despúes de varias pruebas
        // arraux[i] = arraux[i][0].toUpperCase() + arraux[i].substring(1);
    }

    result = arraux.join(' ');
    return result;
}

console.log(capitaliza(texto));