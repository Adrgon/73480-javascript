const carrito = [
  { nombre: "Camisa", precio: 50, cantidad: 2 },
  { nombre: "Pantalón", precio: 80, cantidad: 3 },
  { nombre: "Zapatos", precio: 120, cantidad: 1 },
  { nombre: "Pantalón", precio: 100, cantidad: 3 },
];

const resultado = carrito.every((item) => item.precio < 100);
console.log(resultado);

let cumple = true;
carrito.forEach( item => {
    if(item.precio > 100){
        cumple = false;
        return 
    }
})
console.log(cumple)
