/* Dado un array objetos de películas (titulo, director, vista) 
mostrar todas las películas indicando cual haz visto y cual no */

let peliculas = [
    {
        nombre: 'El señor de los anillos',
        director: 'Peter Jackson',
        vista: true
    },
    {
        nombre: 'Divergente',
        director: 'Mark Perez',
        vista: false
    },{
        nombre: 'Las moscas de la cocina',
        director: 'La mamá de mi mamá',
        vista: false
    },{
        nombre: 'Un señor en bicicleta',
        director: 'Guillermo Del Toro',
        vista: true
    },{
        nombre: 'El anillo de la novia',
        director: 'Jenifer Lopez',
        vista: true
    },
];

function getPelis(peliculas){
    for(let pelicula of peliculas){

        if(pelicula.vista == true){
            console.log(`Ya haz visto: "${pelicula.nombre}" de ${pelicula.director}`);
        }
        if(pelicula.vista == false){
            console.log(`Te falta por ver: "${pelicula.nombre}" de ${pelicula.director} `);
        }
    }

}


getPelis(peliculas);
