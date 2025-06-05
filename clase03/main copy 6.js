let res;
//res = alert("hola")
//console.log(res)
//res = prompt("ingresar usuario")
//console.log(res)

function alerta() {
    console.log("Hola desde la función alerta");
}
//res = alerta()
//console.log(res)

function ingresarDatos(dato) {
    let fusion = "Este es el dato ingresado: " + dato;
    if (dato === "fake data") {
        fusion = "Este es un dato falso";
        return fusion;
    }else {
        fusion = "Este es un dato real";
        return fusion;        
    }
    //return fusion;
    //fusion = "aca n o hay nada"
}

res = ingresarDatos("fake data")
console.log(res)
