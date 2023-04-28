var highscores = document.getElementById("highscores")
for (var i = 0; i < localStorage.length; i++) {

    var participant = localStorage.key(i);
    var score = localStorage.getItem(participant);
    
        var list = document.createElement("div");
        list.classList.add("list");
    
        list.innerHTML = `<li id="score-item" class = "participant">${participant}</li><li id="score-item" class = "score">${score}</li>`
               
        
        highscores.appendChild(list);
    }

