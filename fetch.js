const llamadaApi = () => {

  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((respuesta) => respuesta.json())
    .then((datos) => {
        pintar(datos)
    });

};

const pintar = (peliculas) => {

    for (const pelicula of peliculas) {

        const splashArt$$ = document.createElement("div");
        const imagen$$ = document.createElement("img");
        const titulo$$ = document.createElement("h2");
        
        imagen$$.classList.add("splashArt");
        titulo$$.classList.add("titulo");

        imagen$$.setAttribute("src", pelicula.image);
        titulo$$.textContent = pelicula.original_title;

        splashArt$$.appendChild(titulo$$);
        splashArt$$.appendChild(imagen$$);
        document.body.appendChild(splashArt$$);

    }

}

llamadaApi();