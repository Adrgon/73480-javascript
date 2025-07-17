//alert()


/* for(let i=0; i<10000000000; i+=1){
    console.log(i)
}

console.log("siguiente") */

console.log("inicio")
setTimeout(()=>{
    console.log("Funcion asincronica")
},0)

console.log("fin")

let intevalo = setInterval(()=>{
},3000)

clearInterval(intervalo);
