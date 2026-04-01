const buttonPrev = document.getElementById("btn-pre");
const buttonlike = document.getElementById("btn-like");
const buttonNext = document.getElementById("btn-next");
const textQoute = document.getElementById("text-quote");
const textAuthor = document.getElementById("text-author");
const QuoteScreen = document.getElementById("quotes-screen");

const quoteList = [
    { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { quote: "Two things are infinite: the universe and human stupidity.", author: "Albert Einstein" },
    { quote: "So many books, so little time.", author: "Frank Zappa" },
    { quote: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
    { quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { quote: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
    { quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { quote: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard" },
    { quote: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { quote: "Without music, life would be a mistake.", author: "Friedrich Nietzsche" },

    { quote: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "Get busy living or get busy dying.", author: "Stephen King" },
    { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { quote: "Many of life’s failures are people who did not realize how close they were to success.", author: "Thomas Edison" },
    { quote: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { quote: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
    { quote: "Money and success don’t change people; they merely amplify what is already there.", author: "Will Smith" },
    { quote: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { quote: "Not how long, but how well you have lived is the main thing.", author: "Seneca" },

    { quote: "If life were predictable it would cease to be life.", author: "Eleanor Roosevelt" },
    { quote: "The whole secret of a successful life is to find out what is one’s destiny to do.", author: "Henry Ford" },
    { quote: "In order to write about life first you must live it.", author: "Ernest Hemingway" },
    { quote: "The big lesson in life is never be scared of anyone or anything.", author: "Frank Sinatra" },
    { quote: "Curiosity about life in all of its aspects is still the secret of great creative people.", author: "Leo Burnett" },
    { quote: "Life is not a problem to be solved, but a reality to be experienced.", author: "Søren Kierkegaard" },
    { quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { quote: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { quote: "May you live all the days of your life.", author: "Jonathan Swift" },

    { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "It is better to fail in originality than to succeed in imitation.", author: "Herman Melville" },
    { quote: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
    { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { quote: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    { quote: "Try not to become a man of success. Rather become a man of value.", author: "Albert Einstein" },
    { quote: "Never give in except to convictions of honor and good sense.", author: "Winston Churchill" },
    { quote: "Stop chasing the money and start chasing the passion.", author: "Tony Hsieh" },

    { quote: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { quote: "You learn more from failure than from success.", author: "Unknown" },
    { quote: "If you are working on something exciting, it will keep you motivated.", author: "Steve Jobs" },
    { quote: "Experience is a hard teacher because she gives the test first.", author: "Vernon Law" },
    { quote: "To know how much there is to know is the beginning of learning to live.", author: "Dorothy West" },
    { quote: "Goal setting is the secret to a compelling future.", author: "Tony Robbins" },
    { quote: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },

    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
    { quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { quote: "Limit your 'always' and your 'nevers'.", author: "Amy Poehler" },
    { quote: "Nothing is impossible. The word itself says 'I'm possible!'", author: "Audrey Hepburn" },
    { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },

    // ---- Continue pattern (trimmed for readability but still large set) ----

    { quote: "An unexamined life is not worth living.", author: "Socrates" },
    { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
    { quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { quote: "What we think, we become.", author: "Buddha" },
    { quote: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { quote: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
    { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    { quote: "He who opens a school door, closes a prison.", author: "Victor Hugo" },
    { quote: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { quote: "Everything has beauty, but not everyone sees it.", author: "Confucius" },

    { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
    { quote: "We become what we think about.", author: "Earl Nightingale" },
    { quote: "Do what you feel in your heart to be right.", author: "Eleanor Roosevelt" },
    { quote: "Happiness is not by chance, but by choice.", author: "Jim Rohn" },
    { quote: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "Change the world by being yourself.", author: "Amy Poehler" },
    { quote: "Every moment is a fresh beginning.", author: "T.S. Eliot" },
    { quote: "Die with memories, not dreams.", author: "Unknown" }];

let index = parseInt(localStorage.getItem("index")) || 0;// to get the index value from lC storage


function displayQuotes() {

    QuoteScreen.style.backgroundColor = localStorage.getItem("color");// getItem --> ye use krne ke kaam aata hai also ye 
    // bahar likha jata hai    
    textQoute.textContent = quoteList[index].quote;
    textAuthor.textContent = quoteList[index].author;
}

displayQuotes();

buttonNext.addEventListener("click", () => {
    if (index >= quoteList.length) {
        return;
    }

    index++;
    // to generate numbers from 1 to 9
    const str = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");// 6 character se zyda na ho 
    const color = "#" + str;
    localStorage.setItem("index", index.toString());// to store the index value in Lc storage 
    localStorage.setItem("color", color);
    buttonPrev.classList = "btn btn-outline-primary m-2";
    displayQuotes();
});



buttonPrev.addEventListener("click", () => {
    if (index === 0) {
        buttonPrev.classList = "btn btn-outline-primary m-2 disabled";
        return;
    }
    index--;
    const str = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");// 6 character se zyda na ho 
    const color = "#" + str;
    localStorage.setItem("color", color);
    localStorage.setItem("index", index.toString());// to store the index value in Lc storage 
    displayQuotes();
});

buttonlike.addEventListener("click", () => {
    // like btn ke click hone pe jo v quotes hai wo store hone chahiye
    // jo ki index based hai
    // to do this hame local storage me favlist create krnna hoga
    // const data = quoteList[index];
    // const str = JSON.stringify(data);
    // localStorage.setItem("favlist", str);
    // ye uper ke codes se bas one quote hin liked ho rha hai
    // localStorage.setItem("favList", JSON.stringify(quoteList[index]));// kaam to same hai bas one-line me hai

    // so to store all fav quotes there hame ek array create krna hoga jo ki local storage se get kre
    // pehle data ko and then ham usko local storage me daal denge
    // const FavQuotes = [];// iski ek problem hai ki ye baar baar new empty array banayega aur ek hi quote store hote rahega
    // so ham isse LC se get kr lenge
    const FavQuotes = JSON.parse(localStorage.getItem("favList")) || []; // str to array
    const res = FavQuotes.findIndex((quote) => quote.quote === quoteList[index].quote);// res me store kiya un quotes ko jo
    // dobara liked huye ho usko compare krne ke liye  
    if (res === -1) {
        alert("Quote added successfully !");
        FavQuotes.push(quoteList[index]);
        localStorage.setItem("favList", JSON.stringify(FavQuotes));
    } else {
        alert("Quote is already Added !")
    }


})
