/* Usa un bucle para sumar el total de las ventas (sellCount) de todos 
los productos y mostrar por consola la media de ventas. */

let ventas = 0
const products = [
  { name: "Gorra de rodilla", sellCount: 10 },
  { name: "Pantalón de pana", sellCount: 302 },
  { name: "Reloj de papel albal", sellCount: 23 },
  { name: "Inpar de zapatos", sellCount: 6 },
];

for (let index = 0; index < products.length; index++) {
  const product = products[index];
  ventas += product.sellCount;
  }
  let promedio=ventas/products.length;
  console.log("La media de ventas es " + promedio);  //~8.28
