var timerEl = document.querySelector("#timer");
var secondsVal = 0;
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");
var questionEl = document.querySelector("#question");
var answerContentEl = document.querySelector("#answer-content");

var question1 = {
     q1:"Arrays in Javascript can be used to store:",
     a1:"numbers and strings",
     a2:"booleans",
     a3:"other arrays",
     a4:"all of the above",      
};

var question2 = {
     q1:"Noting in javascript is accomplished by what syntax",
     a1:"//",
     a2:"/*",
     a3:"/",
     a4:"**",          
};



var askQuestion1 = function(){
     //add .correct-answer class to right answer    
     function addClasstoCorrectAnswer() {
          var element = document.getElementById("answer4");
          element.classList.add("correct-answer");
     }
     addClasstoCorrectAnswer();

     var answerChecker = function(event) {
          var targetEl=event.target;
          if (targetEl.matches(".correct-answer")){
               console.log("correct!")
               askQuestion2();
               var element = document.getElementById("answer4");
               element.classList.remove("correct-answer");
          }else{
               console.log("incorrect :(")
          }
     };
     questionEl.textContent=question1.q1;
     answer1El.textContent=question1.a1;
     answer2El.textContent=question1.a2;
     answer3El.textContent=question1.a3;
     answer4El.textContent=question1.a4;
     answerContentEl.addEventListener("click", answerChecker);
     
};

var askQuestion2 = function(){
     //add .correct-answer class to right answer    
     function addClasstoCorrectAnswer() {
          var element = document.getElementById("answer1");
          element.classList.add("correct-answer");
     }
     addClasstoCorrectAnswer();

     var answerChecker = function(event) {
          var targetEl=event.target;
          if (targetEl.matches(".correct-answer")){
               console.log("correct!")
               
          }else{
               console.log("incorrect :(")
          }
     };
     questionEl.textContent=question2.q1;
     answer1El.textContent=question2.a1;
     answer2El.textContent=question2.a2;
     answer3El.textContent=question2.a3;
     answer4El.textContent=question2.a4;
     answerContentEl.addEventListener("click", answerChecker);
     
};


askQuestion1();







var timeInterval = setInterval(function(){
     secondsVal++
     var secondsRemaining = 60-secondsVal;
     if(secondsRemaining >= 1){
          timerEl.textContent=secondsRemaining;
     }else{
          clearInterval();
     }
},1000);