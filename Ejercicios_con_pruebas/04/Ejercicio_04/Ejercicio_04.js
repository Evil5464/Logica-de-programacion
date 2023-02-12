// Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres,
//  sin usar métodos del lenguaje solo estructuras de control

let texto = 'Esto es una cadena de texto para invertir';

function invierteTexto(texto){
    let result='';
    for (let i = texto.length-1; i >= 0; i--) {
        result += texto[i];
    }
    return result;
}

module.exports = invierteTexto;
