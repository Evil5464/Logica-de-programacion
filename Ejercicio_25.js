/* Dado do un string ponerlo en mayúsculas o minúsculas dependiendo 
de si hay más mayúsculas o minúsculas por defecto en el string   */

let texto = 'Dabale arroz A LA ZORRA el ABAD';

function mayusMinus(texto){
    let result = '';
    let arrMayus;
    let arrMinus;
    
   arrMayus = texto.match(/[A-Z]/g);
   console.log(arrMayus);
   arrMinus = texto.match(/[a-z]/g);
   console.log(arrMinus);

    if (arrMayus.length > arrMinus.length) {
        result = texto.toUpperCase();
    }else{
        result = texto.toLowerCase();
    }

    return result;
}

console.log(mayusMinus(texto));