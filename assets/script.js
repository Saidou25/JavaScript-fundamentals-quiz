var questions = document.querySelectorAll(".question");
var cursor = 0;



var showQuestion = function () {
   for (var question of questions) {
    console.log(question);
   }
   };

var advance = function () {
    if (cursor < questions.lengh - 1) {
        cursor++;
    }
    showQuestion();
};
showQuestion();