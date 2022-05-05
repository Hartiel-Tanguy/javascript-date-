let now = new Date();
now.setHours(now.getHours() + 80000);


var dd = now.getDate()

var mm = now.getMonth()

var yyyy = now.getFullYear();

now = mm + '/' + dd + '/' + yyyy;

console.log(now)

document.querySelector('.go').innerHTML = now




