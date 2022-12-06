
var index = 0;
var questions = document.querySelectorAll(".question");


var showQuestions = function () {
    for (var i = 0; i < questions.length; i++) {
       console.log(questions[i]);
    //   if(questions.data.index != index) {
       
     //  } else {
    //    questions.style.display = "block";
       }
      //questions.style.display = "none";
       }   
//}

var advance = function() {
   // var element = event.target;
    if (element.matches(".question")) {
    if (index < questions.length - 1) {
        index++;
    }
    }
    showQuestions();
}

//document.addEventListener("click", advance) 

showQuestions();

