//Encontrar el número de coincidencias de una palabra en una frase
//Se envían como parametros de una funcion la frase y la palabra
//Usaremos un objeto como mapa 

let frase = 'Esta es una palabra dentro de una frase, PALABRA!!!';
let palabra = 'palabra';


let result = coincidencias(frase, palabra);

function coincidencias(frase, busqueda){
    //Limpiamos la frase
    let frase_limpia = frase.toLowerCase().replace(/[!¡?¿,.+*-]/g, '');
    let mapa = {};

    //Dividimos en un arreglo
    let arr = [];
    arr = frase_limpia.split(' ');

    //Mapeamos cada palabra dentro del objeto(cada elemento corresponde a una propiedad del objeto)
    for (let  elemento of arr) {
        if(mapa[elemento]){ //si el emento existe entonces incrementa su valor
            mapa[elemento]++;
        }else{
            mapa[elemento] = 1;//síno existía el elemneto entonces crealo 
        }
    }

    console.log(mapa);

    if(mapa[palabra]){
        return mapa[palabra];
    }else{
        return 0;
    }

}

console.log(result);

