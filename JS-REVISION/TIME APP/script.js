// function updateClock() {
//     const now = new Date();

//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();

//     let ampm = hours >= 12 ? 'PM' : 'AM';

//     hours = hours % 12;
//     hours = hours ? hours : 12;

//     hours = hours < 10 ? '0' + hours : hours;
//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     seconds = seconds < 10 ? '0' + seconds : seconds;

//     const timeString = `${hours}:${minutes}:${seconds}`;

//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//     const day = days[now.getDay()];
//     const date = now.getDate();
//     const month = months[now.getMonth()];
//     const year = now.getFullYear();

//     document.getElementById('time').innerText = timeString;
//     document.getElementById('ampm').innerText = ampm;
//     document.getElementById('date').innerText = `${date} ${month} ${year}`;
//     document.getElementById('day').innerText = day;
// }

// setInterval(updateClock, 1000);
// updateClock();
const time = document.getElementById("time");
const ampm = document.getElementById("ampm");
const date = document.getElementById("date");
const day = document.getElementById("day");
const Image = document.getElementById("imgChange");
// console.log(now.getDate());
// day.textContent = now.getDay();
// to show the data & time in name we have to create arrays for that to get access

setInterval(() => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();// now ke andar new Date fun ko store kr diya !
    time.textContent = (now.getHours() % 12) + " : " + now.getMinutes() + " : " + now.getSeconds();
    const NowMonth = now.getMonth(); // NowMonth = 3(index) jo ki ham use krenge in the next step
    date.textContent = now.getDate() + " " + months[NowMonth] + " " + now.getFullYear();
    const NowDay = now.getDay();
    day.textContent = days[NowDay];
    ampm.textContent = (now.getHours() < 12) ? "AM" : "PM";
    Image.src = (now.getHours() >= 12) ? "https://media.lordicon.com/icons/wired/lineal/803-cloud-sun.svg" : "https://cdn-icons-png.flaticon.com/512/1809/1809597.png"
}, 1000);