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

//buttons.....
  var beginQuiz = document.getElementById("beginQuiz")
  // jsn reccoments doing just this first
  var saveScore = document.getElementById("saveScore")
 // var viewScore = document.getElementById("viewScore") ..... not being used rn
  var tryAgain = document.getElementById("tryAgain")



  //pages....
  var home = document.getElementById("home")
  //home screen 
  var quiz = document.getElementById("quiz")
  //quiz screen
  var result = document.getElementById("result")
  //result screen
  //all 3 of these going to be hiding and showing so need to work on straight away

  var choices = document.getElementById("choices")
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
  //in order to stop game need to clear interval the countdown timer is global variable so any part of program can grab that to stop game
  
  
  // function onhome (){
  //   home.style.display = "flex";
  //   result.style.display = "none";
  //   quiz.style.display = 'none';
  // }
  


  function onStartGame() {

    //set timer at 75 seconds- jsn comment
    secondsLeft = 75;

    //start at the first questions - jsn comment
    //changed to minus one so that the array starts from question zero, 
    //this solved the missing first question problem
    currentQuestion = -1;

    //reset the score -jsn comment
    score = 0;

    //start timer - jsn comment
    countdownTimer = setInterval(function (){
        if (secondsLeft > 0) {
            timer.textContent = secondsLeft;

        } else {
            //stop the counter and end game - jsn comment
            stopGame();
        }
        secondsLeft--;
    }, 1000);

    //hide home section - jsn comment
    home.style.display = "none";
    result.style.display = "none";
    quiz.style.display = 'flex';

    //display the first question -jsn comment
    displayQuestion();
  }

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

    // home.style.display = "none";
    // quiz.style.display = 'none';
    // result.style.display = "flex";
    

  }

  function onSaveScore(event) {
    //e standing for event?
    var participant = document.getElementById("participant").value

    //if we have valid participant, save the score to local storage -jsn comment
    if (participant !== "") {
        localStorage.setItem(participant, score);

        document.getElementById("participant").value = "";
    }
  }

 // function onViewScores(e) {
    //window.location.href = '';
    //link to scores.html............................................................. not being used rn
 // }

  function onSelectAnswer(event) {
    var correctAnswer = questions[currentQuestion].answer;
    var userAnswer = event.target.textContent;
    //e means event?
  

    if (correctAnswer === userAnswer) {
        score++;
        document.getElementById('correct-sound').play();

        displayMessage('Correct!✅')


    } else {
        secondsLeft -= 5;
        document.getElementById('incorrect-sound').play();
        displayMessage('Incorrect❎'); 
    }
//criteria askstime to go faster if incorrect

    //call up next question - jsn comment
    displayQuestion();
  }

  function displayMessage(msg) {
    //change msg to message?

    //display the message- jsn comment
    message.textContent = msg;

    //Clear the message after 1 second- jsn comment
    setTimeout(function () {
        message.textContent = " ";
    }, 1000);
    //add string to text content?
  }

  function displayQuestion() {
    //increment to get next question -jsn comment
    currentQuestion++;

    console.log('current question is ' + currentQuestion);
    //change string

    //have we run out of questions?
    if (currentQuestion >= questions.length) {
        stopGame();
        return;
    }

    //load question information from the question array - jsn comment
    var question = questions[currentQuestion];
    document.getElementById("question").textContent = question.title
    //text content adds in question

    //clear any existing choices - jsn comment
    choices.innerHTML = "";
    //can use text content instead?
    //removes previous question answers

    //load through the choices and output the new possible choices - jsn comment
    for (var i = 0; i < question.choices.length; i++) {

        var option = document.createElement("li");
        //created div
        option.textContent = question.choices[i];
        option.onclick = onSelectAnswer;
        //assigned event handler
        option.classList.add("option");
        //added sub choices to html

        choices.appendChild(option);
    }
    
  }

beginQuiz.addEventListener("click", onStartGame);
//jsn says start with this
saveScore.addEventListener("click", onSaveScore);
//viewScore.addEventListener("click", onViewScores); ------------------------
tryAgain.addEventListener("click", onStartGame);

var highscores = {
  participant: participant,
  score: score,
};

localStorage.setItem("participant", JSON.stringify(score));

//styling
//your score is box
summary.setAttribute("style", "font-size: 25px; font-weight: bold; border-radius: 5px;");
document.getElementById("summary").style.backgroundColor = "rgba(255, 255, 255, 0.537)";

//quiz box
quiz.setAttribute("style", "font-size: 25px; font-weight: bold; border-radius: 5px;");
document.getElementById("quiz").style.backgroundColor = "rgba(255, 255, 255, 0.537)";