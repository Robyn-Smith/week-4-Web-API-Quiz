# week-4-Web-API-Quiz
## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```
## Description

This project uses html for structure, css for styling and javascript to add interactivity to the webpage. When the user loads the webpage they are first presented with a home screen welcoming them to the quiz. On this page they will see a large button to start the quiz and a navigation link to the highscores.html. When the user clicks on the start button they will see a question with 4 multiple choice options to select from and a timer counting down from 75 seconds. If the user selects the correct answer they will see a message saying "Correct!✅" for one second and their score will increment. If the user clicks the incorrect after they will see this message "Incorrect❎" for one second, 5 seconds will be deducted from the timer and their score will stay the same. The lowest score a player can achieve is 0 and the highest is 5. Once a question is complete the quiz will automatically show the next question and options. Once the play has answered all 5 coding questions, or if the timer reaches 0 the quiz will end. Once the game is over players are told their total score and are encouraged to leave their initials in the input box. They can then press the button to save their score which is saved in local storage and is displayed in the highscore.html along with other player's results. To access the highscores.html the user can click on the "✨Highscores✨" navigation link at any point. The player is also presented with a play again option at the end of the quiz, when pressed the quiz automatically starts again. The highscores page also has a navigation link back to the quiz which will redirect the user back to the starting page welcoming them to the quiz.

This webpage includes navigation links, header, heading, buttons, lists, main, div and section elements. All of which are styled using CSS. 

![A screenshot of the coding quiz, consiting of a timer within the purple header, a question and options for the user to choose from, a link to the highscores page with a pink background and a space themed background.](/assets/screenshot-quiz.png)

