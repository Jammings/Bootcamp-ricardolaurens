const peliCorta = [];
const peliMedia = [];
const peliGrande = [];
const movies = [{name: "Your Name", durationInMinutes: 130},
{name: "Pesadilla antes de navidad", durationInMinutes: 225}, 
{name: "Origen", durationInMinutes: 165}, 
{name: "El señor de los anillos", durationInMinutes: 967}, 
{name: "Solo en casa", durationInMinutes: 214}, 
{name: "El jardin de las palabras", durationInMinutes: 40}];

for (let index = 0; index < movies.length; index++) {
    const duration = movies[index];
    if (duration.durationInMinutes < 100 ){
        peliCorta.push(duration)
        console.log("Pelicula pequeña " + duration.name)
    } else if (duration.durationInMinutes >= 100 && duration.durationInMinutes < 200){
        peliMedia.push(duration)
        console.log("Pelicula mediana " + duration.name)
    } else if (duration.durationInMinutes >= 200 ){
        peliGrande.push(duration)
        console.log("Pelicula grande " + duration.name)
    }
}

console.log(peliCorta, peliMedia, peliGrande);
