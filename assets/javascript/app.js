    // This code will run as soon as the page loads
window.onload = function() {
    $("#true").on("click", start);
    $("#false").on("click", start);
  };
  
  //  Variable that will hold our setInterval that runs the stopwatch
  var intervalId;
  
  // prevents the clock from being sped up unnecessarily
  var clockRunning = false;
  var time = 60;
  var lap = 1;
  

  function start() {
  
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }
  }
  function stop() {
  
    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  }

  function count() {
  
    // decrease time by 1,
    time--;
  
    // grabs current time, pass that into the timeConverter function,
    // and save the result into variable converted.
    var converted = timeConverter(time);
  
    //Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
  }
  function timeConverter(t) {
  
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "0";
    }
    if (time == 0) {
        window.location.href = "score.html";
      }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;

  }

function scorePage(){
    console.log("went through scorePage");
    
    // clearInterval(interval);

let grade = Math.round((right / 6)* 100);

promptDisplay.text("Test Complete Let's See Your Score!");
answerDisplay.text("");
answerDisplay.append("Your Score Is " + grade + "%");

if (grade === 0){
    answerDisplay.append("Please do not touch a kitchen just order out!");
} else if (grade === 60){
    answerDisplay.append("Please Stick to Pancakes, Burgers, & Cereal!");
} else if (grade === 83){
    answerDisplay.append("I Like your Flavor Chef!");
} else if (grade === 100){
    answerDisplay.append("Executive Chef Status")
}

// Restarting the Variables
questionCount = 0;
questionRight = 0;
questionWrong = 0;
grade = 0;



}