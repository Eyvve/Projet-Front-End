"use strict"

// function echoScoreClick(){
//     MouseEvent("click", {
        
//       });
// };

var score = 0;
var bonus = 0;
var point = 1;
var compteur_score = 0;
var bonus_timer = 0
const div = document.getElementById('score_click');
const button = document.getElementById("click_boutton");
const print_score = document.getElementById("score");
const bare_boost_vert = document.getElementById("boost_barre_vert");
const plus1 = document.getElementsByClassName('plus1');
const fuse = document.getElementById('fuse_button')
const fuse_off = document.getElementById('img_fuse')
const star = document.getElementById('star')
var myVar;
var myVar2;
star.style.visibility = "hidden"

function remouveElementPlus1() {
  var remouveID = document.getElementById(`plus${compteur_score}`)
  compteur_score ++
  remouveID.remove();
};
function addElement () {
  var newSpan = document.createElement("span");
  newSpan.className = "plus1";
  newSpan.id = `plus${compteur_score}`;
  var newContent = document.createTextNode('+1');
  newSpan.appendChild(newContent);
  var currentspan = document.getElementById('span1');
  div.insertBefore(newSpan, currentspan);

};
function hidden_star() {
  star.style.visibility = "hidden"
  if(bonus_timer <= 0.4 ){
    clearInterval(myVar2);
  };
};
function boost_compteur(){
  bonus_timer -= 0.2;
  bare_boost_vert.style.height = `${bonus_timer}%` 
  bonus = 4 
  if(bonus_timer <= 0.5 ){
    clearInterval(myVar);
    bonus_timer = 0;
    bonus = 0
  };
};

window.addEventListener('mousedown', function (e) {
  // console.log(`x: ${ e.x } | y: ${ e.y }`)
  
button.onmousedown = function() {
  button.setAttribute("src", "./click_images/boutton_on.png");
  score += point;
  score += bonus;
  print_score.innerText = score;
  // addElement()
  bonus_timer += 0.5;
  if(bonus_timer >= 100) {
    bonus_timer = 100
    star.style.visibility = ""
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

fuse.onmousedown = function() {
  if(bonus_timer == 100){
    star.style.visibility = "hidden"
    fuse.className = "fuse_fire";
    setTimeout(function(){ fuse.className = "fuse_return";}, 1000);
    setTimeout(function(){ fuse.className = "";}, 3000);
    myVar = setInterval(boost_compteur, 50);
    myVar2 = setInterval(hidden_star, 0);
    
    
  }
  else{
    fuse_off.style.animation = "shake 0.5s";
    setTimeout(function(){ fuse_off.style.animation = "";}, 1000);
  }
  
};