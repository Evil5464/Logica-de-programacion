/* Dado un número mostrar la serie de fibonacci  */

function fibonacci(n){
    let fibo;
    if (n == 0){
        fibo = 0;
        return fibo;
    }
    if(n<2){
        fibo = 1;
        return fibo;
    }
    
    fibo = fibonacci(n-2) + fibonacci(n-1);
    return fibo;
}

function serieFibonacci(n){
    let serie = 'La serie completa: ';
    for (let i = 0; i < n; i++) {
        serie += fibonacci(i) + ', ';      
    }
    serie += fibonacci(n) + '\nResultado de la serie fibonnacci: ' + fibonacci(n)  ;


    console.log(serie);
}

serieFibonacci(10);