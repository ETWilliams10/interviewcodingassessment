var startQuizBtn = document.querySelector('#start_quiz');
var timeLeftCounter = document.querySelector('#time_left');
var startQuizContainer = document.querySelector('#start_quiz_container');
var answerBtns = document.querySelectorAll('.quiz_question .answer_button');


function submitAnswer() {
    console.log('answer subtmitted')
    console.log(this);
    console.log(this.parentNode);
    

    if (this.value == 1) {
        this.parentNode.classList.add('valid');
    } else {
        this.parentNode.classList.add('invalid')
    }
}

function startQuiz() {
    startQuizContainer.style.display = 'none';
    var timer = 300;
    setInterval(function() {
       timeLeftCounter.textContent = timer;
       timer--;
    }, 1000);
}

startQuizBtn.addEventListener("click", startQuiz);

for (var answerBtn of answerBtns) {
    answerBtn.addEventListener("click", submitAnswer);
}