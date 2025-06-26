//alert()
function saludar(nombre) {
  console.log("Hola " + nombre);
}

//saludar("Mundo");

function ejecutarAccion(callback) {
  console.log("Preparando para ejecutar la accion...");
  // Llamamos a la funcion que le pasaan como argumento
  callback("Bernardo");
  console.log("Accion finalizada");
}

ejecutarAccion(saludar);

// ejecutarAccion es una funcion que recibe otra funcion como argumento.
