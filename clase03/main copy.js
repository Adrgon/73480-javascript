//alert()
let semaforo = "rojo"
function crusarLaCalle() {
    console.log("Ver el semaforo")
    if(semaforo === "verde") {
        console.log("Cruzar la calle")
    }else {
        console.log("Esperar a que el semáforo esté en verde")
    }
}

crusarLaCalle()
semaforo = "verde"
crusarLaCalle()
console.log("caminamos una cuadra")
semaforo = "rojo"
crusarLaCalle()
semaforo = "verde"
crusarLaCalle()

// declaracion de la funcion
function sumar(){
    console.log(5 + 5)
}

// invocacion de la funcion
sumar()

// funcion de expresion

let restar = function() {
    console.log(10 - 5)
}


// invocacion de la funcion
restar()
