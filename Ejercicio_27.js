/* Dado un número mostrar cuantos años meses y días equivalen */

function tiempo(n){
    let años = Math.floor(n/365);
    // console.log(años);
    let añosResto = n%365;
    // console.log(añosResto);
    let meses = Math.floor(añosResto/30);
    // console.log(meses);
    let dias =  añosResto%30;
    // console.log(dias);

    return `Equivale a ${años}, ${meses} meses y ${dias} días`;

}


console.log(tiempo(920));