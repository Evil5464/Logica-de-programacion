// Dado una cadena de texto devolver el más usado

let texto = 'Dabale arroz a la zorra el abad';

function maxCaracter(texto){
    let textolimpio = texto.toLowerCase()
                        .replace(new RegExp(' ', 'gi'), '');
    // console.log(textolimpio);
    let map = {};

    for (const caracter of textolimpio) {
        if(!map[caracter]){
            map[caracter] = 1;
        }else{
            map[caracter]++; 
        }
    }

    console.log(map);

    let caracterMax = '';
    let valorMax = 0;
    for (const caracter in map) {
        if(map[caracter] > valorMax){
            valorMax = map[caracter];
            caracterMax = caracter;
        }
    }

    return `El caracter mas veces repetido es ${caracterMax}, con ${valorMax} repeticiones`;
}

console.log(maxCaracter(texto));