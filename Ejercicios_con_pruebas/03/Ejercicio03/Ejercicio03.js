//Encontrar el número de coincidencias de una palabra en una frase
//Se envían como parametros de una funcion la frase y la palabra


function coincidencias(frase, palabra){
    frase = frase.toLowerCase();
    let arr = frase.match(/[\wáéíóú]+/gi);
    let cont = 0;
    arr.forEach(element => {
        if (element==palabra){
            cont++;
        }
    });
    return cont;

}

module.exports = coincidencias;
