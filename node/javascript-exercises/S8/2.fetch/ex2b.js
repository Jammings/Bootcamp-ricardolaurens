const baseUrl = 'https://api.nationalize.io';

const input$$ =document.querySelector('input')
const button$$ =document.querySelector('button')


function search(){
    
    
    fetch(`https://api.nationalize.io?name=${input$$.value}`)
.then((res) => res.json())
.then(data => {
crearTexto(data)
});

}

const crearTexto = (data) => {
    for (const country of data.country) {
        let p$ = document.createElement('p');
        const porciento = Math.floor(country.probability * 100)
        p$.textContent = `El nombre ${data.name} un ${porciento} porciento de ser de ${country.country_id}`;
        document.body.appendChild(p$);

}
}
button$$.addEventListener("click", search)