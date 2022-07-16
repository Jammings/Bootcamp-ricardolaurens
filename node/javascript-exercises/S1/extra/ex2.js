const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},
{name: "Salmon", isVegan: false}, 
{name: "Tofu", isVegan: true}, 
{name: "Burger", isVegan: false}, 
{name: "Rice", isVegan: true}, 
{name: "Pasta", isVegan: true}];


for (let index = 0; index < foodSchedule.length; index++) {
    const veganFood = foodSchedule[index];
    if (veganFood.isVegan === false){
        veganFood.name = fruits.shift()
    }
}
console.log(foodSchedule);