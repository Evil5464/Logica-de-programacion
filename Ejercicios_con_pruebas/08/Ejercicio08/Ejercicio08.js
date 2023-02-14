//Dado un número entero, inviertelo y devuelve de nuevo el entero


function inverteNumero(numero){
    let result;
    let numString = numero.toString();
    let arr = numString.split('');
    arr = arr.reverse();
    result = parseInt(arr.join(''));
    console.log(result);

    return result;
}

inverteNumero(123456);
module.exports = inverteNumero;