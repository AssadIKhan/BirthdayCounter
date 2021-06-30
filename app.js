alert("You want to Calculate your Birthday How Much Time Left for your next Birthday Celebration ? ");
var birthday = window.prompt("Enter your Birth 👶 Date 👇 (Day-Month-Year) According Coming Year");

dayEl = document.getElementById("days");
hourEl = document.getElementById("hours");
minuteEl = document.getElementById("minutes");
secondEl = document.getElementById("seconds");

function countDown(){
    const birthdate = new Date(birthday);
    const currentDate = new Date();
    const totalSeconds = (birthdate - currentDate) /1000;

    const days = Math.floor(totalSeconds /3600 /24);
    const hours = Math.floor(totalSeconds /3600) % 24;
    const minutes = Math.floor(totalSeconds /60) % 60;
    const seconds = Math.floor(totalSeconds)% 60;


    dayEl.innerHTML = days;
    hourEl.innerHTML = getsecond(hours);
    minuteEl.innerHTML = getsecond(minutes);
    secondEl.innerHTML = getsecond(seconds);
}
function getsecond(time)
{
    return time < 10 ? `0${time}` : time;
}

countDown();

setInterval(countDown, 1000);