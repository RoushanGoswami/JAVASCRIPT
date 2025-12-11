const text = document.getElementById("text");

setInterval(() => {
    let date = new Date();
    text.textContent = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();

}, 1000);



