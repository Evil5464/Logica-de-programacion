/* Dadas dos cadenas de texto, crear un algoritmo que compruebe si son anagramas entre sí */

let texto1 = "Sergio";
let texto2 = "Riesgo";
let arr =[];

function anagrama(texto1, texto2) {
    let auxTexto1 = texto1.toLowerCase();
    let auxTexto2 = texto2.toLowerCase();
    // console.log(auxTexto1);
    // console.log(auxTexto2);
    let arr1Aux = auxTexto1.split("");
    let arr2Aux = auxTexto2.split("");
    // console.log(arr1Aux);
    // console.log(arr2Aux);
    arr1Aux.sort();
    arr2Aux.sort();
    console.log(arr1Aux);
    console.log(arr2Aux);
    auxTexto1 = arr1Aux.join('');
    auxTexto2 = arr2Aux.join('');    
    // console.log(auxTexto1);
    // console.log(auxTexto2);

    if (auxTexto1 == auxTexto2) {
        return "Son anagramas";
    } else {
        return "No son anagramas";
    }
}

console.log(anagrama(texto1, texto2));
