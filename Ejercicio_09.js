//Dados dos arrays, devolver un array con los elementos comunes entre ambos

let arr1 = [4,6,3,5,7,3,8,9,2,2,4,10];
let arr2 = [8,9,1,2,1,4,5,10];
let result=[];

let mapa = {};

for (const iterator of arr1) {
    mapa[iterator] = 0;    
}

console.log(mapa);

for (const iterator of arr2) {
    if(mapa[iterator]!=undefined){
        mapa[iterator]++;
    }
}
console.log(mapa);

for (const key in mapa) {
    if (mapa[key] > 0){
        result.push(key);
    }
}

console.log(result);