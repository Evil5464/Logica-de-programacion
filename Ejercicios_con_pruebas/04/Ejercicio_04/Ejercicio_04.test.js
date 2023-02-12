const invierte_texto = require('./Ejercicio_04');

test('Texto simple para invertir',()=>{
    expect(invierte_texto('Este es un texto simple para invertir')).toEqual('ritrevni arap elpmis otxet nu se etsE');
});

test('Texto corto', ()=>{
    expect(invierte_texto('Hola')).toEqual('aloH');
});