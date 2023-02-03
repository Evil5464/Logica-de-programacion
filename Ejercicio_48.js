/* Dado un string devolver cuales son las letras que aparecen solo una vez
 y cual es la primera letra*/

let texto = 'Este texto solo tiene estas letras';

function soloUnaVez(texto){
    let result=[];
    let listaObtenidas=[];
    let listaRepetidos=[]

    let arr = texto.match(/[\w]/g);
    console.log(arr);

    arr.forEach(element => {
        if(!listaObtenidas.includes(element)){
            listaObtenidas.push(element);
        }else{
            listaRepetidos.push(element);
        }
    });

    listaObtenidas.forEach(letra =>{
        if(!listaRepetidos.includes(letra)){
            result.push(letra);
        }
    });

    



    return result;
}

console.log(soloUnaVez(texto));