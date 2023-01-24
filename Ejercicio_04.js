// Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres,
//  sin usar métodos del lenguaje solo estructuras de control

let texto = 'Este es una cadena de texto';
let result = invierte_texto(texto);

function invierte_texto(texto){
    let texto_invertido = '';
    let indiceFinal = texto.length - 1;
    for (let i = 0; i < texto.length; i++) {
        texto_invertido += texto[indiceFinal-i];        
    }
    return texto_invertido;
}

console.log(result);


