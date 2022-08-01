/* Usa un bucle para recorrer el array de peliculas (`movies`) y añade 
al array `goodProducts` los que tengan más de 20 ventas (`sellCount`) y 
al array `badProducts` los que tengan menos. */

const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Gorra de rodilla", sellCount: 10 },
  { name: "Pantalón de pana", sellCount: 302 },
  { name: "Reloj de papel albal", sellCount: 23 },
  { name: "Inpar de zapatos", sellCount: 6 },
];


for (let index = 0; index < products.length; index++) {
    const pelis = products[index];
    if (pelis.sellCount > 20 ){
        goodProducts.push(pelis)
        console.log("Movies mas vendidas " + pelis.name)
    } else if (pelis.sellCount < 20 ){
        badProducts.push(pelis)
        console.log("Movies menos vendidas " + pelis.name)
    }
}

console.log(goodProducts, badProducts);