const baseUrl = "https://pokeapi.co/api/v2/pokemon/"

const change$$ = document.querySelector('[class="change-shiny"]')

function searchPokemon(id) {
  fetch(baseUrl + id)
    .then((res) => res.json())
    .then((data) => pintarPokemon(data));
}
function contarPokemon(quantity) {
  for (let i = 1; i <= quantity; i++) {
    searchPokemon(i);
  }
}

const album$$ = document.createElement("div")

album$$.classList.add('album')

document.body.appendChild(album$$)



function pintarPokemon (pokemon) {
    const card$$ = document.createElement("div")
    const imagen$$ = document.createElement("img")
    const name$$ = document.createElement("h3")
    
    name$$.classList.add("name")
    card$$.classList.add("sprites")

    name$$.textContent = pokemon.name
    imagen$$.setAttribute("src", pokemon.sprites.other.home.front_default)

    
    card$$.appendChild(imagen$$)
    card$$.appendChild(name$$)
    album$$.appendChild(card$$)
  
  }
contarPokemon(151);
