//when user pushes the start button, the quiz will begin (want timer to begin countdown and question 1 to appear)
var startButton = document.querySelector(".start-button");

//questions to appear one-at-a-time during quiz
var questions = [
    {
        question: "What liquor is used in a traditional margarita? (Click the text of your answer choice.)",
        a: "vodka",
        b: "rum",
        c: "tequila",
        d: "whiskey",
        correctAnswer: "c"
    },
    {
        question: "Which two liquors are commonly used to make a martini? (Click the text of your answer choice.)",
        a: "rum and vodka",
        b: "gin and rum",
        c: "vodka and rum",
        d: "gin and vodka ",
        correctAnswer: "d"
    },
    {
        question: "Which set of ingredients could be used to make an Old Fashioned? (Click the text of your answer choice.)",
        a: "whiskey, sugar, bitters, and water",
        b: "dark rum, bitters, and bourbon",
        c: "whiskey, simple syrup, and lemon juice",
        d: "dark rum, simple syrup, and orange zest",
        correctAnswer: "a"
    },
    {
        question: "Which of the following is NOT included in a Long Island Iced Tea? (Click the text of your answer choice.)",
        a: "vodka",
        b: "triple sec",
        c: "tequila",
        d: "whiskey",
        correctAnswer: "d"
    },
    {
        question: "What ingredient turns a bar drink/shot into a 'bomb'? (Click the text of your answer choice.)",
        a: "Guinness",
        b: "sour mix",
        c: "Red Bull",
        d: "Grand Marnier",
        correctAnswer: "c"
    },
    {
        question: "What liquor is used in a traditional Moscow Mule? (Click the text of your answer choice.)",
        a: "gin",
        b: "rum",
        c: "tequila",
        d: "vodka",
        correctAnswer: "d"
    },
    {
        question: "Which set of ingredients could make a Dark and Stormy? (Click the text of your answer choice.)",
        a: "vodka, whiskey, bitters, and lemon juice",
        b: "dark rum, ginger beer, and lime juice",
        c: "jagermeister and Guinness",
        d: "vodka and coffee liqueur",
        correctAnswer: "b"
    },
    {
        question: "What is the key difference between the drinks: White Russian and Black Russian? (Click the text of your answer choice.)",
        a: "coffee",
        b: "cream",
        c: "vodka",
        d: "chocolate",
        correctAnswer: "b"
    },
    {
        question: "Which ingredient controls if a Martini is 'dry' or 'wet'? (Click the text of your answer choice.)",
        a: "vermouth",
        b: "olive juice",
        c: "gin",
        d: "lemon",
        correctAnswer: "a"
    },
    {
        question: "What juices do you include in a traditional Cosmopolitan? (Click the text of your answer choice.)",
        a: "cranberry only",
        b: "cranberry and lemon",
        c: "cranberry, lemon, and grenadine",
        d: "cranberry, lemon, grenadine, and pomegranite",
        correctAnswer: "b"
    },
]

//push start button
//store all variables needed

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

//when button is pushed, quiz starts -- start button becomes hidden, question appears and countdown appears
function startQuiz(){
    startContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    countdownContainer.classList.remove("hidden");
    displayQuestion();
    timer = 120; //chose a 2 minute quiz
    countdownTimerEl.textContent = timer;
    timerTicker = setInterval(tickTimer, 1000); //timer counts down by seconds
}

//when quiz ends, the questions are hidden, the timer is hidden, and the high scores appear
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
    //we want to save the high scores in local storage
    highScores.sort(compareHighScores);
    localStorage.setItem("high-scores", JSON.stringify(highScores));
    displayHighScores();
}

//we want to sort the high scores by rank and display
function compareHighScores(a, b){
    return b.score - a.score;
}

//when time runs out, end quiz
function tickTimer(){
    if (timer <= 0){
        countdownTimerEl.textContent = timer;
        endQuiz();
    }
    timer--;
    countdownTimerEl.textContent = timer;
}

//display each question one at a time with the answer choices
function displayQuestion(){
    var currentQuestion = questions[currentQuestionIndex];
    questionTextEl.textContent = currentQuestion.question;
    questionAnswerAEl.textContent = "a. " + currentQuestion.a;
    questionAnswerBEl.textContent = "b. " + currentQuestion.b;
    questionAnswerCEl.textContent = "c. " + currentQuestion.c;
    questionAnswerDEl.textContent = "d. " + currentQuestion.d;
}

//we want to display the high scores with the stored initials and times
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

//we want to check each answer submitted with the stored correct answer and subtract 10 seconds from the time if the question was incorrect
function submitAnswer(answer){
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (answer!==correctAnswer){
        timer-=10; 
    }
    //if the time runs out before the end of the quiz, end the quiz
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length){
        endQuiz();
    } else {
        displayQuestion();
    }
}