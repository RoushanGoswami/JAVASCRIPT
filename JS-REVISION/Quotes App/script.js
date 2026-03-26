const buttonPrev = document.getElementById("btn-pre");
const buttonlike = document.getElementById("btn-like");
const buttonNext = document.getElementById("btn-next");
const textQoute = document.getElementById("text-quote");
const textAuthor = document.getElementById("text-author");

const quoteList = [
    { "quote": "Be yourself; everyone else is already taken.", "author": "Oscar Wilde" },
    { "quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "author": "Albert Einstein" },
    { "quote": "So many books, so little time.", "author": "Frank Zappa" },
    { "quote": "A room without books is like a body without a soul.", "author": "Marcus Tullius Cicero" },
    { "quote": "Be the change that you wish to see in the world.", "author": "Mahatma Gandhi" },
    { "quote": "In three words I can sum up everything I've learned about life: it goes on.", "author": "Robert Frost" },
    { "quote": "If you tell the truth, you don't have to remember anything.", "author": "Mark Twain" },
    { "quote": "A friend is someone who knows all about you and still loves you.", "author": "Elbert Hubbard" },
    { "quote": "Without music, life would be a mistake.", "author": "Friedrich Nietzsche" },
    { "quote": "We accept the love we think we deserve.", "author": "Stephen Chbosky" },
    { "quote": "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.", "author": "Marilyn Monroe" },
    { "quote": "It is better to be hated for what you are than to be loved for what you are not.", "author": "André Gide" },
    { "quote": "Life is what happens to us while we are making other plans.", "author": "Allen Saunders" },
    { "quote": "The only way to do great work is to love what you do.", "author": "Steve Jobs" },
    { "quote": "Do what you can, with what you have, where you are.", "author": "Theodore Roosevelt" },
    { "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.", "author": "Winston Churchill" },
    { "quote": "Happiness depends upon ourselves.", "author": "Aristotle" },
    { "quote": "Turn your wounds into wisdom.", "author": "Oprah Winfrey" },
    { "quote": "The purpose of our lives is to be happy.", "author": "Dalai Lama" },
    { "quote": "Get busy living or get busy dying.", "author": "Stephen King" },
    { "quote": "You only live once, but if you do it right, once is enough.", "author": "Mae West" },
    { "quote": "Many of life’s failures are people who did not realize how close they were to success when they gave up.", "author": "Thomas Edison" },
    { "quote": "If you want to live a happy life, tie it to a goal, not to people or things.", "author": "Albert Einstein" },
    { "quote": "Never let the fear of striking out keep you from playing the game.", "author": "Babe Ruth" },
    { "quote": "Money and success don’t change people; they merely amplify what is already there.", "author": "Will Smith" },
    { "quote": "Your time is limited, don’t waste it living someone else’s life.", "author": "Steve Jobs" },
    { "quote": "Not how long, but how well you have lived is the main thing.", "author": "Seneca" },
    { "quote": "If life were predictable it would cease to be life, and be without flavor.", "author": "Eleanor Roosevelt" },
    { "quote": "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.", "author": "Henry Ford" },
    { "quote": "In order to write about life first you must live it.", "author": "Ernest Hemingway" },
    { "quote": "The big lesson in life is never be scared of anyone or anything.", "author": "Frank Sinatra" },
    { "quote": "Sing like no one’s listening, love like you’ve never been hurt.", "author": "Mark Twain" },
    { "quote": "Curiosity about life in all of its aspects remains the secret of great creative people.", "author": "Leo Burnett" },
    { "quote": "Life is not a problem to be solved, but a reality to be experienced.", "author": "Søren Kierkegaard" },
    { "quote": "The unexamined life is not worth living.", "author": "Socrates" },
    { "quote": "Turn your wounds into wisdom.", "author": "Oprah Winfrey" },
    { "quote": "The way I see it, if you want the rainbow, you gotta put up with the rain.", "author": "Dolly Parton" },
    { "quote": "Do all the good you can, for all the people you can.", "author": "Hillary Clinton" },
    { "quote": "Don’t settle for what life gives you; make life better and build something.", "author": "Ashton Kutcher" },
    { "quote": "Everything negative – pressure, challenges – is all an opportunity for me to rise.", "author": "Kobe Bryant" },
    { "quote": "I like criticism. It makes you strong.", "author": "LeBron James" },
    { "quote": "You never really learn much from hearing yourself speak.", "author": "George Clooney" },
    { "quote": "Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this.", "author": "Celine Dion" },
    { "quote": "Live for each second without hesitation.", "author": "Elton John" },
    { "quote": "Life is really simple, but men insist on making it complicated.", "author": "Confucius" },
    { "quote": "Life is a long lesson in humility.", "author": "James M. Barrie" },
    { "quote": "In the end, it’s not the years in your life that count. It’s the life in your years.", "author": "Abraham Lincoln" },
    { "quote": "Life is either a daring adventure or nothing at all.", "author": "Helen Keller" },
    { "quote": "Keep smiling, because life is a beautiful thing and there’s so much to smile about.", "author": "Marilyn Monroe" }
];
let index = Number(localStorage.getItem("index"));// to get the index value from lC storage
function displayQuotes() {
    textQoute.textContent = quoteList[index].quote;
    textAuthor.textContent = quoteList[index].author;
}
displayQuotes();

buttonNext.addEventListener("click", () => {
    index++;
    const str = Math.floor(Math.random() * 16581375).toString(16);// to generate numbers from 1 to 9
    document.body.
    localStorage.setItem("index", index.toString());// to store the index value in Lc storage 
    buttonPrev.classList = "btn btn-outline-primary m-2";
    displayQuotes();
});

buttonPrev.addEventListener("click", () => {
    if (index === 0) {
        buttonPrev.classList = "btn btn-outline-primary m-2 disabled";
        return;
    }
    index--;
    localStorage.setItem("index", index.toString());// to store the index value in Lc storage 

    displayQuotes();
});

