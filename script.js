const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const colorToggle = document.querySelector('html');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"];

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

toggle.addEventListener('click', (e) => {
if(colorToggle.classList.contains('dark')){
  colorToggle.classList.remove('dark')
  e.target.innerHTML = ("Dark Mode")
}else{
  colorToggle.classList.add('dark')
  e.target.innerHTML = ("Light Mode")
}
});


function setTime(){


var time = new Date()
var day = time.getDay()
var dates = time.getDate()
var month = time.getMonth()
var hour = time.getHours()
var minute = time.getMinutes()
var seconds = time.getSeconds()
var tweleveHour = hour % 12;
var ampm = hour >= 12 ? 'PM' : 'AM'

hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hour, 0, 11, 0, 360)}deg)`
minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`
secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

timeEl.innerHTML = `${tweleveHour}:${minute < 10 ? `0${minute}` : minute} ${ampm}`
dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${dates}</span>`
}

setTime();
setInterval(setTime, 1000);
