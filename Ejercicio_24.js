/* Dado un array de números enteros y un número, detectar si esa lista de números es una permutación del 1 al número dado

permutación de [1,2,3,4,5] , 5 : true
permutación de [1,2,4,5] , 5 : false


*/

function permutacion(arreglo, numero) {
    let auxPermutacion = [];
    for (let i = 1; i <= numero; i++) {
        auxPermutacion.push(i);
    }
    // console.log(auxPermutacion);
    let texto1 = arreglo.toString();
    let texto2 = auxPermutacion.toString();

    if (texto1 == texto2) {
        return true;
    }
    return false;
}

console.log(permutacion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 11));
