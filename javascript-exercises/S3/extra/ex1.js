const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul$$ = document.createElement('ul')

for (let i = 0; i < countries.length; i++){
    let social = countries[i]
    const li$$ = document.createElement('li')
    li$$.textContent = social
    ul$$.appendChild(li$$)

}
console.log(ul$$)
document.body.appendChild(ul$$)
