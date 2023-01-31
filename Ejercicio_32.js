/* Dado un array de un números devolver el array con sus números elevados 
al cuadrado, eliminando cualquier contenido que no sea numérico  */

let arr = [12, 4, 5, 'f', '32', 4, 1];

function sqrArr(arr){
    let auxArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) == 'number'){
            auxArr.push(arr[i]*= arr[i]);
        }
        
    }
    // console.log(auxArr);
    return auxArr

}

console.log(sqrArr(arr));