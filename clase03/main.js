
console.log("Goku vs Superman");

const MIN_POWER = 10;
const MAX_POWER = 30;

let energiaGoku = 100;
let energiaSuperman = 100;

let round = 0;

function calcularAtaque() {
    return parseInt(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
}

function sigueVivos(){
    return energiaGoku > 0 && energiaSuperman > 0
}

function gokuSigueVivo() {
    return energiaGoku > energiaSuperman
}

function calcularRound() {
    return round += 1;
}

while(sigueVivos()) {
    //round = round + 1;
    //round++;
    //round += 1;
    calcularRound()

  let ataqueGoku = calcularAtaque();
  let ataqueSuperman = calcularAtaque();
  console.log(ataqueGoku);
  console.log(ataqueSuperman);

  if (ataqueGoku === ataqueSuperman) {
    console.log("Ambos tienen la misma fuerza");
  } else if (ataqueSuperman > ataqueGoku) {
    console.log("Superman tiene un ataque más fuerte que Goku");
    energiaGoku = energiaGoku - ataqueSuperman;
  } else {
    console.log("Goku tiene un ataque más fuerte que Superman");
    energiaSuperman = energiaSuperman - ataqueGoku;
  }
  console.log("Round " + round);
}

if(gokuSigueVivo()){
    console.log("Goku gana la pelea");
}else {
    console.log("Superman gana la pelea");
}
