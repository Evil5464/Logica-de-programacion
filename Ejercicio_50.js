/* Dado un número devonver cuanto bucles tiene.
6 tiene un círculo
1 no tiene
8 tiene 2 círculos

123 456789
*/




let numero = 28861;

function bucles(numero){
    let result = 0;
    let texto = numero.toString();
    // console.log(texto);
    for (let i = 0; i < texto.length; i++) {
        console.log(texto[i]);
        switch(texto[i]){

            
            case '1': case'2': case'3': case'5': case '7':
                break;
            case '4': case'6': case '9':
                result++;
                break;
            case '8':
                result = result + 2;
                break
            default:
                break;
        } 
    }
    console.log(result);

}

bucles(numero);
