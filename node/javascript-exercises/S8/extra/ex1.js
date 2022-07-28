fetch('https://breakingbadapi.com/api/characters')
.then((res) => res.json())
.then(data => {personajes(data)
    console.log(data)
});

const personajes = (data) => {
   for (const dato of data) {
   const image$$ = document.createElement('image')
   image$$.innerHTML =`${dato.name} + <img src=${dato.img}/>`;
   image$$.style.display="flex";
   image$$.style.margin = "auto";
   image$$.style.width="300px";
   image$$.style.height="200px" 
   document.body.appendChild(image$$);
}

}

