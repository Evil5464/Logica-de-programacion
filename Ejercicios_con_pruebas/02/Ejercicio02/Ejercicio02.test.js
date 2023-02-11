const palindromo = require('./Ejercicio02');

test('Se comprueba palindromo simple', ()=>{
    expect(palindromo('oottoo')).toBe(true);
});

test("Se comprueba palíndromo correcto con Mayúsculas y minúsculas", ()=>{
    expect(palindromo("Anita lava la tina")).toBe(true);
});

test("Se comprueba texto que no es palíndromo", ()=>{
    expect(palindromo('Toto')).toBe(false);
});
