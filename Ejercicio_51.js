/* Dado un array de numeros devolver un array nuevo con los número pares e impares separados */

let arr = [23,32,3,4,56,67,897,3,5,34,23];

function paresImpares(arr){
    let arrPares=[];
    let arrImpares=[];

    arr.forEach(numero => {
        if(numero%2==0){
            arrPares.push(numero);
        }else{
            arrImpares.push(numero);
        }
    });

    let result = {};
    result.pares=arrPares;
    result.impares=arrImpares;
    return result;
}

console.log(paresImpares(arr));