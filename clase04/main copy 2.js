
const numeros = [1,2,3,4,5,6,7,8,9]

const deTodos = ["hola", 12, true, {x:10}, ["goku", "vegeta", "trunks"], function saludar(){ console.log(saludar)}]

console.log(numeros)
console.log(deTodos)

console.table(numeros);
console.table(deTodos);

const producto = {
    nombre: "Pelota",
    precio: 300,
    disponible: true,
    datos: {
        peso: "1kg",
        medida: "1m"
    },
    mostrarInfo: function() {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);
    },
    colores: ["rojo", "azul", "verde"]
}

console.log(producto)
console.table(producto);
console.dir(producto)
 // formas de ver vienen programadas en objeto console.

 
 