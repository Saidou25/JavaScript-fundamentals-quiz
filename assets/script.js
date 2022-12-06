//var nextEl = document.querySelector("#next");
var index = 0;
//var buttonContainer = document.querySelector(".container")
var questions = document.querySelectorAll(".question");


for (var i = 0; i < questions.length; i++) {
    questions[i].setAttribute("style", "color: white");
}



var showQuestions = function () {
    for (var i = 0; i < questions.length; i++) {
       console.log(questions[i]);
       if(questions.data.index != index) {
        questions.style.showQuestions = "none";
       }
       }   
}

var advance = function(event) {
    var element = event.target;
    if (element.matches(".question.button")) {
    if (index < questions.length - 1) {
        index++;
    }
    }
    showQuestions();
}

document.addEventListener("click", advance) 
   // var element = event.target;
  //  if (target.matches("li")) {
      
    
 // });

showQuestions();

