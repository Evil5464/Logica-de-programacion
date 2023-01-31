/* Dado un número indicar que ángulo es */

function tipoAngulo(n){
    if(n == 360){
        return 'completo';
    }
    if(n>180){
        return 'concavo';
    }
    if(n == 180){
        return 'llano'; 
    }

    if(n>90){
        return 'obtuso';
    }

    if (n == 90){
        return 'recto';
    }

    if(n<90){
        return 'agudo';
    }


}

console.log(tipoAngulo(90));