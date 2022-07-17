const insects = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']


function findArrayIndex(insects, Ajolote) {
for (let index = 0; index < insects.length; index++) {
    let insect = insects[index];
    if (insect === Ajolote){ 
    return index;
 }

}
}


const index = findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Ajolote');
console.log(index+2);

const index2 = findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Mosquito');
console.log(index2+1);



