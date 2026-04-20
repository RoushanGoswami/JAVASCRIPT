const QuestionBank = [{
    "question": "What is the capital of Australia?",
    "options": {
        "a": "Sydney",
        "b": "Melbourne",
        "c": "Canberra",
        "d": "Perth"
    },
    "answer": "c"
},
{
    "question": "Who wrote 'Romeo and Juliet'?",
    "options": {
        "a": "William Wordsworth",
        "b": "William Shakespeare",
        "c": "John Keats",
        "d": "Jane Austen"
    },
    "answer": "b"
},
    {
        "question": "Which planet is known as the Red Planet?",
        "options": {
            "a": "Earth",
            "b": "Mars",
            "c": "Jupiter",
            "d": "Venus"
        },
        "answer": "b"
    },
    {
        "question": "What is the largest ocean on Earth?",
        "options": {
            "a": "Atlantic Ocean",
            "b": "Indian Ocean",
            "c": "Pacific Ocean",
            "d": "Arctic Ocean"
        },
        "answer": "c"
    },
    {
        "question": "Who is known as the Father of the Nation in India?",
        "options": {
            "a": "Jawaharlal Nehru",
            "b": "Subhas Chandra Bose",
            "c": "Mahatma Gandhi",
            "d": "Bhagat Singh"
        },
        "answer": "c"
    },
    {
        "question": "What is the chemical symbol for Gold?",
        "options": {
            "a": "Ag",
            "b": "Au",
            "c": "Gd",
            "d": "Go"
        },
        "answer": "b"
    },
    {
        "question": "Which country hosted the 2016 Summer Olympics?",
        "options": {
            "a": "China",
            "b": "Brazil",
            "c": "UK",
            "d": "Russia"
        },
        "answer": "b"
    },
    {
        "question": "Which is the smallest continent?",
        "options": {
            "a": "Europe",
            "b": "Australia",
            "c": "Antarctica",
            "d": "South America"
        },
        "answer": "b"
    },
    {
        "question": "Who invented the telephone?",
        "options": {
            "a": "Thomas Edison",
            "b": "Alexander Graham Bell",
            "c": "Nikola Tesla",
            "d": "Isaac Newton"
        },
        "answer": "b"
    },
    {
        "question": "What is the national animal of India?",
        "options": {
            "a": "Lion",
            "b": "Elephant",
            "c": "Tiger",
            "d": "Leopard"
        },
        "answer": "c"
    }
    
];
// variables 
const TimeCounter = document.getElementById("TimeCounter");
const question = document.getElementById("Question");
const QuestionIndex = document.getElementById("Question-index");

const optionsA = document.getElementById("option-a");
const optionsB = document.getElementById("option-b");
const optionsC = document.getElementById("option-c");
const optionsD = document.getElementById("option-d");
const NextBtn = document.getElementById("Next-btn");

const optBoxA = document.getElementById("opt-box-a");
const optBoxB = document.getElementById("opt-box-b");
const optBoxC = document.getElementById("opt-box-c");
const optBoxD = document.getElementById("opt-box-d");

let currentIndex = 0;
let timer = 60;
let intervalId;// global variable so that it can be used anywhere in this file 
const anslist = [];
let score = 0;

// display Question

function displayQuestions() {
    if (currentIndex > QuestionBank.length - 1) {
        console.log("-----");// if condition is true then stop timer & displaying it 
        clearInterval(intervalId);

    } else {
        startTimer();
        QuestionIndex.textContent = "Q - " + (currentIndex + 1);
        question.textContent = QuestionBank[currentIndex].question;
        optionsA.textContent = QuestionBank[currentIndex].options.a;
        optionsB.textContent = QuestionBank[currentIndex].options.b;
        optionsC.textContent = QuestionBank[currentIndex].options.c;
        optionsD.textContent = QuestionBank[currentIndex].options.d;

        optBoxA.addEventListener("click", () => {
            anslist.push("a");
            console.log("a")
            console.log(anslist)
        });
        optBoxB.addEventListener("click", () => {
            anslist.push("b");
            console.log("b")
            console.log(anslist)
        });
        optBoxC.addEventListener("click", () => {
            anslist.push("c");
            console.log("c")
            console.log(anslist)
        });
        optBoxD.addEventListener("click", () => {
            anslist.push("d");
            console.log("d")
            console.log(anslist)
        });
    }
}


// next button
NextBtn.addEventListener("click", () => {
    currentIndex++
    if (currentIndex < QuestionBank.length) {
        displayQuestions();
        if (currentIndex == QuestionBank.length - 1) {
            NextBtn.textContent = "Submit";
        }

    } else {
        // alert("All Questions are Attempted !");
        scoreCounter();
        showScore();
        console.log(score);
    }
});

// score Counter Function
function scoreCounter() {
    // anslist array -> traverse -> compare -> update score means ++
    QuestionBank.map((que, i) => {
        if (que.answer == anslist[i]) {
            score++;
        }
    })
}

// score show function
function showScore() {
    const scoreShowUI = document.getElementById("score");
    scoreShowUI.classList.add("show-score", "fade-in");

    scoreShowUI.innerHTML = `
        🎉 Quiz Completed! <br><br>
        Your Score: <b>${score} / ${QuestionBank.length}</b> <br><br>
        ${score === QuestionBank.length ? "🔥 Perfect Score!" : "Not Good !"}
        
    `;

}

// timer function

function startTimer() {
    clearInterval(intervalId);
    timer = 60;
    intervalId = setInterval(() => {
        TimeCounter.textContent = timer;
        timer--;
        if (timer < 0) {
            currentIndex++;
            displayQuestions();
        }
    }, 1000)
}
displayQuestions();

