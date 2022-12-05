/*var questions = document.querySelectorAll(".question");
var cursor = 0;



var showQuestion = function () {
   for (var question of questions) {
    console.log(question);
    if (question.dataset.index != cursor) {
        if (question.dataset.index != cursor){
            question.style.display = "none";
        } else {
            question.style.display = "block";
        }
    }
   }
   };

var advance = function (event) {
    var element = event.target;
    if (element.matches(".question button")) {
    if (cursor < questions.lengh - 1) {
        cursor++;
    }
    showQuestion();
    }
};

document.addEventListener("CLICK", advance);

showQuestion();

*/
var questions = document.querySelectorAll(".question");
for (var i = 0; i < questions.length; i++) {
    questions[i].setAttribute("style", "color: white");
}
