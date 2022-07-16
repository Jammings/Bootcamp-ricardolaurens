const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const key in alien) {
    console.log("Mi alienigena tiene la llave: " + key + "con el valor: " + alien[key]);
}
