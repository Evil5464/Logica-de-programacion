//Dados dos arrays, devolver un array con los elementos comunes entre ambos

let arr1 = [21, 31, 434, 55, 78, 988, 99, 1, 8, 42, 3, 25, 6, 7];
let arr2 = [23, 34, 565, 87, 99, 1, 2, 7, 34, 78, , 44, 55, 434, 21];
let result = comunes(arr1, arr2);

function comunes(arr1, arr2) {
    let arrAux = arr1.filter((elemento) => {
        return arr2.includes(elemento);
    });
    return arrAux;
}

console.log(result);
