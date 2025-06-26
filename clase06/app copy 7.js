const carrito = [
  { nombre: "Camisa", precio: 50, cantidad: 2 },
  { nombre: "Pantalón", precio: 80, cantidad: 3 },
  { nombre: "Zapatos", precio: 120, cantidad: 1 },
  { nombre: "Pantalón", precio: 100, cantidad: 3 },
];

const resultado = carrito.find((item) => item.nombre === "Pantalón");
console.log(resultado);

const resultado1 = carrito.filter((item) => item.nombre === "Pantalón");
console.log(resultado1);

/* let res = ''
carrito.forEach((item, index) => {
    if(item.nombre === 'Pantalón'){
        res = carrito[index];
    }
})

console.log(res) */
