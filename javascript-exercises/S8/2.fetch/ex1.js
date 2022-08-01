fetch('https://api.genderize.io?name=gabriel')
.then(function(res){
    return res.json();
})
.then(function(data){
    console.log(data);
    printData(data)
});