// Dado un texto y una busqueda devolver el texto con la palabra [-CENSURADO-] en todas las coincidencias. 
//En caso que no se envien los parámetros correctos devolver un mensaje

function censurado(texto, busqueda){
    let textoCensurado = texto.replaceAll(busqueda, '[-Censurado-]')
    return textoCensurado;
}

console.log(censurado('hola, hola', 'hola'));