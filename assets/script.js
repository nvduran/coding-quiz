var timerEl = document.querySelector("#timer");
var secondsVal = 0;

var timeInterval = setInterval(function(){
     secondsVal++
     var secondsRemaining = 10-secondsVal;
     if(secondsRemaining >= 1){
          timerEl.textContent=secondsRemaining;
     }else{
          clearInterval();
     }
          
},1000);

