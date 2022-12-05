
var questions = document.querySelectorAll(".question");
for (var i = 0; i < questions.length; i++) {
    questions[i].setAttribute("style", "color: white");
}
var nextEl = document.querySelector("#next");
var cursor = 0;

var showQuestions = function () {
    for (var i = 0; i < questions.length; i++) {
       console.log(questions[i]);
    }
}

var advance = function() {
    if (cursor < questions.length - 1) {
        cursor++;
    }
    showQuestions()
}

showQuestions();