const carrito = [
    {nombre: "Camisa", precio: 50, cantidad: 2}, 
    {nombre: "Pantalón", precio: 80, cantidad: 3}, 
    {nombre: "Zapatos", precio: 120, cantidad: 1}
];

const resultado = carrito.reduce((total, item) => total + (item.precio* item.cantidad), 60)
console.log(resultado)

let total = 60;
carrito.forEach( item => total += item.precio * item.cantidad)
console.log(total)
