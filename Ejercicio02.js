 //Dado una cadena de texto evaluar si es un palíndromo

let texto = 'anita laba lotina';
texto = texto.replaceAll(' ', '');
console.log(texto);

let longitud = texto.length;
let indiceFinal = longitud-1;
console.log(`la longitud es ${longitud}`);
let palindromo = true;


for (let i = 0; i < texto.length; i++) {
    // console.log(texto[i] +' == '+ texto[indiceFinal-i]);
    if(texto[i] != texto[indiceFinal-i]){
        palindromo = false;
    }
 }

console.log(palindromo);