const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const usersNames = users.map(function (user){
     
    if (user.name[0] === 'A'){
        user.name = 'Anacleto'
     }
     return user
});
console.log(usersNames)