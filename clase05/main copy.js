//alert()

/* const cliente = {
    nonmbre: "Alan", 
    saldo: 50000
}

console.log(cliente)

const cliente1 = {
  nonmbre: "Miguel",
  saldo: 5000,
}; 

console.log(cliente1)

*/

function Cliente(n, s) {
    this.nombre = n;
    this.saldo = s;
}

const cliente1 = new Cliente("Alan", 50000);
const cliente2 = new Cliente("Miguel", 5000);
console.log(cliente1);
console.log(cliente2)


console.log(cliente1.nombre)
cliente1.saldo = 100000;
console.log(cliente1);
