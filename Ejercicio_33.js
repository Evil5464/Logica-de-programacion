/* Haz un reloj que en tiempo real vaya mostrando la hora usa el objeto date pero solo por primera vez*/

let horaAux = new Date();
let horas = horaAux.getHours();
let minutos = horaAux.getMinutes();
let segundos = horaAux.getSeconds();

console.log(horas);
console.log(minutos);
console.log(segundos);


function reloj(horas, minutos, segundos){

    
    setInterval(() => {
        segundos++;
        if (segundos % 60 == 0) {
            segundos = 0;
            minutos++;
        }
        if (minutos % 60 == 0) {
            minutos = 0;
            horas++;
        }
        if (horas % 24 == 0) {
            horas = 0;
        }
        console.log(horas + " : " + minutos + " : " + segundos);
    }, 1000);
    
}

reloj(horas, minutos, segundos);