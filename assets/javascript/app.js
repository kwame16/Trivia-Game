//   TIMER THAT WILL BE LOADED AND READY WHEN THE PAGE IS AND WILL START ON
// CLICK OF FIRST BUTTON CLICKED...

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
  var seconds = t - minutes * 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "0";
  }
  if (time == 0) {
    window.location.href = "score.html";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}
// END OF TIMER SECTION!!!!!

// START OF RESULTS PAGE!!!!!!!!!!!!!!!

function scorePage() {
  console.log("went through scorePage");

  // clearInterval(interval);

  let grade = Math.round((right / 6) * 100);

  promptDisplay.text("Test Complete Let's See Your Score!");
  answerDisplay.text("");
  answerDisplay.append("Your Score Is " + grade + "%");

  if (grade === 0) {
    answerDisplay.append("Please do not touch a kitchen just order out!");
  } else if (grade === 60) {
    answerDisplay.append("Please Stick to Pancakes, Burgers, & Cereal!");
  } else if (grade === 83) {
    answerDisplay.append("I Like your Flavor Chef!");
  } else if (grade === 100) {
    answerDisplay.append("Executive Chef Status");
  }

  // Restarting the Variables
  questionCount = 0;
  questionRight = 0;
  questionWrong = 0;
  grade = 0;
}

var test = [
  {
    question: "There are 28 cups in 1 Gallon.",
    choices: [true, false],
    answer: true
  },
  {
    question: "There are two 1/3cups in 1 cup.",
    choices: [true, false],
    answer: true
  },
  {
    question: "There are 3 liters in 1 Gallon.",
    choices: [true, false],
    answer: false
  },
  {
    question: "Water boils at 100 degrees.",
    choices: [true, false],
    answer: false
  },
  {
    question:
      "The difference between sauteing and pan-frying is that sauteing uses more fat(f).",
      choices: [true, false],
      answer: false
  },
  {
    question: "There are 8 tablespoons in 1/2 cup(t).",
    choices: [true, false],
    answer: true
  }
];

function questions() {
  console.log("We Made it to here");

  if (questionCount < test.length) {
    // restarts the variables
    answerCorrect = "";
    answerIncorrect = "";

    // shows the answer page if you select the wrong answer
    if (test[questionCount].answer == test[questionCount].choices[0]) {
      console.log("it made it to testing");

      $("#answer0").on("click", rightAnswer);
      $("#answer1").on("click", wrongAnswer);
    } else if (test[questionCount].answer == test[questionCount].choices[1]) {
      console.log("it made it to testing 1");

      $("#answer0").on("click", rightAnswer);
      $("#answer1").on("click", wrongAnswer);
    } else if (test[questionCount].answer == test[questionCount].choices[2]) {
      console.log("it made it to testing 2");

      $("#answer0").on("click", rightAnswer);
      $("#answer1").on("click", wrongAnswer);
    } else if (test[questionCount].answer == test[questionCount].choices[3]) {
      console.log("it made it to testing 3");

      $("#answer0").on("click", rightAnswer);
      $("#answer1").on("click", wrongAnswer);
    } else if (test[questionCount].answer == test[questionCount].choices[4]) {
      console.log("it made it to testing 4");

      $("#answer0").on("click", rightAnswer);
      $("#answer1").on("click", wrongAnswer);
    } else if (test[questionCount].answer == test[questionCount].choices[5]) {
      console.log("it made it to testing 5");

      $("#answer0").on("click", rightAnswer);
      $("#answer1").on("click", wrongAnswer);
    }
  } else {
    countPage();
  }
}
