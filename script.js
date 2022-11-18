const triviaQuestions = [
    {
        question: "What horror movie featured the first running toilet on screen?",
        a: "House on Haunted Hill(1959)",
        b: "The Bad Seed(1957)",
        c: "Psycho(1960)",
        d: "The Exorcist(1973)",
        answer: "Psycho(1960)"
    },
    {
        question: "How many Friday the 13th movies are there?",
        a: "Three movies",
        b: "Eight movies",
        c: "Twelve movies",
        d: "fourteen movies",
        answer: "Twelve movies"
    },
    {
        question: "Whose face was used as the basis for the Michael Myers mask from Halloween?",
        a: "William Shatner",
        b: "Nick Castle",
        c: "Derek Mears",
        d: "Kevin Bacon",
        answer: "William Shatner"
    },
    {
        question: "What is the name of the creatures from the Predator franchise?",
        a: "Ke'lit",
        b: "Yautja",
        c: "Vulegs",
        d: "Osaajoren",
        answer: "Yautja"
    },
    {
        question: "What was the original name of Plan 9 From Outer Space before its release?",
        a: "Invaders from Outer Space",
        b: "Grave Robbers From Outer Space",
        c: "Zombies from Outer Space",
        d: "Mars Attacks!",
        answer: "Grave Robbers From Outer Space"
    },
    {
        question: "How many Halloween movies are there?",
        a: "Five movies",
        b: "Eight movies",
        c: "Twelve movies",
        d: "Thirteen movies",
        answer: "Thirteen movies"
    },
    {
        question: "What serial killer inspired The Texas Chain Saw Massacre?",
        a: "Harold Shipman",
        b: "John Wayne Gacy",
        c: "Dennis Rader",
        d: "Ed Gein",
        answer: "Ed Gein"
    },
    {
        question: "What horror movie coined the phrase “Do You Like Scary Movies“?",
        a: "Friday the 13th (1980)",
        b: "A Nightmare on Elm Street (1984)",
        c: "Scream (1996)",
        d: "I Know What You Did Last Summer (1997)",
        answer: "Scream (1996)"
    },
    {
        question: "What is Nancy’s address in the original Nightmare On Elm Street?",
        a: "1428 Elm Street",
        b: "1408 Elm Street",
        c: "1458 Elm Street",
        d: "1400 Elm Street",
        answer: "1428 Elm Street"
    },
    {
        question: "What horror movie villain appears when you say his name five times?",
        a: "The Bye Bye Man",
        b: "BeetleJuice",
        c: "Madman Marz",
        d: "Candyman",
        answer:"Candyman"
    },
    {
        question: "What was Friday the 13th’s original title before its release?",
        a: "A Long Night at Camp Crystal Lake", 
        b: "A Long Night at Camp Blood",
        c: "A Nightmare at Camp Crystal Lake",
        d: "The Crystal Lake Massacre",
        answer: "A Long Night at Camp Blood"
    },
    {
        question: "How many Nightmare on Elm Street movies are there?",
        a: "Four movies",
        b: "Eight movies",
        c: "Nine movies",
        d: "Twelve movies",
        answer: "Nine movies"
    },
    {
        question: "What is Chucky’s real name within the Child’s Play film series?",
        a: "Charles Lee Ray",
        b: "Charles Lawrence Anderson",
        c: "Charles Ray Lamborghini",
        d: "Charles Len Manson",
        answer: "Charles Lee Ray"
    },
    {
        question: "What are the colors of Freddy Kreuger’s sweater?",
        a: "Red and Grey",
        b: "Red and Blue",
        c:  "Red and Black",
        d: "Red and Green",
        answer: "Red and Green"
    },
    {
        question: "What is the official name of the shark from Jaws?",
        a: "Anchor",
        b: "Bruce",
        c: "Chum", 
        d: "Derek",
        answer: "Bruce"
    },
    {
        question: "What famous movie is the line “…they’re coming to get you Barbara!” from?",
        a: "Night of the Living Dead(1968)",
        b: "Sugar Hill(1974)",
        c: "The Return of the Living Dead(1985)",
        d: "Army of Darkness(1992)",
        answer: "Night of the Living Dead(1968)"
    },
    {
        question: "What song plays while Patrick Bateman axe murders his co-worker?",
        a: "Oops!...I Did It Again by Britney Spears",
        b: "Never Too Much by Luther Vandross",
        c: "Hip To Be Square by Huey Lewis and the News",
        d: "Maneater by Hall and Oats",
        answer: "Hip To Be Square by Huey Lewis and the News"
    },
    {
        question: "How many Hellraiser movies are there?",
        a: "Nine movies",
        b: "Ten movies",
        c: "Eleven movies",
        d: "Twelve movies",
        answer: "Eleven movies"
    },
    {
        question: "What is the name of the demon from The Exorcist?",
        a: "Ahpuch",
        b: "Balaam",
        c: "Ishtar",
        d: "Pazuzu",
        answer: "Pazuzu"
    },
    {
        question: "In Scream, what is Randy’s first rule to survive a horror movie?",
        a: "Don’t have sex",
        b: "Don't drink or do drugs",
        c: "Don't say 'I'll be right back'",
        d: "Wear Comfortable Shoes",
        answer: "Don’t have sex"
    },
    {
        question: "Which is not one of the rules you should know about the mogwai in the movie Gremlins?",
        a: "Keep them out of direct light",
        b: "Don’t get them wet",
        c: "Don't let them watch television",
        d: "Don’t feed them after midnight",
        answer: "Don't let them watch television"
    },
    {
        question: "In The Monster Squad, what famous creatures do the kids have to defeat?",
        a: "Dracula and Frankenstein",
        b: "The Mummy and The Wolfman",
        c: "The Creature/Gillman",
        d: "All of the Above",
        answer: "All of the Above"
    },
    {
        question: "What movie is the highest-grossing Stephen King adaptation?",
        a: "Carrie(1976)",
        b: "Pet Semetary(1989)",
        c: "The Shining(1980)",
        d: "It (2017)",
        answer: "It (2017)"
    },
    {
        question: "What brand of doll inspired Annabelle from The Conjuring series?",
        a: "An Antique Porcelain Doll",
        b: "A Raggedy Ann doll",
        c: "A 1970's Dawn Doll",
        d: "A Barbie Doll",
        answer: "A Raggedy Ann doll"
    },
    {
        question: "What movie is the famous line “Here’s Johnny!” from?",
        a: "The Shining",
        b: "Misery",
        c: "It",
        d: "Stand By Me",
        answer: "The Shining"
    }
];

