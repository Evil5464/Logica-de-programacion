//Encontrar el número de coincidencias de una palabra en una frase
//Se envían como parametros de una funcion la frase y la palabra
let frase = "Hola soy una palabra en una frase, PALABRA";
let busqueda = "palabra";
let result  = coincidencias(frase, busqueda);

function coincidencias(frase, palabra) {
  let arr;
  let cont = 0;

  frase = frase.toLowerCase();
  frase = frase.replace(",", "");
//   console.log(frase);
  arr = frase.match(/[a-zA-Z]+/g);
//   console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == palabra) {
      cont++;
    }
  }
  return cont;
}

console.log(result);

