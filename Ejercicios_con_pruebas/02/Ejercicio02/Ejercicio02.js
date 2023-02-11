 //Dado una cadena de texto evaluar si es un palíndromo

 let texto = 'Dabale arroz a la zorra el abad'

 function palindromo(texto){
    texto = texto.toLowerCase().replace(/[ ]/g, '');
    let arr = texto.split('');
    let arr2 = arr.reverse();
    let texto2 = arr.join('');
    if (texto2 == texto){
        return true;
    }else{
        return false;
    }
 }

// console.log(palindromo(texto));


module.exports = palindromo;
