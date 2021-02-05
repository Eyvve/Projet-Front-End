"use strict"

// function echoScoreClick(){
//     MouseEvent("click", {
        
//       });
// };

var score = 0;
var bonus = 0;
var point = 1;
var bonus_timer = 0
const div = document.getElementById('score_click');
const button = document.getElementById("click_boutton");
const print_score = document.getElementById("score");
const bare_boost_vert = document.getElementById("boost_barre_vert")

window.addEventListener('mousedown', function (e) {
  console.log(`x: ${ e.x } | y: ${ e.y }`)
  
button.onmousedown = function() {
  button.setAttribute("src", "./click_images/boutton_on.png")
  score += point
  score += bonus
  print_score.innerText = score;

  bonus_timer += 0.2
  if(bonus_timer >= 100) {
    bonus_timer = 100
  }
  bare_boost_vert.style.height = `${bonus_timer}%` ;
  
};
button.onmouseup = function() {
  button.setAttribute("src", "./click_images/boutton_off.png")
};
button.onmouseleave = function() {
  button.setAttribute("src", "./click_images/boutton_off.png")
};

});