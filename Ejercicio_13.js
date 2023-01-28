/* Dado un array dividir en arrays de tamaño indicado de elementos
[7, 8, 9, 2, 3]

Devuelve

[[7, 8], [9,2], [3]];

*/
console.log(divide([7, 8, 9, 2, 3, 12, 23, 345,3, 4, 5, 767, 3, 64, 3, 34, 56,23, 3,2], 3));

function divide(arr, n) {
    let result = [];
    let aux = [];

    for (let i = 0; i < arr.length; i++) {
        if(i%n == n-1){
            aux.push(arr[i]);
            result.push(aux);
            aux = []
        }
        else{
            aux.push(arr[i]); 
        }
    }
    if(aux.length != 0){
        result.push(aux);
    }

    return result;
}

