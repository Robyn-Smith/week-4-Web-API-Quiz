var highscores = document.getElementById("highscores")
for (var i = 0; i < localStorage.length; i++) {

    var participant = localStorage.key(i);
    var score = localStorage.getItem(participant);
    
        var result = document.createElement("div");
        result.classList.add("result");
    
        result.innerHTML = `<li class="score-item">${participant}</li>
               <li class="score-item">${score}</li>`
        
        highscores.appendChild(result);
    }


// for (let i = 0; i < localStorage.length; i++)  {      
//    let key = localStorage.key(i);
//    console.log(localStorage.getItem(key));
// }

// //add scores.js for local storage
// var scoresheet = document.getElementById("scoresheet")
// var backtoQuiz = document.getElementById("backtoquiz")

// function onBackToQuiz() {
//     window.location.href = "index.html"; //.............................................
// }

// for (var i = 0; i < localStorage.length; i++) {

//     var initials = localStorage.key(i);
//     var score = localStorage.getItem(initials);

//     var result = document.createElement("div");
//     result.classList.add("result");

//     result.innerHTML = '<div class="score-item">${initials}</div>'
//             '<div class="score-item">${score}</div>'

//     scoresheet.appendChild(result);
// }

// backtoQuiz.addEventListener("click", onBackToQuiz);