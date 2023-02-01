/* Dados dos número regresar las operaciones básicas entre ellos*/

function calculadora(a, b) {
    let result = `La suma es: ${a + b}
la resta es: ${a - b}
la multiplicación es: ${a * b}
la division es ${a / b}`;

    return result;
}

console.log(calculadora(5, 5));
