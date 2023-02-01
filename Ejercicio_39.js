/* Dado un texto comprobar que sea un email valido */

let email = 'este.es@uncorreo.com';

console.log(email.match(/^[a-z0-9._]+[@][a-z0-9_]+[.][a-z0-9]+$/g));


function comprovarEmail(email){
    comprovacion = false;

    if(email.match(/^[a-z0-9._]+[@][a-z0-9]+[.][a-z0-9]+$/g)){
        comprovacion = true;
    }


    return comprovacion;

}


console.log(comprovarEmail(email));