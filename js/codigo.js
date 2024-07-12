
  function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  let wins = 0;
  let losses = 0;
  
  document.getElementById('rock').addEventListener('click', function() {
    playGame(1);
  });
  
  document.getElementById('paper').addEventListener('click', function() {
    playGame(2);
  });
  
  document.getElementById('scissors').addEventListener('click', function() {
    playGame(3);
  });
  
  function playGame(playerChoice) {
    let pc = aleatorio(1, 3);
  
    let result = document.getElementById('result');
    let scoreWins = document.getElementById('wins');
    let scoreLosses = document.getElementById('losses');
  
    let choices = ["🥌", "📰", "✂"];
    let playerEmoji = choices[playerChoice - 1];
    let pcEmoji = choices[pc - 1];
  
    result.innerHTML = `Elegiste ${playerEmoji}. PC eligió ${pcEmoji}.`;
  
    if (playerChoice == pc) {
      result.innerHTML += "<br>¡Empate!";
    } else if ((playerChoice == 1 && pc == 3) || (playerChoice == 2 && pc == 1) || (playerChoice == 3 && pc == 2)) {
      result.innerHTML += "<br>¡Ganaste!";
      wins++;
    } else {
      result.innerHTML += "<br>¡Perdiste!";
      losses++;
    }
  
    scoreWins.textContent = wins;
    scoreLosses.textContent = losses;
  }
  