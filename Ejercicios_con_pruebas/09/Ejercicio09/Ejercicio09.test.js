//Dados dos arrays, devolver un array con los elementos comunes entre ambos

const comunes = require('./Ejercicio09');

test('Se encuentran coincidencias comunes', ()=>{
    expect(comunes([2,3,5,6,7,2,9,2,1], [5,3,7,3,7,56,8,4,2])).toEqual([2,3,5,7]);
})

test('No hay elementos comunes', ()=>{
    expect(comunes([1,2,3,4,5], [6,7,8,9,0])).toEqual([]);
});

test('Todos los elementos estan en ambos',()=>{
    expect(comunes([1,2,3,4,5], [1,2,3,4,5])).toEqual([1,2,3,4,5]);
});
