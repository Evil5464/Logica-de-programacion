// Dado un texto y una busqueda devolver el texto con la palabra [-CENSURADO-] en todas las coincidencias. 
//En caso que no se envien los parámetros correctos devolver un mensaje

function censura(texto = false, busqueda = false){
    if(!texto){
        return 'no hay texto para la búsqueda';
    }
    if(!busqueda){
        return 'no hay datos para la busqueda';
    }

    let textoCensudaro = texto.replace(new RegExp(busqueda, 'gi'), '[-CENSURADO-]');
    return textoCensudaro;

}

console.log(censura(false, 'hola'));
console.log(censura('hola, hola. Hola ¿Que tal?', false));
console.log(censura('hola, hola. Hola ¿Que tal?', 'hola'));