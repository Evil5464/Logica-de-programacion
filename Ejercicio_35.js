/* Dado un array crear uno nuevo con el primer y último elemento del array original */

let arr = [12 , '323', 2, 'j', 2 , 'hola'];

function primeroUltimo(arr){
    let result = [];

    // result.push(arr[0]);
    // result.push(arr[arr.length-1]);

    result.push(arr.shift());
    result.push(arr.pop());


    return result;
}

console.log(primeroUltimo(arr));