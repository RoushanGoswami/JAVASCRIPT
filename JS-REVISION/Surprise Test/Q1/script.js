const btn = document.getElementById("btn");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");
const box10 = document.getElementById("box10");
const box11 = document.getElementById("box11");
const box12 = document.getElementById("box12");








btn.addEventListener("click", () => {
    const str1 = Math.floor(Math.random() * 16581375).toString(16);
    const str2 = Math.floor(Math.random() * 16581375).toString(16);
    const str3 = Math.floor(Math.random() * 16581375).toString(16);
    const str4 = Math.floor(Math.random() * 16581375).toString(16);
    const str5 = Math.floor(Math.random() * 16581375).toString(16);
    const str6 = Math.floor(Math.random() * 16581375).toString(16);
    const str7 = Math.floor(Math.random() * 16581375).toString(16);
    const str8 = Math.floor(Math.random() * 16581375).toString(16);
    const str9 = Math.floor(Math.random() * 16581375).toString(16);
    const str10 = Math.floor(Math.random() * 16581375).toString(16);
    const str11 = Math.floor(Math.random() * 16581375).toString(16);
    const str12 = Math.floor(Math.random() * 16581375).toString(16);



    box1.style.backgroundColor = "#" + str1;
    box2.style.backgroundColor = "#" + str2;
    box3.style.backgroundColor = "#" + str3;
    box4.style.backgroundColor = "#" + str4;
    box5.style.backgroundColor = "#" + str5;
    box6.style.backgroundColor = "#" + str6;
    box7.style.backgroundColor = "#" + str7;
    box8.style.backgroundColor = "#" + str8;
    box9.style.backgroundColor = "#" + str9;
    box10.style.backgroundColor = "#" + str10;
    box11.style.backgroundColor = "#" + str11;
    box12.style.backgroundColor = "#" + str12;



});