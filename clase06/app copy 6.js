const carrito = [
    {nombre: "Camisa", precio: 50, cantidad: 2}, 
    {nombre: "Pantalón", precio: 80, cantidad: 3}, 
    {nombre: "Zapatos", precio: 120, cantidad: 1}
];

let res = carrito.filter(item => item.precio > 160)
let res2 = carrito.filter((item) => item.nombre === "Camisa");
let res3 = carrito.filter(item => item.nombre !== "Camisa")
console.log(res);


console.log(res2);
console.log(res3);

console.log(carrito);
