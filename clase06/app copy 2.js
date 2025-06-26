// Tipo 2 de HOF
/*
Este tipo de HOF retornan una funcion se las conoce como ("Fabrica de funciones")


*/

function crearFuncionDeSaludo(tipoDeSaludo) {
  // Reornar una funcion interna
  return function (nombre) {
    console.log(tipoDeSaludo + " " + nombre);
  };
}

const decirHola = crearFuncionDeSaludo("Hola");
const sayHello = crearFuncionDeSaludo("Hello");

console.log(decirHola);
console.log(typeof decirHola);


console.log(sayHello);
console.log(typeof sayHello);

console.log("-------- Saludos Personalizados ----------")

decirHola("Bernardo");
sayHello("Bernardo");
