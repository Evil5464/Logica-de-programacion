const tablaMultiplicar = require('./Ejercicio_01');

test("Comprueba la tabla del 2", ()=>{
    expect(tablaMultiplicar(2)).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
});
test("Comprueba la tabla del 5", ()=>{
    expect(tablaMultiplicar(5)).toEqual([5, 10, 15, 20 , 25, 30, 35, 40, 45, 50]);
});
test("Comprueba la tabla del 7", ()=>{
    expect(tablaMultiplicar(7)).toEqual([7, 14, 21, 28, 35, 42, 49, 56, 63, 70]);
});

