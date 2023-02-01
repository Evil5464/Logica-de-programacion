/* Dado un array o un texto devolver el elemento o palabras que mas aparecen*/
let elementos = 'hola mi nombre es hola';
console.log(typeof elementos);

function elementoDominante(elementos) {
    if (typeof elementos != "object") {
        elementos = elementos.match(/[\w]+/gi);
    }

    let mapa = {};
    for (let elemento of elementos) {
        if (!mapa[elemento]) {
            mapa[elemento] = 1;
        } else {
            mapa[elemento]++;
        }
    }
    console.log(mapa);

    let cont = 0;
    let dominante = "";

    for (const elemento of elementos) {
        if (cont < mapa[elemento]) {
            cont = mapa[elemento];
            dominante = elemento;
        }
    }
    return dominante;
}

console.log(elementoDominante(elementos));
