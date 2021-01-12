var timerEl = document.querySelector("#timer");
var secondsVal = 0;
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");
var questionEl = document.querySelector("#question");
var answerContentEl = document.querySelector("#answer-content");
var footerEl = document.querySelector("#footer-text");
var highscoresEl = document.querySelector("#high-scores");
var isGameOver = false;
var scoreCounter = 0;

var questionStart = {
     q1:"",
     a1:"",
     a2:"",
     a3:"",
     a4:"",      
};

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

var gameStart = function(){
     questionEl.textContent=questionStart.q1;
     answer1El.textContent=questionStart.a1;
     answer2El.textContent=questionStart.a2;
     answer3El.textContent=questionStart.a3;
     answer4El.textContent=questionStart.a4;
     var startButtonEl = document.createElement("button");
     startButtonEl.textContent = "Start!";
     startButtonEl.className = "start btn";
     footerEl.appendChild(startButtonEl);
     startButtonEl.addEventListener("click", askQuestion1);
}

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
               scoreCounter=scoreCounter+1;
               console.log(scoreCounter);
          }else{
               console.log("incorrect :(")
               secondsVal = secondsVal+5;
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
               var element = document.getElementById("answer1");
               element.classList.remove("correct-answer");
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
               gameWin();
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

var gameLoss = function(){
     footerEl.innerHTML = "<h1>GAME OVER<h1>";
     window.alert("Your score was " + scoreCounter);

};

var gameWin = function(){
     isGameOver = true;
     footerEl.innerHTML = "<h2>WINNER!<h2>";
     window.alert("Your score was " + scoreCounter + "!");
     var initials = window.prompt("Enter your Initials");

     var highScore = localStorage.getItem("highscore") || 0;
     var highScorename = localStorage.getItem("name") || "";
     if (scoreCounter > highScore) {
          localStorage.setItem("highscore", scoreCounter);
          localStorage.setItem("name", initials);
          alert("You now have the high score of " + scoreCounter + "!");
          } else {
          alert("You did not beat the high score of " + highScore + " set by " + highScorename);
        }
};

var highScoresCheck = function(){
     var highScore = localStorage.getItem("highscore") || 0;
     var highScorename = localStorage.getItem("name") || "not set";
     var highScoreStmt = ("The high score is " + highScore + " set by " + highScorename);
     footerEl.textContent=highScoreStmt;
};


//start game
gameStart();

highscoresEl.addEventListener("click", highScoresCheck);

var timeInterval = setInterval(function(){
     secondsVal++
     var secondsRemaining = 60-secondsVal;
     if(secondsRemaining > 0){
          timerEl.textContent=secondsRemaining;
     }else{
          if(isGameOver=true){
          console.log("no");
          clearInterval();
          }else{
          gameLoss();
          clearInterval();
          }
     }
},1000);