let sumTotal = 0
const products = [
  { name: "Gorra de rodilla", sellCount: 10 },
  { name: "Pantalón de pana", sellCount: 302 },
  { name: "Reloj de papel albal", sellCount: 23 },
  { name: "Inpar de zapatos", sellCount: 6 },
];

for (let index = 0; index < products.length; index++) {
  const product = products[index];
  sumTotal+=product.sellCount;
  }

  console.log(sumTotal);

