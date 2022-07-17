const insects = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
const arrayRemovedItem = removeItem(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'])
console.log(arrayRemovedItem);

function findArrayIndex(insects, Salamandra) {
for (let index = 0; index < insects.length; index++) {
    let insect = insects[index];
    if (insect === Salamandra){ 
    return index;
 }

}
}
function removeItem(insects, Salamandra){
    const index = findArrayIndex(insects, Salamandra);
    insects.splice(index,2);
    return insects;
}

console.log(arrayRemovedItem);

