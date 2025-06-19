//alert()
localStorage.setItem('nombre', "Juan")
localStorage.setItem('edad', 30)
localStorage.setItem('alumno', false)
localStorage.setItem('alumnos', ["Juan", "Lucas", "Philippe"])
//localStorage.setItem('objeto', JSON.stringify({nombre: "pelota", precion: 1000 }))

let nombre = localStorage.getItem('nombre')
let edad = Number(localStorage.getItem('edad'))
let alumno = (localStorage.getItem('alumno') === "true")
let alumnos = localStorage.getItem('alumnos').split(",")
let objeto = JSON.parse(localStorage.getItem('objeto'))

console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof alumno)
console.log(typeof alumnos)
console.log(typeof objeto)

console.log(nombre);
console.log(edad);
console.log(alumno);
console.log(alumnos);

console.log(objeto);

//console.log(localStorage)

//localStorage.clear()
//localStorage.removeItem("edad")
//localStorage.key(0)
