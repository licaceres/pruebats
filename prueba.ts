let pi = 3.14159;
let tau = pi * 2;
console.log('[Ejercicio 1.1]', `${tau} es ${pi} veces el dos.`);

var torta: string;
torta = 'arandanos';
console.log('[Ejercicio 1.2]', `Me gusta comer torta con sabor a ${torta}.`);

let esPablo: boolean = true;
console.log('[Ejercicio 1.3]', `${esPablo ? 'Oh, hola Pablo' : 'Quien sos vos?'}`);

const entero: number = 6;
const decimal: number = 6.66;
const hexadecimal: number = 0xf00d;
const binario: number = 0b1010011010;
const octal = 0o744;
const ceroNegativo: number = -0;
const enRealiadadNumero: number = NaN;
const mayorNumero: number = Number.MAX_VALUE;
const elNumeroMasGrande: number = Infinity;

const miembros: any[] = [
    entero,
    decimal,
    hexadecimal,
    binario,
    octal,
    ceroNegativo,
    enRealiadadNumero,
    mayorNumero,
    elNumeroMasGrande
    ];

    miembros[0] = '12345';
    console.log('[Ejercicio 1.4]', miembros);

const secuencia = Array.from(Array(10).keys());
const animales:Array<string> = ['pinguino', 'oso hormiguero', 'zorro', 'jirafa'];
const cadenasYNumeros:Array<(number | string)> = [1, 'uno', 2, 'dos', 3, 'tres'];
const todosMisArreglos:Array<(number[] | string[] | (number | string)[])> = [secuencia, animales, cadenasYNumeros];

console.log('Ejercicio 1.5', todosMisArreglos);


//Ejercicio 1.6
const elementoInventario:[string, number] = ['tuerca', 11];

// despues lo desestructuramos
const [nombre, cantidad] = elementoInventario;
const mensaje = agregarInventario(nombre, cantidad);

console.log('[Ejercicio 1.6]', mensaje);

function agregarInventario(nombre: string, cantidad: number): string {
return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
}



function agregarAlCarro(item: { id: number, titulo: string, idVariante: number }) {
    console.log('[Ejercicio 2.1]', `Agregando "${item.titulo}" al carro de compras.`);
}

agregarAlCarro({ id: 1, titulo: 'Zapatos de cuero', idVariante: 2});