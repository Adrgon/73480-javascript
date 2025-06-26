const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

const carrito = [
    {nombre: "Camisa", precio: 50, cantidad: 2}, 
    {nombre: "Pantalón", precio: 80, cantidad: 10}, 
    {nombre: "Zapatos", precio: 120, cantidad: 5}
];

/* 
function existe(mes){
    if(mes === 'Diciembre'){
        console.log("El mes de diciembre existe")
    }
} 
    */

/* meses.forEach(function(mes) {
  if (mes === "Enero") {
    console.log("El mes de enero existe");
  }
}
); */


/* meses.forEach( mes => {
  if (mes === "Enero") {
    console.log("El mes de enero existe");
  }
}); */

/* const resultado = meses.includes('Diciembre')
console.log(resultado) */

const existe = meses.some( mes => mes === 'Agosto')
console.log(existe);

const existeDia = dias.some( dia => dia === 'Domingo')

const existeCarrito = carrito.some( item => item.cantidad > 10 )
console.log(existeCarrito);
