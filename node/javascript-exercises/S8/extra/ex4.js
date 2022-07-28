const baseUrl = "http://localhost:3000";

const planet$$$ = document.querySelector('[data-function="planets"]');
const search$$ = document.querySelector('[data-function="search"]');
const characters$$ = document.querySelector('[data-function="characters"]');

function pintarPlanets() {
  fetch(baseUrl + "/planets")
    .then((res) => res.json())
    .then((planets) => {
      for (const planet of planets) {
        const planets$$ = document.createElement("div");
        planets$$.innerHTML = `<h2>${planet.name}</h2><img height="150" src="${planet.image}"/>`;
        planets$$.addEventListener("click", () => pintarCharacters(planet.id));
        planet$$$.appendChild(planets$$);

        function pintarCharacters(idPlanet) {
          characters$$.innerHTML = "";
          fetch(baseUrl + "/characters?idPlanet=" + idPlanet)
            .then((res) => res.json())
            .then((characters) => {
              for (const character of characters) {
                const character$$ = document.createElement("div");
                character$$.innerHTML = `<h2>${character.id}</h2><img height="150" src="${character.avatar}"/>`;

                character$$.addEventListener("click", () =>
                  characterPlanetId(planet.id)
                );
                characters$$.appendChild(character$$);
              }
            });
        }
      }
    });
}

function pintarButtons() {
  const input$$ = document.createElement("input");
  const button$$ = document.createElement("button");
  button$$.textContent = "Búsqueda";

  button$$.addEventListener("click", () => search(input$$.value));
  document.body.appendChild(input$$);
  document.body.appendChild(button$$);
}

function search(inputValue) {
  fetch(baseUrl + "/characters")
    .then((res) => res.json())
    .then((characters) => {
      for (const character of characters) {
        if (character.name.toLowerCase().includes(inputValue)) {
          characters$$.innerHTML = "";
          const character$$ = document.createElement("div");
          character$$.innerHTML = `<h2>${character.id}</h2><img height="150" src="${character.avatar}"/>`;

          character$$.addEventListener("click", () =>
            characterPlanetId(planet.id)
          );
          characters$$.appendChild(character$$);
        }
      }
    });
}

pintarButtons();
pintarPlanets();

