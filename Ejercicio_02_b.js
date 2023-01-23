// Evaluar si una cadena de texto es un palindromo
//Copiendoen un array, invirtiendolo y luego comparandolo

function palindromo(texto){
    texto = texto.replaceAll(' ', '');
    let arr = texto.split('');
    arr.reverse();
    let textoAux = arr.join('');
    if(texto == textoAux){
        return true;
    }else{
        return false;
    }


}


result = palindromo('dabale arroz a la zorra el abad');
console.log(result);