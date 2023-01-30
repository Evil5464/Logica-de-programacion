/* Dado un número, mostrar los números de 1 hasta número pero
para los múltiplos de tres imprimir 'buzz' en lugar del número
y para los multiplos de cinco imprimir 'Lightyear' y 
para los multiplos de tres y cinco imprimir 'BuzzLightyear'  */


function BuzzLightyear(n){
    for (let i = 1; i <= n; i++) {
        
        if(i%15 == 0){
            console.log('BuzzLightyear');
        }else{
            if(i%5 == 0){
                console.log('Lightyear');
            }
            if(i%3 == 0){
                console.log('Buzz');
            }
            if(i%5 != 0 && i%3 != 0){
                console.log(i);
            }
        }
        
    }

}

BuzzLightyear(100);
