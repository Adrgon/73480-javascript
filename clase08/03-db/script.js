const API_URL = "https://dragonball-api.com/api/characters";

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
                ${
                    character.ki
                    ? `<div class="info-item"><span class="info-label">KI:</span><span class="info-value ki-tag">${character.ki}</span></div>`
                    : ""
                }
            </div>
        </div>
    `;
}



async function loadCharacters(){
    const loading = document.getElementById("loading");
    const error = document.getElementById("error-message");
    const container = document.querySelector("#characters-container");

    error.style.display = "none";
    container.style.display = "none"
    loading.style.display = 'block'

    // fetch de datos a la api
    try {
      
      await new Promise(resolve => setTimeout(resolve, 2000));

      const response = await fetch(API_URL);
      console.log(response);
      if (!response.ok) {
        throw new Error("Error " + response.status);
      }
      const data = await response.json();
      console.log(data.items);
      const characters = data.items;
      container.innerHTML = characters
        .map((character) => createCharacterCard(character))
        .join("");
        container.style.display = "block"
    } catch (err) {
      // Mostrar error
      error.style.display = "block";
      container.style.display = "none";
      document.getElementById("error-text").textContent = err.message;
    } finally {
      loading.style.display = 'none'
    }
}



document.addEventListener("DOMContentLoaded", loadCharacters);
