"use strict"

// function echoScoreClick(){
//     MouseEvent("click", {
        
//       });
// };

var score = 0
var bonus = 0
const button = document.getElementById("click_boutton")
const print_score = document.getElementById("score")

button.onmousedown = function() {
  button.setAttribute("src", "./click_images/boutton_on.png")
  score ++
  score += bonus
  print_score.innerText = score
}
button.onmouseup = function() {
  button.setAttribute("src", "./click_images/boutton_off.png")
}
button.onmouseleave = function() {
  button.setAttribute("src", "./click_images/boutton_off.png")
}