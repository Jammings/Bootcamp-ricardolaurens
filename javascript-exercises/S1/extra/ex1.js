const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];
for (let index = 0; index < users.length; index++) {
    const edad = users[index];
    if(edad.years < 18) {
        console.log("Usuarios menores de edad:" + edad.name)
    } else if (edad.years >= 18)
    console.log("Usuarios mayores de edad:" + edad.name)
}