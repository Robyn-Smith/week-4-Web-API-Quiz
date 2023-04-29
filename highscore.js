var highscores = document.getElementById("highscores")
for (var i = 0; i < localStorage.length; i++) {

    var player = localStorage.key(i);
    var score = localStorage.getItem(player);
    
        var list = document.createElement("li");
        list.classList.add("list");
    
        list.innerHTML = `<li id="score-item" class = "player">${player}</li><li id="score-item" class = "score">${score}</li>`
        highscores.appendChild(list);
    }

//this for loop retrieves the key (player's initials) and the value (score) from local storage and creates a
//list element. It thenadds the player's initials and score to list, and appends as a child of highscores.
// the increment and length are used so that all values from local storage are added and displayed on the html as 
//list elements.
