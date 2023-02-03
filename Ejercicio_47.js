/* Dado un array de objetos devolver cuales 
son los númros de la aficiones */

let usuarios = [
    { nombre: "Abel", aficion: ["videojuegos", "cine"] },
    { nombre: "Jorge", aficion: ["cine", "informatica"] },
    { nombre: "Verónica", aficion: ["informatica", "futbol", "tenis"] },
    { nombre: "Pablo", aficion: ["boliche", "informatica"] },
    { nombre: "Pedro", aficion: ["boliche", "cine", "tenis"] },
    { nombre: "Juan", aficion: ["informatica", "cine"] },
    { nombre: "Victor", aficion: ["informatica", "videojuegos"] },
    { nombre: "Sandra", aficion: ["cine", "tenis"] },
    { nombre: "José", aficion: ["cine", "informatica", "surf"] },
];

function aficiones(usuarios) {
    let mapa = {};
    
    for (const usuario of usuarios) {
  
  
        for (let i = 0; i < usuario.aficion.length; i++) {
            if(!mapa[usuario.aficion[i]]){
                mapa[usuario.aficion[i]] = 1;
            }
            else{
                mapa[usuario.aficion[i]]++;
            }
        }
    }

    return mapa;
}

console.log(aficiones(usuarios));
