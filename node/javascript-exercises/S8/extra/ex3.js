fetch('http://localhost:3000/orders')
.then((res) => res.json())
.then(productsData => {
    const product = orderProducts(productsData)
    orderDate(product)
});

const orderProducts = (productsData) => {
      return productsData.sort((a,b) => new Date(a.date) + new Date(b.date))
      }

    
 
   
