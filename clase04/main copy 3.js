const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

console.log(meses)
console.log(meses[0]);
console.log(meses[5]);

console.log(meses.length);

/* for (let i = 0; i < meses.length; i+=1){
    console.log("Este es el mes de: " + meses[i])
} */

meses[7] = "Agosto";

meses[meses.length] = "Septiembre";

meses.push("Octubre");


for (let i = 0; i < meses.length; i += 1) {
  console.log("Este es el mes de: " + meses[i]);
}
console.log("---------------------------")
meses.pop()
for (let i = 0; i < meses.length; i += 1) {
  console.log("Este es el mes de: " + meses[i]);
}

meses.shift();
console.log("---------------------------");
for (let i = 0; i < meses.length; i += 1) {
  console.log("Este es el mes de: " + meses[i]);
}

meses.unshift("Enero");
console.log("---------------------------");
for (let i = 0; i < meses.length; i += 1) {
  console.log("Este es el mes de: " + meses[i]);
}

meses.splice(2, 1, "Marzo Modificado");
for (let i = 0; i < meses.length; i += 1) {
  console.log("Este es el mes de: " + meses[i]);
}
