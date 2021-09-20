var startQuizBtn = document.querySelector('#start_quiz');
var timeLeftCounter = document.querySelector('#time_left');
var startQuizContainer = document.querySelector('#start_quiz_container');

function startQuiz() {
    var timer = 300;
    setInterval(function() {
       timeLeftCounter.textContent = timer;
       timer--;
    }, 1000);
}

startQuizBtn.addEventListener("click", startQuiz);
