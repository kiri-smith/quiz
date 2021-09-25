var startButton = document.querySelector(".start-button");

var questions = [
    {
        question: "What liquor is used in a traditional margarita?",
        a: "vodka",
        b: "rum",
        c: "tequila",
        d: "whiskey",
        correctAnswer: "a"
    },
    {
        question: "question 2?",
        a: "vodka",
        b: "rum",
        c: "tequila",
        d: "whiskey",
        correctAnswer: "a"
    },
    {
        question: "question 3?",
        a: "vodka",
        b: "rum",
        c: "tequila",
        d: "whiskey",
        correctAnswer: "a"
    },
    {
        question: "question 4?",
        a: "vodka",
        b: "rum",
        c: "tequila",
        d: "whiskey",
        correctAnswer: "a"
    },
    {
        question: "What liquor is used in a traditional margarita?",
        a: "vodka",
        b: "rum",
        c: "tequila",
        d: "whiskey",
        correctAnswer: "a"
    },
    {
        question: "What liquor is used in a traditional margarita?",
        a: "vodka",
        b: "rum",
        c: "tequila",
        d: "whiskey",
        correctAnswer: "a"
    },
    {
        question: "What liquor is used in a traditional margarita?",
        a: "vodka",
        b: "rum",
        c: "tequila",
        d: "whiskey",
        correctAnswer: "a"
    },
    {
        question: "What liquor is used in a traditional margarita?",
        a: "vodka",
        b: "rum",
        c: "tequila",
        d: "whiskey",
        correctAnswer: "a"
    },
    {
        question: "What liquor is used in a traditional margarita?",
        a: "vodka",
        b: "rum",
        c: "tequila",
        d: "whiskey",
        correctAnswer: "a"
    },
    {
        question: "question 10?",
        a: "vodka",
        b: "rum",
        c: "tequila",
        d: "whiskey",
        correctAnswer: "a"
    },
]

//push start button

startButton.addEventListener("click", startQuiz);
var questionContainer = document.querySelector(".question-container");
var highScoresContainer = document.querySelector(".high-scores-container");
var countdownContainer = document.querySelector(".countdown-timer-container");
var startContainer = document.querySelector(".start-container");
var questionTextEl = document.querySelector(".question-text");
var questionAnswerAEl = document.querySelector(".question-answer-a");
var questionAnswerBEl = document.querySelector(".question-answer-b");
var questionAnswerCEl = document.querySelector(".question-answer-c");
var questionAnswerDEl = document.querySelector(".question-answer-d");
var currentQuestionIndex = 0;

function startQuiz(){
    startContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    countdownContainer.classList.remove("hidden");
    displayQuestion();
}

function displayQuestion(){
    var currentQuestion = questions[currentQuestionIndex];
    questionTextEl.textContent = currentQuestion.question;
    questionAnswerAEl.textContent = "a. " + currentQuestion.a;
    questionAnswerBEl.textContent = "b. " + currentQuestion.b;
    questionAnswerCEl.textContent = "c. " + currentQuestion.c;
    questionAnswerDEl.textContent = "d. " + currentQuestion.d;
}

//then timer begins countdown and question-one appears

//user answers question
    //if correct: move to question-two
    //else move to question-two and subtract time from clock

//at end of quiz or when timer hits 0, end quiz
    //prompt for initials 
    //store initials and score
    //display on scoreboard ".high-scores"