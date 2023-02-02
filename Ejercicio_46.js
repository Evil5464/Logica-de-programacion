/* Dado un string devolver todos los posibles substrings

Ejemplo 

(hola)

Devuelve:

[
    'h', 'o', 'l', 'a'
    'ho', 'ol', 'la'
    'hol', 'ola'
    'hola'
]

Solución

tamaño de substring i       inices de los chars j  cantidad de caracteres k

0                               0,1,2,3                 1
1                               0,1,2                   2
2                               0,1                     3
3                               0                       4




*/

let texto = "hola";
// console.log(texto.substring(1, 3));


function todosSubstrings(texto) {
    let result = [];
    let auxTexto = "";

    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < texto.length - i; j++) {
            for (let k = j; k < j + i+1; k++) {
                auxTexto += texto[k];
            }
            result.push(auxTexto);
            auxTexto='';
        }
    }
    return result;
}
console.log(todosSubstrings(texto));
