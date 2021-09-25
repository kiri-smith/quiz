var startButton = document.querySelector(".start-button");


//push start button

startButton.addEventListener("click", startQuiz);

//then timer begins countdown and question-one appears

//user answers question
    //if correct: move to question-two
    //else move to question-two and subtract time from clock

//at end of quiz or when timer hits 0, end quiz
    //prompt for initials 
    //store initials and score
    //display on scoreboard ".high-scores"