
class Cliente { // El nombre de una clase debe comenzar con mayusculas... CLASS DECLARATION

    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
        this.activo = false;
    }
    agregarSaldo(cantidad) {
        if(this.activo) {
            this.saldo = this.saldo + cantidad
        }
        console.log("Saldo actualizado de : " + this.nombre + " es "+ this.saldo);
    }
}

const jose = new Cliente("Jose", 1000); // Instancia de la clase Cliente
const maria = new Cliente("Maria", 2000); // Instancia de la clase Cliente
const juan = new Cliente("Juan", 3000); // Instancia de la clase Cliente
console.log(jose)
console.log(maria)
console.log(juan)

maria.activo = !maria.activo
console.log(maria)
jose.agregarSaldo(3000)
maria.agregarSaldo(2000)
