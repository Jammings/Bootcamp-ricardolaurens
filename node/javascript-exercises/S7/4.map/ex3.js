



const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },];

const cityTravel = cities.map(travelCities => travelCities.isVisited ? travelCities.name + ' (Visitado' : travelCities.name)
console.log(cityTravel);



