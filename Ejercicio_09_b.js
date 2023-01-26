//Dados dos arrays, devolver un array con los elementos comunes entre ambos

let arr1 = [2, 5, 3, 12, 34, 6, 8, 9, 24, 68, 9, 2];
let arr2 = [8, 2, 3, 5, 898, 45, 13, 34, 12, 9, 23, 45];

function comunes() {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }
}

console.log(comunes(arr1, arr2));
