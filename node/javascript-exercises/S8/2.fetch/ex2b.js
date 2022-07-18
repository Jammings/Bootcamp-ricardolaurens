const baseUrl = 'https://api.nationalize.io';

const input$$ =document.querySelector('input')
const button$$ =document.querySelector('button')
button$$.addEventListener("click", search)

function search(){
    fetch(`https://api.nationalize.io=${input$$.value}`)
.then((res) => res.json())
.then((data) => {
crearTexto(data)
});

}

function crearTexto(datos){
    const p$ = document.createElement('p');
    p$.textContent = `El nombre ${datos.name} tiene un ${datos.country}`
    document.body.appendChild(p$);
}
