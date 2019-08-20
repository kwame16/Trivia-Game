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
var time = 10;
var lap = 1;

function start() {
  // DONE: Use setInterval to start the count here and set the clock to running.
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
    console.log("start of timer");
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
    minutes = "";
  }
  if (time == 0) {
    window.location.href = "score.html";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return seconds;
}
// END OF TIMER SECTION!!!!!

// START OF RESULTS PAGE!!!!!!!!!!!!!!!

var test = [
  {
    question: "There are 28 cups in 1 Gallon.",
    answer: "true"
  },
  {
    question: "There are two 1/3cups in 1 cup.",
    answer: "true"
  },
  {
    question: "There are 3 liters in 1 Gallon.",
    answer: "false"
  },
  {
    question: "Water boils at 100 degrees.",
    answer: "false"
  },
  {
    question:
      "The difference between sauteing and pan-frying is that sauteing uses more fat(f).",
    answer: "false"
  },
  {
    question: "There are 8 tablespoons in 1/2 cup(t).",
    answer: "true"
  }
];

//count variables
var questionCount = 0;
var right = 0;
var wrong = 0;
var unanswered = 0;

function scorePage() {
  console.log("went through scorePage");

  // clearInterval(interval);

  let grade = Math.round((right / 6) * 100);

  let answerDisplay = $("#scoreboard");

  promptDisplay.text("Test Complete Let's See Your Score!");
  answerDisplay.text("");
  answerDisplay.append("Your Score Is " + grade + "%");
  console.log("this is score consolelog");

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

$("button").on("click", function() {
  let alreadyAnswered = $(this).attr("data-alreadyAnswered");
  let questionNum = $(this).attr("data-question");
  let userClick = $(this).attr("data-button");
  alert(userClick);
  alert(userClick === test[0].answer);

  if (alreadyAnswered === "no") {
    if (questionNum === "1") {
      if (userClick === test[0].answer) {
        right++;
        alert(`YOu got it correct!`);
      } else {
        wrong++;
        alert(`You got it incorrect!`);
      }
      questionCount++;
      $(`.${questionNum}`).attr("data-alreadyAnswered", "yes")
    } else if (questionNum === "2") {
      if (userClick === test[1].answer) {
        right++;
        alert(right);
        alert(`YOu got it correct!`);
      } else {
        wrong++;
        alert(`You got it incorrect!`);
      }
      questionCount++;
      $(`.${questionNum}`).attr("data-alreadyAnswered", "yes")

    } else if (questionNum === "3") {
      if (userClick === test[2].answer) {
        right++;
        alert(`YOu got it correct!`);
      } else {
        wrong++;
        alert(`You got it incorrect!`);
      }
      questionCount++;
      $(`.${questionNum}`).attr("data-alreadyAnswered", "yes")
    } else if (questionNum === "4") {
      if (userClick === test[3].answer) {
        right++;
        alert(`YOu got it correct!`);
      } else {
        wrong++;
        alert(`You got it incorrect!`);
      }
      questionCount++;
      $(`.${questionNum}`).attr("data-alreadyAnswered", "yes")
    } else if (questionNum === "5") {
      if (userClick === test[4].answer) {
        right++;
        alert(`YOu got it correct!`);
      } else {
        wrong++;
        alert(`You got it incorrect!`);
      }
      questionCount++;
      $(`.${questionNum}`).attr("data-alreadyAnswered", "yes")
    } else if (questionNum === "6") {
      if (userClick === test[5].answer) {
        right++;
        alert(`YOu got it correct!`);
      } else {
        wrong++;
        alert(`You got it incorrect!`);
      }
      questionCount++;
      $(`.${questionNum}`).attr("data-alreadyAnswered", "yes")

    }
    // $(this).attr("data-alreadyAnswered","yes");
  } else {
    alert("you already picked this answer");
  }
});
