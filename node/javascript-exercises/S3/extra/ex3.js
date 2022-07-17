const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const ul$$ = document.createElement('ul')
const printHere$$ = document.querySelector('[data-function="printHere"]');

for (let i = 0; i < cars.length; i++){
    let social = cars[i]
    const li$$ = document.createElement('li')
    li$$.textContent = social
    ul$$.appendChild(li$$)

}
console.log(ul$$)
document.body.appendChild(ul$$)


