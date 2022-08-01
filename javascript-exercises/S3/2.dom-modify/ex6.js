const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul$$ = document.createElement('ul')

for (let i = 0; i < apps.length; i++){
    let social = apps[i]
    const li$$ = document.createElement('li')
    li$$.textContent = social
    ul$$.appendChild(li$$)

}
console.log(ul$$)
document.body.appendChild(ul$$)
