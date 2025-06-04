let boton = document.getElementById("botonVoz");
let speech = new SpeechSynthesisUtterance();

speech.lang = "es-ES";
speech.text = prompt("Saluda a la audiencia")


boton.addEventListener("click", function(){
    window.speechSynthesis.speak(speech)
})
