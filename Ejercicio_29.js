/* Dado un número indicar si es un número capicua o nó */

function capicua(n){
    let auxstring = n.toString();
    let auxstring2;
    // console.log(auxstring);
    let arrAux = auxstring.split('');
    arrAux.reverse();
    // console.log(arrAux);
    auxstring2 = arrAux.join('');
    // console.log(auxstring2);

    if (auxstring == auxstring2){
        return true;
    }else{
        return false;
    }
    
}

console.log(capicua (2022));