function saludar (evento) {
    console.log("informacion del evento" + JSON.stringify(evento));
}




const boton$$ =document.createElement("button");
boton$$.textContent = "Boton"
boton$$.setAttribute("id","btnToClick");
boton$$.classList.add("btnToClick")


boton$$.addEventListener("click",saludar);
document.body.appendChild(boton$$)

