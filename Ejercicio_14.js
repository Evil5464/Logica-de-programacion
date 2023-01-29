/* Dado un strin y un número, repetir el string tantas veces como lo indique el número */

function repite(texto, n){
    let result = '';
    for (let i = 0; i < n; i++) {
        result += `${i+1} ${texto}\n`;
    }
    return result;
}

console.log(repite('hola', 100));