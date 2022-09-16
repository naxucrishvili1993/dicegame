
function startGame() {
   let randomNumber1 = Math.floor((Math.random() * 6) + 1);
   let randomLeftImage = 'images/dice' + randomNumber1 + '.png';
   
   let randomNumber2 = Math.floor((Math.random() * 6) + 1);
   let randomRightImage = 'images/dice' + randomNumber2 + '.png';
   
   document.querySelector(".img1").setAttribute("src", randomLeftImage);
   document.querySelector(".img2").setAttribute("src", randomRightImage);
   
   if(randomNumber1 > randomNumber2) {
      document.querySelector("h1").textContent = "🚩 Player 1 Wins!"
   } else if(randomNumber1 < randomNumber2) {
      document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
   } else {
      document.querySelector("h1").textContent = "Draw!";
   }
   
}