//Dados dos número encontrar cuantos número impares hay entre ellos

function impares(a, b){
    let cont=0;

    for (let i = a+1; i < b; i++) {
        if(i%2!=0){
            cont++;
        }
        // console.log(i);
        
    }
    return (cont);
}

console.log(impares(7,11));