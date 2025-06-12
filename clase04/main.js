const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        peso: "1kg",
        medida: "1m"
    },
    categorias: ["Computadoras", "Monitores"]
}
console.log(producto.nombre)

producto.stock = 100;


console.log(producto)

/* for (let propiedad in producto){
    console.log(propiedad)
}

console.log(window) */

/* for (let propiedad in window) {
  console.log(propiedad);
} */
