const JSON_FILE = "./data.json"

function createCharacterCard(character) {
  return `
        <div class="character-card">
            <img class="character-image" 
                 src="${
                   character.image ||
                   "https://img.freepik.com/foto-gratis/silueta-retrato-clasico-hombre_23-2149706985.jpg?semt=ais_hybrid&w=740"
                 }" 
                 alt="${character.name}">
            <h3 class="character-name">${character.name}</h3>
            <div class="character-info">
                ${
                  character.race
                    ? `<div class="info-item"><span class="info-label">Raza:</span><span class="info-value race-tag">${character.race}</span></div>`
                    : ""
                }
                ${
                  character.gender
                    ? `<div class="info-item"><span class="info-label">Género:</span><span class="info-value gender-tag">${character.gender}</span></div>`
                    : ""
                }
            </div>
        </div>
    `;
}



function loadCharacters(){
    const error = document.getElementById("error-message");
    const container = document.querySelector("#characters-container");

    error.style.display = "none";
    container.style.display = "block"

    fetch(JSON_FILE)
        .then((res)=>{
            if (!res.ok) {
                throw new Error("Error " + res.status);
            }
            console.log("Respuesta cruda", res)
            return res.json()
        })
        .then((data)=>{
            const characters = data.items 
            console.log(characters)
            container.innerHTML = characters.map(character => createCharacterCard(character))
        })
        .catch((err)=> {
            console.error("Estoy aca ", err)
            error.style.display = "block";
            container.style.display = "none";
            document.getElementById("error-text").textContent = err.message;
        })

}



document.addEventListener("DOMContentLoaded", loadCharacters);
