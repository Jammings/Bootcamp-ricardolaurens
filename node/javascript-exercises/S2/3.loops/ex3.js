const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];


for (let index = 0; index < placesToTravel.length; index++) {
  const travel = placesToTravel[index];
  if (travel.id === 11 || travel.id === 40){
  }
      travel.id = placesToTravel.splice(index, 1)
}
console.log(placesToTravel);



