const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
for (let index = 0; index < products.length; index++) {
    const shirt = products[index];
    if (shirt.includes('Camiseta')) {
        console.log(shirt);
    }
}
