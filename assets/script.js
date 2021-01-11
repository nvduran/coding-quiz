var timerEl = document.querySelector("#timer");
var secondsVal = 0;
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");


var timeInterval = setInterval(function(){
     secondsVal++
     var secondsRemaining = 60-secondsVal;
     if(secondsRemaining >= 1){
          timerEl.textContent=secondsRemaining;
     }else{
          clearInterval();
     }
},1000);

answer1El.textContent="hello"; 