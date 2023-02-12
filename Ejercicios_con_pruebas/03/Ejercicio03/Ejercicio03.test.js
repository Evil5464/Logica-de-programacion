const coincidencias = require('./Ejercicio03');

test('Se envía frase con palabras repetida 3 veces', ()=>{
    expect(coincidencias('Esta es una frase con algunas palabras. Algunas palabras están escritas como palabras', 'palabras')).toEqual(3); 
});

test('Se envía frase sin coincidencias de una palabra', ()=>{
    expect(coincidencias('Esta es una prueba sin coinsidencias', 'calendario')).toEqual(0);
});

test('Se envía palabra con acento', ()=>{
    expect(coincidencias('Esta es una frace con acento en tenía', 'tenía')).toEqual(1) ;
});