
function SuperHeroe(nombre, poder, alterEgo) {
    this.nombre = nombre;
    this.poder = poder;
    this.alterEgo = alterEgo;

    this.atacar = function() {
        console.log(this.alterEgo + " ataca con " + this.poder);
    }
}



for(let i=0; i<3; i+=1) {
    let nombre = prompt("Ingrese el nombre del superhéroe:");
    let poder = prompt("Ingrese el poder del superhéroe:");
    let alterEgo = prompt("Ingrese el alter ego del superhéroe:");
    const heroe = new SuperHeroe(nombre, poder, alterEgo);
    console.log(heroe.atacar());
}
