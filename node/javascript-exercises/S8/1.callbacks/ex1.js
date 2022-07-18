const numbersList = [];

function sum(a, b){
return a + b
}

function substract(a, b){
    return a - b

}

function father(a, b, multi){
    const result = multi(a, b)
    numbersList.push(result)

}

father(5, 15, sum)
father(35, 15, substract)
father(13, 28, sum)



console.log(numbersList)