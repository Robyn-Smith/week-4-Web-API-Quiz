var highscores = document.getElementById("highscores")
for (var i = 0; i < localStorage.length; i++) {

    var participant = localStorage.key(i);
    var score = localStorage.getItem(participant);
    
        var result = document.createElement("div");
        result.classList.add("result");
    
        result.innerHTML = `<li id="score-item">${participant}</li><li id="score-item">${score}</li>`
               
        
        highscores.appendChild(result);
    }