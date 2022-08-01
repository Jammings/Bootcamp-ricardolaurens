const baseUrl = `https://pokeapi.co/api/v2/pokemon/`;
const baseUrlV2 = 'https://pokeapi.co/api/v2/pokemon/pikachu/'



/* function printQuestions() {
  fetch(baseUrlV2)
    .then((res) => res.json())
    .then((pokemons) => {     
      console.log(pokemons.sprites)


        const imagen$ = document.createElement("img");
        const name$ = document.createElement("h3");
        
          imagen$.innerHTML = pokemons.sprites.front_default;
          imagen$.setAttribute("src", pokemons.sprites.front_default);
          name$.innerHTML = pokemons.name;

          document.body.appendChild(imagen$)
          document.body.appendChild(name$)
        }  
      

)};
printQuestions() */



/* function printQuestions2() {
  fetch(baseUrl)
    .then((res) => res.json())
    .then((datos) => {     
      pintar(datos)
      console.log(datos.results)
    });
  };

  const pintar = (pokemons) => { 
    for (const pokemon of pokemons){

        
      

    const imagen$ = document.createElement("img");

  
    imagen$.innerHTML = sprites.front_default;
    imagen$.setAttribute("src", sprites.front_default);

    document.body.appendChild(imagen$)
  }
  }
 */
/*       printQuestions2() */

/*       async function pintarPokemon() {
        const pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${id}/`
        );
        const pokemons = await pokemon.json();
        pintar(pokemons);
        page++;
        }
      *
        pintarPokemon()
 */

/*         document.addEventListener('DOMContentLoaded', ()=>{
          const random = getRandomInt(1,151)
          fetchData(random)
      })
      const getRandomInt = (min,max)=>{
          return Math.floor(Math.random() * (max-min))+min;
      } */
      
      let id = 1;
      const fetchData = async()=>{

              const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
              const data = await res.json()
              console.log(data)
              pintarCard(data)
              id++;
            } 

            const pintarCard = (pokemon) => {
              console.log(pokemon)
              for (const poke of Object.keys(pokemon)) {             
              const imagen$$ = document.createElement("img")
              const name$$ = document.createElement("h3")
              name$$.textContent = pokemon.name
              imagen$$.setAttribute("src", pokemon.sprites.front_default)
              document.body.appendChild(imagen$$)
              document.body.appendChild(name$$)
              
            }
          }
            
          pintarCard(2*2)
            fetchData()
  
  
  
  
  
/*             for (const poke of Object.keys(pintarCard + id++)) {     */
  
  
  
            /*        for (const fetch of data) {
              const imagen$$ = document.createElement("img")
              imagen$$.setAttribute("src", fetch.sprites.front_default)
              document.body.appendChild(imagen$$)
            } */