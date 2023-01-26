//Dado un número, mostrar una escalera con escalones de "[-] usando el número para los niveles de la escalera"

/*

[-] 
[-][-] 
[-][-][-] 
[-][-][-][-] 
[-][-][-][-][-] 
[-][-][-][-][-][-] 
[-][-][-][-][-][-][-] 
[-][-][-][-][-][-][-][-] 
[-][-][-][-][-][-][-][-][-]  

*/

function escalera(n){

    
    let impresion = '';
    
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            impresion += '[-]';
        }
        impresion += '\n';
    }
    return impresion;
}

console.log(escalera(10));
