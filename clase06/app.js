
let marca = prompt("Ingrese la marca del auto que desea filtrar:");
let year = parseInt(prompt("Ingrese el año del auto que desea filtrar:"));
let minimo = parseInt(
  prompt("Ingrese el precio mínimo del auto que desea filtrar:")
);
let maximo = parseInt(prompt("Ingrese el precio maximo del auto que desea filtrar:"));

const datosBusqueda = {
    marca: marca,
    year: year,
    minimo: minimo,
    maximo: maximo,
    puertas: 4,
}



function mostrarAutos(cars){
    cars.forEach( auto => {
        console.log(auto.marca + " - " + auto.modelo + " - " + auto.year + " - $" + auto.precio + " - " + auto.puertas + " puertas - " + auto.color + " - " + auto.transmision); 
        document.body.innerHTML += `<p>${auto.marca} - ${auto.modelo} - ${auto.year} - $${auto.precio} - ${auto.puertas} puertas </p>`;    
    })
}

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca
    }
    return auto
}

function filtrarYear(auto){
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year
    }else {
        return auto
    }
}

function filtrarMinimo(auto) {
  if (datosBusqueda.minimo) {
    return auto.precio >= datosBusqueda.minimo;
  } else {
    return auto;
  }
}

function filtrarMaximo(auto) {
  if (datosBusqueda.maximo) {
    return auto.precio <= datosBusqueda.maximo;
  } else {
    return auto;
  }
}

function filtrarPuertas(auto) {
  if (datosBusqueda.puertas) {
    return auto.puertas >= datosBusqueda.puertas;
  } else {
    return auto;
  }
}


function filtrarAutos(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas)
    if(resultado.length > 0){
        mostrarAutos(resultado)
    }else {
        console.error("No se encontraron autos de la marca " + marca);
    }
}




filtrarAutos()
//mostrarAutos(autos);
