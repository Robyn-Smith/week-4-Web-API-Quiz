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
//timer/seconds will decrement
//score will increment dpending how many answered correct
//current quesion so know which question you are on this will always increment by one
//in order to end game need to clear interval the countdown timer is global variable so any part of program can grab that to end game


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

  function endGame() {
    clearInterval(countdown);                               //this stops the timer
    timer.textContent = ""                                  //this removes the timer so that the number is no longer displayed.
    quiz.style.display = "none";                            //this hides the quiz and questions
    endPage.style.display = "flex"                          //this reveals the end page
    end.textContent = "Your total score is:" + score;       //this adds a string telling the user their total score and adds on the value of their score
  }
//this function is used at the end of the game, it removes the timer and quiz from view, displays the final section and score

  function onSaveScore(event) {
    var participant = document.getElementById("participant").value
    if (participant !== "") {
        localStorage.setItem(participant, score);
        document.getElementById("participant").value = "";
    }
  }
  //this funtion contains a local variable refering to the participant's initials. It checks if the user has entered 
  //anything and if they have, saves it to local storage along with the score value.

  function onChosenAnswer(event) {
    var correctAnswer = questions[currentQuestion].answer;
    var userAnswer = event.target.textContent;
    //e means event?
  

    if (correctAnswer === userAnswer) {
        score++;
        document.getElementById('correct-sound').play();
        showMessage('Correct!✅')


    } else {
        seconds -= 5;
        document.getElementById('incorrect-sound').play();
        showMessage('Incorrect❎'); 
    }
//criteria asks time to go faster if incorrect

    //call up next question - jsn comment
    showQuestion();
  }

  function showMessage(msg) {
    //change msg to message?

    //show the message- jsn comment
    message.textContent = msg;

    //Clear the message after 1 second- jsn comment
    setTimeout(function () {
        message.textContent = " ";
    }, 1000);
    //add string to text content?
  }

  function showQuestion() {
    //increment to get next question -jsn comment
    currentQuestion++;

    console.log('current question is ' + currentQuestion);
    //change string

    //have we run out of questions?
    if (currentQuestion >= questions.length) {
        endGame();
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
        option.onclick = onChosenAnswer;
        //assigned event handler
        option.classList.add("option");
        //added sub choices to html

        choices.appendChild(option);
    }
    
  }

beginQuiz.addEventListener("click", onPlayGame);
//jsn says start with this
saveScore.addEventListener("click", onSaveScore);

tryAgain.addEventListener("click", onPlayGame);

var highscores = {
  participant: participant,
  score: score,
};

localStorage.setItem("participant", JSON.stringify(score));

//styling
//your score is box
end.setAttribute("style", "font-size: 25px; font-weight: bold; border-radius: 5px;");
document.getElementById("end").style.backgroundColor = "rgba(255, 255, 255, 0.537)";

//quiz box
quiz.setAttribute("style", "font-size: 25px; font-weight: bold; border-radius: 5px;");
document.getElementById("quiz").style.backgroundColor = "rgba(255, 255, 255, 0.537)";