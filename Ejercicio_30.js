/* Dado un array de número  regresar un array sin elementos duplicados y si hay un string elimínalo*/

let arr = [23, 42, '65', 3, 2, 'a', 'h', 12, 42, 3];
// console.log(typeof(arr[1]));

function limpiaArray(arr){
    let arrNumber = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) == 'number' && !arrNumber.includes(arr[i])){
            arrNumber.push(arr[i]);
        }
    }
    // console.log(arrNumber);
    return arrNumber;

}

console.log(limpiaArray(arr));