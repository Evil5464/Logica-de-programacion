/* Dado un array de alumnos (monbre y nota) mostrar cuantos está reprobados y aprobados*/

let arr = [
    ["Juan Pérez", 10],
    ["Angélica Garza", 8],
    ["Guillermo Cruz", 6],
    ["Jaime Herrera", 4],
    ["Eduardo Giménez", 0],
];

function aprobadosReprobados() {
    let aprobados = [];
    let reprobados = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i][1]>=6){
            aprobados.push(arr[i]);
        }
        if(arr[i][1]<6){
            reprobados.push(arr[i]);
        }
    }
    
    console.log('Los alumnos aprobados son:');
    console.log(aprobados);
    console.log('Los alumnos reprobados son:');
    console.log(reprobados);
}


aprobadosReprobados(arr);
