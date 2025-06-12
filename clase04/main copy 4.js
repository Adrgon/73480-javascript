const producto1 = {
    nombre: "Jean",
    precio: 45000,
    descripcion: "Jean de mezclilla azul",
}
const producto2 = {
    nombre: "Camisa",
    precio: 25000,
    descripcion: "Camisa de algodón blanca",
}

const carrito = [];
producto2.cantidad = 3
carrito.push(producto2)
producto1.cantidad = 2
carrito.push(producto1)

let total = (producto2.precio * producto2.cantidad) + (producto1.precio * producto1.cantidad)
console.table(carrito)
console.log("Debe abonar $" + total)
