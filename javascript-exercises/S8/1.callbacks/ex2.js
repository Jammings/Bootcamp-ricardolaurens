const userAnwsers = [];
const confirmValue = confirm('Soy un texto');
const promptValue = prompt('Soy un texto');

function confirmExample(description){
    return confirm(description)
}

function promptExample(description){
    return prompt(description)
}

function father(description, callback){
    userAnwsers.push(callback(description));

}

father('hola', confirmExample);
father('hola', promptExample);


console.log(userAnwsers)

