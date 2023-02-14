//Dados dos arrays, devolver un array con los elementos comunes entre ambos

let arr1 =[2,3,5,6,7,2,9,2,1];
let arr2 =[5,3,7,3,7,56,8,4,2];


function comunes(arr1, arr2){
    result=[];
    for (let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i]) && !result.includes(arr1[i])){
            result.push(arr1[i]);
        }
        
    }
    console.log(result);

    return result;
}

module.exports = comunes;