//Dados dos números encontrar cuantos números impares hay entre ellos

function cuentaImpares(a, b) {
    let result = 0;
    for (let i = a + 1; i < b; i++) {
        console.log(i);
        if (i % 2 != 0) {
            result++;
        }
    }
    return result;
}


module.exports = cuentaImpares;