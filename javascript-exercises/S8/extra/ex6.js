const characters$$ = document.querySelector("[data-function='characters']")
let jugador1;
let jugador2;

const album$$ = document.createElement("div")
album$$.classList.add('album')

document.body.appendChild(album$$)


function pintarPersonajes() {
    fetch('http://localhost:3000/characters')
      .then((res) => res.json())
      .then((characters) => {
        for (const character of characters) {
            const card$$ = document.createElement("div")
            const imagen$$ = document.createElement("img")
            const name$$ = document.createElement("h3")
            
            name$$.classList.add("name")
            card$$.classList.add("sprites")
        
            name$$.textContent = character.name
            imagen$$.setAttribute("src", character.avatar)
        
            
            card$$.appendChild(imagen$$)
            card$$.appendChild(name$$)
            album$$.appendChild(card$$)

            imagen$$.addEventListener("click", () => { choiseChracter(character) })
            characters$$.appendChild(card$$)
        }
              });
          }






          pintarPersonajes()

