//Imprime las tablas de multiplicar de un determincdo número

function tablaMultiplicar(numero){
    let result = [];

    for (let i = 1; i <= 10; i++) {
        result.push(numero*i);
    }

    return result;
    
}


// console.log(tablaMultiplicar(5));

module.exports = tablaMultiplicar;