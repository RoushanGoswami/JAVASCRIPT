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
},
    // {
    //     "question": "Which gas do plants absorb from the atmosphere?",
    //     "options": {
    //         "a": "Oxygen",
    //         "b": "Nitrogen",
    //         "c": "Carbon Dioxide",
    //         "d": "Hydrogen"
    //     },
    //     "answer": "c"
    // },
    // {
    //     "question": "What is the currency of Japan?",
    //     "options": {
    //         "a": "Won",
    //         "b": "Dollar",
    //         "c": "Yen",
    //         "d": "Peso"
    //     },
    //     "answer": "c"
    // },
    // {
    //     "question": "Who painted the Mona Lisa?",
    //     "options": {
    //         "a": "Vincent van Gogh",
    //         "b": "Pablo Picasso",
    //         "c": "Leonardo da Vinci",
    //         "d": "Michelangelo"
    //     },
    //     "answer": "c"
    // },
    // {
    //     "question": "Which is the longest river in the world?",
    //     "options": {
    //         "a": "Amazon",
    //         "b": "Nile",
    //         "c": "Yangtze",
    //         "d": "Mississippi"
    //     },
    //     "answer": "b"
    // },
    // {
    //     "question": "Which organ purifies blood in the human body?",
    //     "options": {
    //         "a": "Heart",
    //         "b": "Lungs",
    //         "c": "Kidney",
    //         "d": "Liver"
    //     },
    //     "answer": "c"
    // },
    // {
    //     "question": "Which country is known as the Land of the Rising Sun?",
    //     "options": {
    //         "a": "China",
    //         "b": "Thailand",
    //         "c": "Japan",
    //         "d": "South Korea"
    //     },
    //     "answer": "c"
    // },
    // {
    //     "question": "What is H2O commonly known as?",
    //     "options": {
    //         "a": "Salt",
    //         "b": "Water",
    //         "c": "Oxygen",
    //         "d": "Hydrogen"
    //     },
    //     "answer": "b"
    // },
    // {
    //     "question": "Who was the first President of India?",
    //     "options": {
    //         "a": "Dr. Rajendra Prasad",
    //         "b": "S. Radhakrishnan",
    //         "c": "Jawaharlal Nehru",
    //         "d": "APJ Abdul Kalam"
    //     },
    //     "answer": "a"
    // },
    // // {
    // //     "question": "Which is the fastest land animal?",
    // //     "options": {
    // //         "a": "Lion",
    // //         "b": "Tiger",
    // //         "c": "Cheetah",
    // //         "d": "Leopard"
    // //     },
    // //     "answer": "c"
    // // },
    // // {
    // //     "question": "Which festival is known as the Festival of Lights in India?",
    // //     "options": {
    // //         "a": "Holi",
    // //         "b": "Diwali",
    // //         "c": "Eid",
    // //         "d": "Christmas"
    // //     },
    // //     "answer": "b"
    // // }

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

// display Question
let currentIndex = 0;
function displayQuestions() {
    QuestionIndex.textContent = "Q - " + (currentIndex + 1);
    question.textContent = QuestionBank[currentIndex].question;
    optionsA.textContent = QuestionBank[currentIndex].options.a;
    optionsB.textContent = QuestionBank[currentIndex].options.b;
    optionsC.textContent = QuestionBank[currentIndex].options.c;
    optionsD.textContent = QuestionBank[currentIndex].options.d;
}
displayQuestions();

// next button
NextBtn.addEventListener("click", () => {
    if (currentIndex < QuestionBank.length - 1) {
        currentIndex++
    }
    if (currentIndex == 9) {
        NextBtn.textContent = "Submit";
    }
    displayQuestions();
});

// timer function
let timer = 0;
setInterval(() => {
    if (timer < 10) {
        timer++;
        displayQuestions();
    }
    TimeCounter.textContent = timer;
}, 1000);

