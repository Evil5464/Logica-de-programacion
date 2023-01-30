/* Dados dos número indicar cual es mayor y cual es menor */

function mayorMenor(a, b){
    if(a>b){
        return `El número mayor es ${a} y el número menor es ${b}`;
    }
    else if(b>a){
        return `El número mayor es ${b} y el número menor es ${a}`;
    }
    else {
        
        return 'Los números son iguales';
    }
}

console.log(mayorMenor(5,-7));