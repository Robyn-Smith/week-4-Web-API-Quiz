// list of all questions, choices, and answers
var questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: [
        'numbers and strings',
        'other arrays',
        'booleans',
        'all of the above',
      ],
      answer: 'all of the above',
    },
    {
      title:
        'String values must be enclosed within ____ when being assigned to variables.',
      choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      answer: 'quotes',
    },
    {
      title:
        'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
      answer: 'console.log',
    },
  ];

  var startQuiz = document.getElementById("startQuiz")
  // jsn reccoments doing just this first
  //var saveScore = document.getElementById("saveScore")
  //var viewScore = document.getElementById("viewScore")
  //var playAgain = document.getElementById("playAgain")

  var welcome = document.getElementById("welcome")
  //welcome screen 
  var quiz = document.getElementById("quiz")
  //quiz screen
  var result = document.getElementById("result")
  //result screen
  //all 3 of these going to be hiding and showing so need to work on straight away

  var options = document.getElementById("options")
  //answers and wrong choices
  var message = document.getElementById("message")
  //youve answered right or wrong

  var timer = document.getElementById("timer")
  //might be changing to countdown

  var summary = document.getElementById("summary")
  //where the results/scores are

  var secondsLeft = 0;
  var score = 0;
  var currentQuestion = 0;
  var countdownTimer;
  //global variables can be accessed by whole script.
  //timer/seconds left will decriment
  //score will increment dpending how many answered correct
  //current quesion so know which question you are on this will always increment by one
  //in order to stop game need to clear interval the countdown timer is global variable so program can grab that to stop game

  function stopGame() {

    // Stop countdown timer -jsn comment
    clearInterval(countdownTimer);

    //clear the timer - jsn comment
    timer.textContent = ""

    //Hide the questions and show result- jsn comment
    quiz.style.display = "none";
    result.style.display = "flex"

    //display the score- jsn comment
    summary.textContent = "Your Score is:" + score;

  }

  function onSaveScore(e) {
    //e standing for event?
    var initials = document.getElementById("initials").value
  }
