/* Basandote en el siguiente html, añade un evento 'focus' que ejecute un 
console.log con el valor del input. */


function foco (focus) {
    console.log(event.target.value);
}




const box$$ =document.createElement("imput");
box$$.setAttribute("id","focus");
box$$.classList.add("focus")


box$$.addEventListener("focus",foco);
document.body.appendChild(box$$)
