const baseUrl = 'https://opentdb.com/api.php?type=multiple&amount=10';

const startGame$$$ = document.querySelector('[data-function="start-game"]');
const gameBoard$$ = document.querySelector('[data-function="gameboard"]');
const input$$ = document.querySelector('[data-function="questions-number"]');

let respuestas = [];


function printQuestions() {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((preguntas) => {     
        console.log(preguntas.results)

        for (const result of preguntas.results) {
            const h4$ = document.createElement("h4") 
            h4$.innerHTML = result.question
            gameBoard$$.appendChild(h4$)
            
        }
}
)};

function printAnswerAll() {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((respuestas) => {     
        console.log(respuestas.results)

        for (const result of respuestas.results) {
            respuestas.incorrect_answers.push(respuestas.correct_answer)
            
            const h4$ = document.createElement("h4") 
            h4$.innerHTML = result.question
            gameBoard$$.appendChild(h4$)
            
        }
}
)};






printQuestions()