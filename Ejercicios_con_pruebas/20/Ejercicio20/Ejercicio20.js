/* Dadas dos cadenas de texto, crear un algoritmo que compruebe si son anagramas entre sí */

function anagrama(texto1, texto2){
    texto1 = texto1.toLowerCase();
    texto2 = texto2.toLowerCase();
    
    let arr1Aux = texto1.split('');
    let arr2Aux = texto2.split('');

    arr1Aux.sort();
    arr2Aux.sort();

    texto1 = arr1Aux.join('');
    texto2 = arr2Aux.join('');

    if (texto1 == texto2){
        return true;
    }else{
        return false;
    }
    
}

anagrama('Hola', 'halo');

module.exports = anagrama;

