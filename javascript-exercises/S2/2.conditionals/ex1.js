const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Abel Cabeza", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

for (const iterator of alumns) {
  let contador = 0;
  if (iterator.T1 === true) {
    contador++;
  }

  if (iterator.T2 === true) {
    contador++;
  }

  if (iterator.T3 === true) {
    contador++;
  }
  console.log(contador);
  if (contador >= 2) {
    iterator.IsApproved = true;
  } else {
    iterator.IsApproved = false;
  }
}

console.log(alumns);
