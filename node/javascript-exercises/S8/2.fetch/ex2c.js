const baseUrl = "https://api.nationalize.io";

const input$$ = document.querySelector("input");
const button$$ = document.querySelector("button");

function search() {
  fetch(`https://api.nationalize.io?name=${input$$.value}`)
    .then((res) => res.json())
    .then((data) => {
      crearTexto(data);
    });
}

const crearTexto = (data) => {
  for (const country of data.country) {
    let p$ = document.createElement("p");
    const porciento = Math.floor(country.probability * 100);
    p$.textContent = `El nombre ${data.name} un ${porciento} porciento de ser de ${country.country_id}`;
    document.body.appendChild(p$);

    const div$$ = document.createElement("div");
    const button$ = document.createElement("button");

    button$.innerHTML = "X";
    div$$.appendChild(button$);

    button$$.addEventListener("click", () => {delet(p$)})
    document.body.appendChild(div$$);

    };
  }
  const delet = (p$) => {
    p$.remove();

};
button$$.addEventListener("click", search);

