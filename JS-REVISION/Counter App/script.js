// get all the html elements and store it in variables 
const count = document.getElementById("counter");
const button1 = document.getElementById("btn-1");
const button2 = document.getElementById("btn-2");
const button3 = document.getElementById("btn-3");
const button4 = document.getElementById("btn-4");
const button5 = document.getElementById("btn-5");
const button6 = document.getElementById("btn-6");

button1.addEventListener("click", () => {
    count.textContent++;
});

button2.addEventListener("click", () => {
    count.textContent--;
});

button3.addEventListener("click", () => {
    count.textContent *= 2;
});

button4.addEventListener("click", () => {
    count.textContent /= 2;
});

button5.addEventListener("click", () => {
    count.textContent %= 2;
});

button6.addEventListener("click", () => {
    count.textContent = "0";
});