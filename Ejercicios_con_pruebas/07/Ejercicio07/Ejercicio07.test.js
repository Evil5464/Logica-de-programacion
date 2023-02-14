//Dados dos números encontrar cuantos números impares hay entre ellos

const cuentaImpares = require('./Ejercicio07');

test('dos impares',()=>{
    expect(cuentaImpares(2, 6)).toEqual(2);
});

test('5 impares', ()=>{
    expect(cuentaImpares(3,15)).toEqual(5);
});

4,5,6,7,8,9,10,11,12,13,14,15