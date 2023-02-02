/* Dado un array de strings, devolver otro con los valores que esten 
formados por más de dos palabras */


let arr= ['texto1', 'Hola que tal', 'nos vemos', 'adiós', 'Me saludas a todos', 'bye'];

function textoLargo(arr){
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        let arrAux = arr[i].match(/[\wáéíóú]+/gi);
        console.log(arrAux);
        if(arrAux.length > 1){
            let auxTexto = arrAux.join(' ');
            result.push(auxTexto)
        }
        
    }
    return result;


}

console.log(textoLargo(arr));