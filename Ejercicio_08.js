//Dado un número entero, inviertelo y devuelve de nuevo el entero

function invertirNumero(n){
    let result = parseInt(n.toString()
    .split('')
    .reverse()
    .join(''));
    return result;
}


console.log(invertirNumero(987654321));