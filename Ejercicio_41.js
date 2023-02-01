/* Dado nun número mostrar un triángulo de asteriscos con ese número de filas


n = 4

i   --espacios j-- --caracteres * k--- 
0       3                   1
1       2                   3
2       1                   5
3       0                   7
   *
  ***
 *****
*******

 */

function triangulo(n) {
    let result = "";
    let k = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            result += " ";
        }
        for (let w = 0; w < k; w++) {
            result += "*";
        }
        k += 2;
        result += "\n";
    }

    return result;
}

console.log(triangulo(4));
