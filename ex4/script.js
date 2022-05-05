


setInterval(function(){
let date1 = new Date();    
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
console.log(days[date1.getDay()]);
const daysNum = ["00","01", "02", "03", "04", "05","06","07","08","09","10",
                "11","12","13","14","15","16","17","18","19","20","21",
                "22","23","24","25","26","27","28","29","30","31"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months[date1.getMonth()]);

document.getElementById('p1').innerHTML = days[date1.getDay()];
document.getElementById('pa1').innerHTML = daysNum[date1.getDate()];
document.getElementById('p2').innerHTML = months[date1.getMonth()];
document.getElementById('p3').innerHTML = date1.getFullYear();


document.getElementById('p4').innerHTML = date1.getHours()+":";
document.getElementById('p5').innerHTML = date1.getMinutes()+":";
document.getElementById('p6').innerHTML = date1.getSeconds();
},1000);