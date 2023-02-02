/* Dados dos números obtener un numero aleatorio entre ellos 
aleatorio(1, 100)

Devueve: 46

b - a = 10 - 3 = 7

Math.random(); solo me da valores entre 0 y 1   
*/

let valor = Math.random();
console.log(valor);

function aleatorio(a, b) {
    let aux = b - a;
    let auxAleatorio = Math.random( );
    console.log(auxAleatorio);
    let valorNeto = auxAleatorio * aux;
    console.log(valorNeto);
    let valorDesplazado = valorNeto + a;
    console.log(valorDesplazado);
    let result = Math.round(valorDesplazado);

    return result;
}

console.log(aleatorio(1, 7));
