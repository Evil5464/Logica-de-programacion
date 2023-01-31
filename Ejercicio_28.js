/* Dado un número regresar el factorial */

function factorial(n) {
    let fact = 1;

    if (n < 1) {
        fact = 1;
    } else {
        for (let i = 1; i <= n; i++) {
            fact *= i;
            // console.log(fact);
        }
    }

    return `factoria (${n}) = ${fact} `;
}

console.log(factorial(5));
