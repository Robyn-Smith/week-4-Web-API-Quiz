// all questions, answers and choices have been placed into arrays at the top of the javascript code so that it can 
//be accessed and refered to within code.
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

var home = document.getElementById("home")                      //starting page
var beginQuiz = document.getElementById("beginQuiz")            //starting button

var quiz = document.getElementById("quiz")                      //quiz page
var timer = document.getElementById("timer")                    //timer
var choices = document.getElementById("choices")                // all available choices wrong and write answers
var message = document.getElementById("message")                //message telling user if they have answered correctly or incorrectly

var endPage = document.getElementById("endPage")                 //final page
var saveScore = document.getElementById("saveScore")             //save score button
var tryAgain = document.getElementById("tryAgain")               //redo quiz button
var end = document.getElementById("end")                         //where the total score is displayed

var seconds = 0;                                                  //variable relating to timer, data type set to number
var score = 0;                                                    //variable refering to the player's score, data type set to number
var currentQuestion = 0;                                          //variable refering to current question, data type set to number
var countdown;                                                    //variable relating to timer decrement used in function
  
//These are all global variables that can be accessed and referred to by the whole script.

function onPlayGame() {
  seconds = 75;                              //timer is set at 75 seconds.
  currentQuestion = -1;                      //This funtion must start at the first question. This is why current question
  score = 0;                                 //has been set to -1 as the first question was missing when this was set to zero.
  countdown = setInterval(function (){       //this starts the timer
      if (seconds > 0) {
          timer.textContent = seconds;
      } else {                                //this ends the counter the quiz
          endGame();
      }
      seconds--;                              //this decrements the timer
  }, 1000);
  home.style.display = "none";                //this hides the home and end sections and shows the quiz, questions and anwers
  endPage.style.display = "none";
  quiz.style.display = 'flex';
  showQuestion();                             //displays first question
}
//This function sets the timer to 75 seconds and decrements (counts down). Once the seconds reach zero the quiz will end.
//It also hides the home page and end page and displays the quiz page including the question.

function showQuestion() {
  currentQuestion++;                          //this increments the questions by one so that the script can move onto the next question in the array.
  console.log('current question is ' + currentQuestion); //this logs a string in the console stating what the current question is, which will go up by one every time a new question is displayed.
  if (currentQuestion >= questions.length) {    //this checks to see if there are any other questions left
      endGame();                                // and if there are none ends the game
      return;
  }
  var question = questions[currentQuestion];      //this loads the question from the array
  document.getElementById("question").textContent = question.title  //text content adds the question from the array onto the webpage as a string
  choices.innerText = "";                         // this removes any previous question choices so only the choices specific to the current question appear
  
  for (var i = 0; i < question.choices.length; i++) {   //this loops through the choices and outputs the new options, relating to new current question
      var option = document.createElement("li");      //this variable creates a list element
      option.textContent = question.choices[i];       //this sets the text content of the list as the choices from the array relating to the current question
      option.onclick = onChosenAnswer;                //an event handler has been given to this funtion so that the user can select/click on an answer
      option.classList.add("option");                 //this adds choices to html
       choices.appendChild(option);                   //this options variale (list elements) is now a child of choices
  } 
 }  
//this function increments the current question and loops through the questions and choices/answers, displaying 
//the correct options for each question. 

function onChosenAnswer(event) {
  var correctAnswer = questions[currentQuestion].answer;
  var userAnswer = event.target.textContent;

  if (correctAnswer === userAnswer) {                         //compares the correct value and data type with users selection
      score++;                                                //increments score
      document.getElementById('correct-sound').play();        //correct sound played
      showMessage('Correct!✅')                               //message is shown

  } else {
      seconds -= 5;                                           //this decrements the timer
      document.getElementById('incorrect-sound').play();      //incorrect sound added
      showMessage('Incorrect❎');                             //message is shown
  }

  showQuestion();                                             //this shows the next question
}
//this function checks for the correct answer as specified in the array and compares with the users selection.
//if the coorect answer is selected the score with increment, the correct sound will play and a correct message will be shown
//if the user selects the wrong after 5 seconds will be deducted from the timer, the incorrect sound will play and a incorrect message will be shown.

function showMessage(msg) {
  message.textContent = msg;                                   //this adds the message as a string to html

  setTimeout(function () {                                      //this removes the message after one second
      message.textContent = " ";
  }, 1000);
}

function endGame() {
    clearInterval(countdown);                               //this stops the timer
    timer.textContent = ""                                  //this removes the timer so that the number is no longer displayed.
    quiz.style.display = "none";                            //this hides the quiz and questions
    endPage.style.display = "flex"                          //this reveals the end page
    end.textContent = "Your total score is:" + score;       //this adds a string telling the user their total score and adds on the value of their score
  }
//this function is used at the end of the game, it removes the timer and quiz from view, displays the final section and score

function onSaveScore(event) {
  var player = document.getElementById("player").value
    if (player !== "") {
      localStorage.setItem(player, score);
      document.getElementById("player").value = "";
  }
}
//this funtion contains a local variable refering to the player's initials. It checks if the user has entered 
//anything and if they have, saves it to local storage along with the score value.

beginQuiz.addEventListener("click", onPlayGame);
saveScore.addEventListener("click", onSaveScore);
tryAgain.addEventListener("click", onPlayGame);
//the event listeners have been added to the end of the code so that they can use the previous code functions to 
//carry out the desired actions when the buttons are clicked.

localStorage.setItem("player", JSON.stringify(score));
//local storage can only store strings so JSON.stringify was used to convert the score into a string data type 
//rather than a number to then save both that and the player's initials in local storage.

