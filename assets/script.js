var nextEl = document.querySelector("#next");
var index = 0;
var buttonContainer = document.querySelector(".container")

var questions = document.querySelectorAll(".question");
for (var i = 0; i < questions.length; i++) {
    questions[i].setAttribute("style", "color: white");
}



var showQuestions = function () {
    for (var i = 0; i < questions.length; i++) {
       console.log(questions[i]);
    }
}

var advance = function() {
    if (index < questions.length - 1) {
        index++;
        
    }
    showQuestions()
}

buttonContainer.addEventListener("click", function(event) {
    var element = event.target;
    if (target.matches("li")) {
      
    }
  });

showQuestions();

