/* Dadas dos cadenas de texto, crear un algoritmo que compruebe si son anagramas entre sí */

const anagrama = require('./Ejercicio20');

test('La función está definida',()=>{
    expect(anagrama).toBeDefined();
});

test('Son anagramas', ()=>{
    expect(anagrama('ramo', 'Roma')).toBe(true);
});
test('No son anagramas', ()=>{
    expect(anagrama('Hi', 'Hola')).toBe(false);
});

