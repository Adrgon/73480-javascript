const carrito = [
  { nombre: "Camisa", precio: 50, cantidad: 2 },
  { nombre: "Pantalón", precio: 80, cantidad: 3 },
  { nombre: "Zapatos", precio: 120, cantidad: 1 },
  { nombre: "Pantalón", precio: 100, cantidad: 3 },
];

const carritoConImpuesto = carrito.map( item => ({
        nombre: item.nombre,
        precio: item.precio,
        cantidad: item.cantidad,
        conImpuesto: (item.precio * item.cantidad)*1.21
    }))
    console.log(carrito);
    console.log(carritoConImpuesto)

/* function saludar(nombre){
    return {
        nombre: nombre
    }
} */

/* const saludar = (nombre) =>  ({ nombre: nombre });
    

const obj = saludar("Adrian")
console.log(obj) */
