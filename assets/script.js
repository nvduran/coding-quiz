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

var question3 = {
     q1:"what will console.log('1+1') display?",
     a1:"2",
     a2:"'2'",
     a3:"'1+1'",
     a4:"none of the above",          
};

var question4 = {
     q1:"what is the name for '{' ",
     a1:"squiggle",
     a2:"curly bracket",
     a3:"fun bracket",
     a4:"that which shall not be named",          
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
               askQuestion3();
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

var askQuestion3 = function(){
     //add .correct-answer class to right answer    
     function addClasstoCorrectAnswer() {
          var element = document.getElementById("answer3");
          element.classList.add("correct-answer");
     }
     addClasstoCorrectAnswer();

     var answerChecker = function(event) {
          var targetEl=event.target;
          if (targetEl.matches(".correct-answer")){
               console.log("correct!")
               var element = document.getElementById("answer3");
               element.classList.remove("correct-answer");
               askQuestion4();
          }else{
               console.log("incorrect :(")
          }
     };
     questionEl.textContent=question3.q1;
     answer1El.textContent=question3.a1;
     answer2El.textContent=question3.a2;
     answer3El.textContent=question3.a3;
     answer4El.textContent=question3.a4;
     answerContentEl.addEventListener("click", answerChecker);
     
};

var askQuestion4 = function(){
     //add .correct-answer class to right answer    
     function addClasstoCorrectAnswer() {
          var element = document.getElementById("answer2");
          element.classList.add("correct-answer");
     }
     addClasstoCorrectAnswer();

     var answerChecker = function(event) {
          var targetEl=event.target;
          if (targetEl.matches(".correct-answer")){
               console.log("correct!")
               var element = document.getElementById("answer2");
               element.classList.remove("correct-answer");
          }else{
               console.log("incorrect :(")
          }
     };
     questionEl.textContent=question4.q1;
     answer1El.textContent=question4.a1;
     answer2El.textContent=question4.a2;
     answer3El.textContent=question4.a3;
     answer4El.textContent=question4.a4;
     answerContentEl.addEventListener("click", answerChecker);
     
};

//get q1 started
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