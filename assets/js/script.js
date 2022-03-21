var quizQuestions = [
  {
    question:"Commonly used data types DO NOT include:",
    options: ["string", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question:"The condition in an if/else statement is enclosed with _____.",
    options: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: "parenthesis",
  },
  {
    question:"Arrays in JavaScript can be used to store ____.",
    options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above",
  },
  {
    question:"String values must be enclosed within ____ when being assigned to variables.",
    options: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "commas",
  },
  {
    question:"A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log",
  },
];
var selectTimer;
var questionsDiv = document.querySelector("#questions");
var startBtn = document.getElementById("start-button");
var timer = document.querySelector("#timer");
var quizTime = quizQuestions.length * 15;
timer.textContent = quizTime;

var displayedQuestion = 0;

function displayQuestion() {
  console.log(displayedQuestion);
  var quizQ = document.createElement("paragraph");
  quizQ.textContent = quizQuestions[displayedQuestion].question;
  questionsDiv.append(quizQ);
}
