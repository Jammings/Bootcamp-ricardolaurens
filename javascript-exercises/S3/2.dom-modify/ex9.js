const agregar=document.querySelectorAll('.fn-insert-here');
for (const agregando of agregar) {
    const txt = document.createElement('p')
    txt.textContent = 'Voy dentro!';
    agregando.appendChild(txt)
    
}

