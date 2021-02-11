"use strict"
var save_or_not = 0;
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
save_or_not = parseInt(localStorage.getItem('save_or_not_save'));


var pseudo;
var save_or_not = 0;
var photo_profil_player = 1;
const profil = document.getElementById("button_profil");
const profil_print = document.getElementById("profil_flex");
const profil_inner = document.getElementById('profilpopup')
var imgProfil = document.getElementById('imageprofil')
var nomProfil = document.getElementById('nomProfil')
var gold_nav = document.getElementById('gold_nav')
var gold_profil = document.getElementById("gold_profil")
var gold = 100;
gold_nav.innerHTML = 100;
gold_profil.innerHTML = 100;
save_or_not = localStorage.getItem("save_or_not_save");

var gold_score_deffine = 0;
gold_score_deffine = localStorage.getItem("gold_score_deffine_save");

if (save_or_not != 1) {
  connect_page.style.display = "flex";
}else {
  pseudo = localStorage.getItem("pseudo_save");
  if(pseudo == null) {
      pseudo = "Sans nom 1"
  }
  console.log(pseudo);
  photo_profil_player = parseInt(localStorage.getItem("photo_profil_player_save"));
  test_profil_fonction();
  nomProfil.innerHTML = pseudo
  if(gold_score_deffine == 1){
      gold = parseInt(localStorage.getItem("gold_save"));
      gold_nav.innerHTML = parseInt(localStorage.getItem("gold_save"));
      gold_profil.innerHTML = parseInt(localStorage.getItem("gold_save"));

  };

}


profil.addEventListener('click', event => {
    profil_print.style.display = "flex";
    console.log("profil afficher");
});
profil_print.addEventListener('click', function(e) {
    if (profil_inner.contains(e.target)){
        profil_print.style.display = "flex";
        console.log("profil à l'interieur");
    } else{
        profil_print.style.display = "none";
        console.log("profil à l'éxtèrieur");
    }
});

function test_profil_fonction(){
    if(photo_profil_player == 1){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../images/photo_profil_1.png');
        newIMG.setAttribute('alt', 'img_profil1');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else if (photo_profil_player == 2){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../images/photo_profil_2.png');
        newIMG.setAttribute('alt', 'img_profil2');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else {
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../images/photo_profil_3.png');
        newIMG.setAttribute('alt', 'img_profil3');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    };
};



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
  button.setAttribute("src", "../Images/boutton_on.png");
  score += point;
  score += bonus;
  print_score.innerText = score;
  gold += point;
  gold += bonus;
  localStorage.setItem('gold_save', gold);
  // addElement()
  bonus_timer += 0.5;
  gold_score_deffine = 1
  localStorage.setItem('gold_score_deffine_save', gold_score_deffine);
  save_or_not = 1
  localStorage.setItem('save_or_not_save', save_or_not);
  if(bonus_timer >= 100) {
    bonus_timer = 100
    star.style.visibility = ""
  }
  bare_boost_vert.style.height = `${bonus_timer}%` ;
};
button.onmouseup = function() {
  button.setAttribute("src", "../Images/boutton_off.png")
};
button.onmouseleave = function() {
  button.setAttribute("src", "../Images/boutton_off.png")
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

