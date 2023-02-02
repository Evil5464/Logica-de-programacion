/* Dado un array de númelro sacar la media de todos ellos  */
let arr = [10, 9, 9, 10, 10, 10, 10, 10, 10, 10];

function promedio(arr) {
    let result;
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }

    result = suma / arr.length;

    return result;
}

console.log(promedio(arr));
