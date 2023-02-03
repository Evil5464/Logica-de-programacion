/* Dado un objeto, comprobar si existe una propiedad en concreto */

let persona = {
    nombre: "Juan",
    apellido: "Lopez",
    tel: 513123123123,
};



function existePropiedad(objeto, propiedad) {
    if(!objeto[propiedad]){
        return false;
    }else{
        return true;
    }
}


console.log(existePropiedad(persona, 'tel'));
