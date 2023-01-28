/* Dado un númro mostrar todos los numero desde ese al cero de 8 en 8 
en una lista con guines donde cada número tiene que empezar con nº.


--- Del 100 al 0 ---
-nº 100
-nº 92
-nº 84
-nº 76
.
.
.
 */

function listaNumeros(n){
    let lista = '--- Del '+ n + ' al 0 ---\n';
    for (let i = n; i >= 0; i-=8) {
            lista += '-nº '+ i + '\n';        
    }
    lista += '--- FIN ---';
    return lista;
}

console.log(listaNumeros(100));
