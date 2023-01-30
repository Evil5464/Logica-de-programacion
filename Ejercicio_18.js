/* Dado un numero mostrar todos sus número divisores */

function divisores(numero){

    console.log(`Los números que dividen a ${numero} son:`);
    for(let i = 1; i <= numero; i++){
        if(numero%i == 0){
            console.log(i);
        }
    }
}

divisores(15);