//access dom elements 
const startButton = document.getElementById("start-button");
const quizBoard = document.getElementById("quiz-board");
const questionText = document.getElementById("question-text");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const results = document.getElementById("results");
const playAgain = document.getElementById('play_again');

 // Shuffle array and get first 10 questions
function getCurrentQuiz() {
    let quiz = triviaQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
    return quiz;
};

startButton.addEventListener('click', displayContent, generateQuiz);

//display quiz data
function displayContent(){
    startButton.style.visibility = 'hidden';
    quizBoard.style.visibility = 'visible';
    playAgain.style.visibility = 'hidden';
    results.style.visibility = 'hidden';
};

//call generateQuiz to get new 10 question quiz
playAgain.addEventListener('click', function onclick(){
    score = 0;
    currentRound = 0;
    displayContent();
    generateQuiz();
});

//after round is complete print score and play again button
function endRound() {
    quizBoard.style.visibility = 'hidden';
    results.style.visibility = 'visible';
    results.innerHTML = `You Scored ${score}/10`;
    playAgain.style.visibility = 'visible';
};

let score = 0;
let currentRound = 0;

//get current quiz and print question/choice data
generateQuiz()
function generateQuiz() {
    
    let currentQuiz = getCurrentQuiz();
    const currentQuizData = currentQuiz[currentRound];

    questionText.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    //while current round isnt 10 increase score and current round else end round after question 10
    if(currentRound !== 9) {
        a_text.onclick = function() {
            if(currentQuizData.a === currentQuizData.answer) {
                //results.innerText = 'Correct!'
                score++
                currentRound++
                generateQuiz();
            }else {
                //results.innerText = "Wrong!"
                currentRound++
                generateQuiz();
            }
        };
        b_text.onclick = function() {
            if(currentQuizData.b === currentQuizData.answer) {
                //results.innerText = "Correct!";
                score++
                currentRound++
                generateQuiz();
            }else {
                //results.innerText = "Wrong!";
                currentRound++
                generateQuiz();
            }
        };
        c_text.onclick = function() {
            if(currentQuizData.c === currentQuizData.answer) {
                //results.innerText = "Correct!";
                score++
                currentRound++
                generateQuiz();
            }else {
                //results.innerText = "Wrong!";
                currentRound++
                generateQuiz();
            }
        };
        d_text.onclick = function() {
            if(currentQuizData.d === currentQuizData.answer) {
                //results.innerText = "Correct!";
                score++
                currentRound++
                generateQuiz();
            }else {
                //results.innerText = "Wrong!";
                currentRound++
                generateQuiz();
            }
        }
    } else {
        a_text.onclick = function() {
            if(currentQuizData.a === currentQuizData.answer) {
                //results.innerText = 'Correct!'
                score++
                endRound();
            }else {
                //results.innerText = "Wrong!"
                endRound();
            }
        };
        b_text.onclick = function() {
            if(currentQuizData.b === currentQuizData.answer) {
                //results.innerText = 'Correct!'
                score++
                endRound();
            }else {
                //results.innerText = "Wrong!"
                endRound();
            }
        };
        c_text.onclick = function() {
            if(currentQuizData.c === currentQuizData.answer) {
                //results.innerText = 'Correct!'
                score++
                endRound();
            }else {
                //results.innerText = "Wrong!"
                endRound();
            }
        };
        d_text.onclick = function() {
            if(currentQuizData.d === currentQuizData.answer) {
                //results.innerText = 'Correct!'
                score++
                endRound();
            }else {
                //results.innerText = "Wrong!"
                endRound();
            }
        };
    }
};
