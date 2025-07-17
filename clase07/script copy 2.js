document.addEventListener("DOMContentLoaded", ()=>{

    const dynamicText = document.getElementById("dynamic-text");
    const contentArea = document.querySelector("#content-area");
    //const myButton = document.getElementsByClassName("myButton");
    //const myButton = document.querySelectorAll(".myButton");
    const myButton = document.querySelector("#myButton");
    const buttonValueSpan = document.getElementById("button-value");
    const styledBox = document.querySelector("#styled-box");
    const myInput = document.getElementById("myInput");
    //console.log(myButton)



    const compras = ["Manzanas", "Leche", "Panm"];
    let item1 = "Manzanas";
    let item2 = "Banana";
    let item3 = "Pera";

    console.log(dynamicText);
    console.log(contentArea);
    console.log(dynamicText.textContent);
    dynamicText.textContent =
      "!Hola desde JavaScript! Este es un texto que fue agregado dinamicamente";
    contentArea.innerHTML = `
    <h2>Lista de Compras</h2>
        <ul>
            <li>${item1}</li>
            <li>${item2}</li>
            <li>${item3}</li>
        </ul>
    `;


/*     myButton.addEventListener("click", ()=>{
        console.log("click en el boton");
        alert("click en el boton")
        dynamicText.textContent = "Este boton fue clieckeado"
        const buttonText = myButton.textContent;
        buttonValueSpan.textContent = buttonText;
    }) */

/*     styledBox.addEventListener('mouseover', ()=>{
        styledBox.style.backgroundColor = "#dc3545";
        styledBox.style.transform = "scale(1.1)";
        styledBox.textContent = "¡Estoy rojo!";
    })
    styledBox.addEventListener('mouseout', ()=>{
        styledBox.style.backgroundColor = "#28a745";
        styledBox.style.transform = "scale(1)";
        styledBox.textContent = "Pasa el ratón por aquí";
    }) */

        styledBox.addEventListener("mouseover", (evt) => {
            styledBox.classList.add("highlight");
            styledBox.textContent = "Estoy resaltado"
            console.log(evt.type)
        });
        styledBox.addEventListener("mouseout", () => {
            styledBox.classList.remove("highlight");
            styledBox.textContent = "Pasa el ratón por aquí";

        });

/*         myInput.addEventListener("change", ()=>{
            alert("El valor delinput ha cambiado " + myInput.value);
        }) */

        myInput.addEventListener('input', ()=>{
            buttonValueSpan.textContent = myInput.value;
        })

        myButton.addEventListener('click', (evt)=>{
            console.log(evt);
            console.log(evt.target);
            console.log(evt.type)
        })

        


});
