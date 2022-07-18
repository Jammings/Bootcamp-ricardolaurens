const baseUrl = 'https://api.nationalize.io?name=';

const input$$ =document.querySelector('input')
const button$$ =document.querySelector('button')
button$$.addEventListener("click", search)

function search(){
    fetch(`https://api.nationalize.io?name=${input$$.value}`)
.then((res) => res.json())
.then((data) => {
    console.log(data);
});

}

