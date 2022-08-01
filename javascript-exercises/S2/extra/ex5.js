function rollDice(max) {
    return Math.round(Math.random() * (max - 1) + 1);
}
console.log(rollDice(10));
console.log(rollDice(20));
console.log(rollDice(6));

