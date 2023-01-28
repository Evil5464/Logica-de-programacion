// Dado un texto y una busqueda devolver el texto con la palabra [-CENSURADO-] en todas las coincidencias. 
//En caso que no se envien los parámetros correctos devolver un mensaje

function censurado(texto = false, busqueda = false){
    if(!texto){
        return 'No existe texto para hacer busquedas';
    }
    if(!busqueda){
        return 'No existe busqueda';
    }
    
    let textoCensurado = texto.replaceAll(busqueda, '[-Censurado-]')
    return textoCensurado;
}

console.log(censurado(false, 'hola'));
console.log(censurado('hola, hola', false));
console.log(censurado('hola, hola', 'hola'));