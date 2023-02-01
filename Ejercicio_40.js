/* Dado un array de números, devolver el más alto y el más bajo*/

let arr = [34,4543,232,34,345,45,7,8,9,1,76];

function altoBajo(arr){
    let result;
    let alto = arr[0];
    let bajo = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if(alto<arr[i]){
            alto = arr[i];
        }
        if(bajo > arr[i]){
            bajo = arr[i];
        }        
    }

    result = `El número más bajo es ${bajo} y el número más alto es ${alto}`;


    return result;
}

console.log(altoBajo(arr));