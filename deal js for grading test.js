//Define variables
var test = [{
    question: "Who hides eggs on a Sunday?",
    choices: ["Br'er Rabbit", "Bugs Bunny", "The Easter Bunny", "The White Rabbit"],
    answer: "The Easter Bunny",
    image: "../TriviaGame/assets/images/easter_bunny.jpg"
},
{
    question: "He's late for a very important date",
    choices: ["Lola Bunny", "Judy Hopps", "Thumper", "The White Rabbit"],
    answer: "The White Rabbit",
    image: "../TriviaGame/assets/images/white_rabbit.jpg"
},
{
    question: "Who framed _______?",
    choices: ["Bunnicula", "Little Bunny Foo Foo", "Cadbury Bunny", "Roger Rabbit"],
    answer: "Roger Rabbit",
    image: "../TriviaGame/assets/images/rogger_rabbit.jpg"
},
{
    question: "Arthur's postcard sending friend",
    choices: ["Buster", "Rabbit", "Peter Cottontail", "Velveteen Rabbit"],
    answer: "Buster",
    image: "../TriviaGame/assets/images/buster.png"
},
{
    question: "________ are for kids! Silly rabbit!",
    choices: ["Energizer Bunny", "Trix Rabbit", "Nesquik Bunny", "Peter Rabbit"],
    answer: "Trix Rabbit",
    image: "../TriviaGame/assets/images/trix_rabbit.jpg"
}
];

//count variables
var questionCount = 0;
var right = 0;
var wrong = 0;
var unanswered = 0;

//HTML display variables
var startButtonDisplay = $("#button");
var timeDisplay = $("#time");
var questionDisplay = $("#question");
var answerDisplay = $("#answers");

//timer variables
var seconds;
var interval;


//Define functions
//function for count
function countDown() {
seconds--;

timeDisplay.text("Time remaining left: " + seconds + " seconds");

if (seconds === 0) {
    timeOut();
}
}

//function to show the user was right
function rightAnswer() {

console.log("went through right");

clearInterval(interval);

timeDisplay.text("Time remaining left: " + seconds + " seconds");
questionDisplay.append("<h3>CORRECT ANSWER!</h3>");
questionDisplay.append("<h4>" + test[questionCount].answer + " is correct!</h4>");
answerDisplay.text("");
answerDisplay.append("<img src=" + test[questionCount].image + ">")
questionCount++;
right++;

setTimeout(questions, 1000 * 3);

}

//function to show the user was wrong
function wrongAnswer() {

console.log("went through wrong");

clearInterval(interval);

timeDisplay.text("Time remaining left: " + seconds + " seconds");
questionDisplay.append("<h3>INCORRECT ANSWER!</h3>");
questionDisplay.append("<h4>The correct answer is: " + test[questionCount].answer + "</h4>");
answerDisplay.text("");
answerDisplay.append("<img src=" + test[questionCount].image + ">")

questionCount++;
wrong++;

setTimeout(questions, 1000 * 3);
}

//shows when the user times out of the question
function timeOut() {
console.log("went through timeOut");

clearInterval(interval);

timeDisplay.text("Time remaining left: 0 seconds");
questionDisplay.append("<h3>TIME RAN OUT!</h3>");
questionDisplay.append("<h4>The correct answer is: " + test[questionCount].answer + "</h4>");
answerDisplay.text("");    answerDisplay.text("");
answerDisplay.append("<img src=" + test[questionCount].image + ">")

questionCount++;
unanswered++;

setTimeout(questions, 1000 * 3);
}

//shows the user the count of what they got wrong/right/unanswered and shows replay again button
function countPage() {
console.log("went through countPage");

clearInterval(interval);

var grade = Math.round((right / 5) * 100);

timeDisplay.text("Time remaining left: " + seconds + " seconds");
questionDisplay.text("Test Done! Here is how you did:");
answerDisplay.text("");
answerDisplay.append("<h3>You got a " + grade + "%!</h3>");

//shows user different messages based on the grade
if (grade === 0) {
    answerDisplay.append("<h4>Do you even have a brain underneath that hare?</h4>");
    answerDisplay.append("<img src='../TriviaGame/assets/images/0.gif'><br>");
} else if (grade < 60) {
    answerDisplay.append("<h4>Bring a rabbit's foot for luck next time!</h4>");
    answerDisplay.append("<img src='../TriviaGame/assets/images/60.gif'><br>");
} else if (grade === 60) {
    answerDisplay.append("<h4>Aw so close to perfect!</h4>");
    answerDisplay.append("<img src='../TriviaGame/assets/images/80.gif'><br>");
} else {
    answerDisplay.append("<h4>Wow! Somebunny is smart!</h4>");
    answerDisplay.append("<img src='../TriviaGame/assets/images/100.gif'><br>");
}

answerDisplay.append("<p>Correct Answer: " + right + "</p>");
answerDisplay.append("<p>Incorrect Answer: " + wrong + "</p>");
answerDisplay.append("<p>Unanswered Answer: " + unanswered + "</p>");

//restart the variables
questionCount = 0;
right = 0;
wrong = 0;
unanswered = 0;
grade = 0;

//play again button
startButtonDisplay.html("<button type='button' class='btn btn-danger' id='again'>PLAY AGAIN?</button>");
$("#again").on("click", questions)

}

//function to show the questions
function questions() {

console.log("went through question");

//display of questions & answers
if (questionCount < test.length) {

    //restarts the variables
    answerCorrect = "";
    answerIncorrect = "";

    //hides the button
    startButtonDisplay.text("");

    //display the time for the question
    seconds = 10;
    timeDisplay.text("Time remaining left: " + seconds + " seconds");
    interval = setInterval(countDown, 1000) //remember to change this later!
    answerDisplay.text("");

    //displays the question
    questionDisplay.text(test[questionCount].question);

    //displays each choice
    for (var i = 0; i < 4; i++) {
        answerDisplay.append("<h5 id=answer" + i + ">" + test[questionCount].choices[i] + "</h5>");
    }

    //shows the answer page if you select the wrong answer
    if (test[questionCount].answer == test[questionCount].choices[0]) {
        console.log("went through 0");

        $("#answer0").on("click", rightAnswer);
        $("#answer1").on("click", wrongAnswer);
        $("#answer2").on("click", wrongAnswer);
        $("#answer3").on("click", wrongAnswer);


    } else if (test[questionCount].answer == test[questionCount].choices[1]) {
        console.log("went through 1");

        $("#answer0").on("click", wrongAnswer);
        $("#answer1").on("click", rightAnswer);
        $("#answer2").on("click", wrongAnswer);
        $("#answer3").on("click", wrongAnswer);

    } else if (test[questionCount].answer == test[questionCount].choices[2]) {
        console.log("went through 2");

        $("#answer0").on("click", wrongAnswer);
        $("#answer1").on("click", wrongAnswer);
        $("#answer2").on("click", rightAnswer);
        $("#answer3").on("click", wrongAnswer);

    } else if (test[questionCount].answer == test[questionCount].choices[3]) {
        console.log("went through 3");

        $("#answer0").on("click", wrongAnswer);
        $("#answer1").on("click", wrongAnswer);
        $("#answer2").on("click", wrongAnswer);
        $("#answer3").on("click", rightAnswer);

    }

} else {
    countPage();
}
}

//function to show the start button
function start() {
console.log("went through start");
startButtonDisplay.html("<button type='button' class='btn btn-danger' id='start'>START</button>");
$("#start").on("click", questions)
}

//Main game sections
start();