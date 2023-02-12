//Cuanto es el X porciento de Y número?

const porciento = require('./Ejercicio05');


test('50 porciento de 200', ()=>{
    expect(porciento(50, 200)).toEqual(100);
});

test('10 porciento de 500', ()=>{
    expect(porciento(10,500)).toEqual(50);
});

