// You'll create a trivia form with multiple choice or true/false options (your choice).

// * The player will have a limited amount of time to finish the quiz. 
var timerButton;

// var windowTimeout = setTimeout(function(){
//     alert("The time limit has been reached. Let's see how you did.")
// },2000);

$("#true").on("click", function(){
    timerButton = setTimeout(function(){
        alert("The time limit has been reached. Let's see how you did1.")},30000);
});

$("#false").on("click", function(){
    timerButton = setTimeout(function(){
        alert("The time limit has been reached. Let's see how you did1.")},30000);
});
//   * The game ends when the time runs out. The page will reveal the number of questions 
//     that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer. //  Start on click.
    //   $("#start").on("click", function() {
    //     //  Set the button alert's timeout to run three seconds after the function's called.
    //     delayButtonAlert = setTimeout(function() {
    //       alert("Alert #2: Called 3 seconds after the start button is clicked.")},3000);
    //   });