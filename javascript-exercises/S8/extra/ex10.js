let page = 1;

const leagueOfLegends = () => {
  fetch(`http://localhost:3000/characters?_page=${page}&_limit=5`)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      pintar(datos);
      page++
      buttonCargarMas();
    });
};
const album$$ = document.createElement("div")
album$$.classList.add('album')
document.body.appendChild(album$$);

const pintar = (champions) => {
  for (const champion of champions) {
    const splashArt$$ = document.createElement("div");
    const imagen$$ = document.createElement("img");
    const titulo$$ = document.createElement("h2");

    imagen$$.classList.add("splashArt");
    titulo$$.classList.add("titulo");

    imagen$$.setAttribute("src", champion.image);
    titulo$$.textContent = champion.name;

    splashArt$$.appendChild(titulo$$);
    splashArt$$.appendChild(imagen$$);
    album$$.appendChild(splashArt$$);
  }
};

function buttonCargarMas() {
  const button$$ = document.createElement("button");
  button$$.textContent = "Cargar más";
  button$$.classList.add("btn-mas");
  button$$.addEventListener("click", () => pintarChampionsMas());
  document.body.appendChild(button$$);
}

async function pintarChampionsMas() {
  const newChamp = await fetch(
    `http://localhost:3000/characters?_page=${page}&_limit=5`
  );
  const newChamps = await newChamp.json();
  pintar(newChamps);
  page++;
  if (page > 4) {
    document.querySelector("button").remove();
  }
}

leagueOfLegends();
