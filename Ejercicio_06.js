//Dibujar un cuadrado hueco con asteriscos

function dibujaCuadrado(n) {
  if (n == 1) {
    return "*";
  }

  let result = "";
  for (let i = 0; i < n; i++) {
    result += "*";
  }

  for (let j = 1; j < n - 1; j++) {
    result += "\n*";
    for (let i = 1; i < n - 1; i++) {
      result += " ";
    }
    result += "*";
  }
  result += "\n";
  for (let i = 0; i < n; i++) {
    result += "*";
  }
  return result;
}

console.log(dibujaCuadrado(7));
