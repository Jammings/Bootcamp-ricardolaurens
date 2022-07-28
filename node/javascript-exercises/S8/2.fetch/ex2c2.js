const baseUrl = "https://api.nationalize.io";

const input$$ = document.querySelector("input");
const button$$ = document.querySelector("button");

const eliminar = (p$$) => {
  p$$.remove();
}
    const pintar = (respuesta) => {
    constp$$=document.createElement("p");
    const botonEliminar$$ =document.createElement("button");
   
    botonEliminar$$.textContent="X";
   p$$.textContent =`El nombre${respuesta.name}tiene un${respuesta.country[0].probability*100}porciento de ser de${respuesta.country[0].country_id}`;
   
   botonEliminar$$.addEventListener("click",() => eliminar(p$$));
   document.body.appendChild(p$$);
   p$$.appendChild(botonEliminar$$);
}
