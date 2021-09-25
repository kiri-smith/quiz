var startButton = document.querySelector(".start-button");

var questions = [
    {
        question: "What liquor is used in a traditional margarita?",
        a: "vodka",
        b: "rum",
        c: "tequila",
        d: "whiskey",
        correctAnswer: "c"
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
var countdownTimerEl =  document.querySelector(".countdown-timer");
var currentQuestionIndex = 0;
var timer = 0;
var timerTicker;
var highScores = JSON.parse(localStorage.getItem("high-scores")) || [];

function startQuiz(){
    startContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    countdownContainer.classList.remove("hidden");
    displayQuestion();
    timer = 180;
    countdownTimerEl.textContent = timer;
    timerTicker = setInterval(tickTimer, 1000);
}

function endQuiz(){
    questionContainer.classList.add("hidden");
    countdownContainer.classList.add("hidden");
    highScoresContainer.classList.remove("hidden");
    clearInterval(timerTicker);
    var initials = prompt("Enter your initials");
    highScores.push({
        initials: initials,
        score: timer,
    })
    highScores.sort(compareHighScores);
    localStorage.setItem("high-scores", JSON.stringify(highScores));
    displayHighScores();
}

function compareHighScores(a, b){
    return b.score - a.score;
}

function tickTimer(){
    if (timer <= 0){
        countdownTimerEl.textContent = timer;
        endQuiz();
    }
    timer--;
    countdownTimerEl.textContent = timer;
}

function displayQuestion(){
    var currentQuestion = questions[currentQuestionIndex];
    questionTextEl.textContent = currentQuestion.question;
    questionAnswerAEl.textContent = "a. " + currentQuestion.a;
    questionAnswerBEl.textContent = "b. " + currentQuestion.b;
    questionAnswerCEl.textContent = "c. " + currentQuestion.c;
    questionAnswerDEl.textContent = "d. " + currentQuestion.d;
}

function displayHighScores(){
    while (highScoresContainer.firstChild){
        highScoresContainer.removeChild(highScoresContainer.firstChild);
    }
    for (var highScore of highScores) {
        const container=document.createElement("div");
        const nameEl=document.createElement("h2");
        const scoreEl=document.createElement("h2");
        nameEl.textContent=highScore.initials;
        scoreEl.textContent=highScore.score;
        container.appendChild(nameEl);
        container.appendChild(scoreEl);
        highScoresContainer.appendChild(container);
    }
}

function submitAnswer(answer){
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (answer!==correctAnswer){
        timer-=10; 
    }
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length){
        endQuiz();
    } else {
        displayQuestion();
    }
}
//then timer begins countdown and question-one appears

//user answers question
    //if correct: move to question-two
    //else move to question-two and subtract time from clock

//at end of quiz or when timer hits 0, end quiz
    //prompt for initials 
    //store initials and score
    //display on scoreboard ".high-scores"