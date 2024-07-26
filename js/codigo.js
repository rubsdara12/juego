const cerrar = document.getElementById("btning");
const captura = document.getElementById("captura");
const showdata = document.getElementById("showdata");
let usuario= document.getElementById("nombre").value;



if (localStorage.getItem("consulta") == "si"){
   showdata.showModal();
   $("#mensaje").html(localStorage.getItem("resultado"));
   delete localStorage.consulta;
 }
  
  
if (localStorage.getItem("usuario") == null) {window.onload = function() { 
  // también se puede usar window.addEventListener('load', (event) => {
  captura.showModal();
}}

$("#limpiar").on("click",function(){
  // localStorage.clear;
  delete localStorage.usuario;
});

// const marcador = document.getElementById("Marcador");

$("#Marcador").on("click",function(){
    $.ajax({
      url: "traerdatos.php",
     }).done(function(rtaphp){

      // $("#mensaje").html(rtaphp);
      localStorage.setItem("consulta", "si");
      localStorage.setItem("resultado", rtaphp);
      showdata.showModal();
      timeout: 2000000;
      // alert (rtaphp);
      }).fail(function() {
        alert('Error');})
  alert("pulse aceptar para continuar");

 });

cerrar.addEventListener('click',function(){
  usuario= document.getElementById("nombre").value;
  localStorage.setItem("usuario", usuario);
  captura.close();
})


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
      gana=1;
    } else {
      result.innerHTML += "<br>¡Perdiste!";
      losses++;
      gana=0;
    }

    let datos= "nombre="+localStorage.getItem("usuario")+"&resultado="+gana;
    // alert (datos);
    $.ajax({
      method: "POST",
      url: "datos.php",
      data: datos,
    })

    scoreWins.textContent = wins;
    scoreLosses.textContent = losses;
  }
  
  