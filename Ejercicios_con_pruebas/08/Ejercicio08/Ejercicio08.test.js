//Dado un número entero, inviertelo y devuelve de nuevo el entero


const invertirNumero = require('./Ejercicio08');

test('Se invierte el número 123456', ()=>{
    expect(invertirNumero(123456)).toEqual(654321);
});

test('Se invierte el número 987654321', ()=>{
    expect(invertirNumero(987654321)).toEqual(123456789);
});