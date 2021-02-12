// variables jeu

"use strict"
const Rouge = document.getElementById("jeton_rouge");
const Bleu = document.getElementById("jeton_bleu");
const Marron = document.getElementById("jeton_marron");
const Vert = document.getElementById("jeton_vert");
const Rose = document.getElementById("jeton_rose");
const Violet = document.getElementById("jeton_violet");
const Orange = document.getElementById("jeton_orange");
const Jaune = document.getElementById("jeton_jaune");
const printChoixColor = document.getElementById("color_select");
const printChoixVraiFaux = document.getElementById("black_white");
const printScore = document.getElementById("score");
const printWin = document.getElementById("win_flex");
const continueWinButton = document.getElementById("button_win");
const printDefeat = document.getElementById("defete_flex");
const continueDefeatButton = document.getElementById("button_defete");
var Compteur = 0; // Compteur pour verifier tout les 5 jetons
var vie = 12;//nombre de vie
var verif = [0,0,0]; // liste [nombre de jeton validé, nombre de jeton mal plasé, nombre de jeton nul]
var colorsPlayer = [0,0,0,0,0];
var colorsIa = [0,0,0,0,0];
var copy = [0,0,0,0,0];
var score = 0;
var vieCopy = 0;
var save_or_not = parseInt(localStorage.getItem('save_or_not_save'));

// variables profil

var pseudo;
var save_or_not = 0;
var photo_profil_player = 1;
const profil = document.getElementById("button_profil");
const profil_print = document.getElementById("profil_flex");
const profil_inner = document.getElementById('profilpopup')
var imgProfil = document.getElementById('imageprofil')
var nomProfil = document.getElementById('nomProfil')
var gold = 100;
var gold_nav = document.getElementById('gold_nav')
var gold_profil = document.getElementById("gold_profil")
gold_nav.innerHTML = 100;
gold_profil.innerHTML = 100;
save_or_not = localStorage.getItem("save_or_not_save");
printScore.innerHTML = parseInt(localStorage.getItem("gold_save"));

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


// fonctions jeu
    
function IaSelectColor() {
    for(let i = 0; i <= 4; i++){
        colorsIa[i] = Math.floor(Math.random() * 8) + 1  
    };
};
function IaVerif() {
    let colorsIaCopy = [].concat(colorsIa)
    for(let i = 0; i <= 4; i++){
        if(colorsIa[i] == colorsPlayer[i]){
            verif[0] += 1;
        }; 
    };

    
    for(let i = 0; i <= 4; i++){
        if(colorsPlayer[i] == colorsIaCopy[0]){
            verif[1] += 1;
            colorsIaCopy[0] = 0;
        }else if(colorsPlayer[i] == colorsIaCopy[1]){
            verif[1] += 1;
            colorsIaCopy[1] = 0;
        }else if(colorsPlayer[i] == colorsIaCopy[2]){
            verif[1] += 1;
            colorsIaCopy[2] = 0;
        }else if(colorsPlayer[i] == colorsIaCopy[3]){
            verif[1] += 1;
            colorsIaCopy[3] = 0;
        }else if(colorsPlayer[i] == colorsIaCopy[4]){
            verif[1] += 1;
            colorsIaCopy[4] = 0;
        };
    };

    

    if(verif[1] != 0){
        verif[1] -= verif[0];
    };
    verif[2] = 5 - (verif[1]+verif[0]);
    

    for(let i = 0; i <= verif[0]-1; i++){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../Images/noir.png');
        newIMG.setAttribute('alt', 'colors_noir');
        newIMG.setAttribute('id', 'noir');
        printChoixVraiFaux.appendChild(newIMG);
    };
    for(let i = 0; i <= verif[1]-1; i++){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../Images/blanc.png');
        newIMG.setAttribute('alt', 'colors_blanc');
        newIMG.setAttribute('id', 'blanc');
        printChoixVraiFaux.appendChild(newIMG);
    };
    for(let i = 0; i <= verif[2]-1; i++){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../Images/vide.png');
        newIMG.setAttribute('alt', 'colors_vide');
        newIMG.setAttribute('id', 'vide');
        printChoixVraiFaux.appendChild(newIMG);
    };
    
    
};
function LoseMastermind(){
    printDefeat.style.display = 'flex';
    continueDefeatButton.onclick = function() {
        printDefeat.style.display = 'none';
        document.location.reload();
    };
};
function WinMastermind(){
    vieCopy = [].concat(vie)
    score += 100 * vieCopy;
    gold += score
    localStorage.setItem('gold_save', gold);
    printScore.innerText = gold;

    localStorage.setItem('score_save', score);
    gold_score_deffine = 1
    localStorage.setItem('gold_score_deffine_save', gold_score_deffine);
    save_or_not = 1
    localStorage.setItem('save_or_not_save', save_or_not);
    printWin.style.display = 'flex';
    continueWinButton.onclick = function() {
        printWin.style.display = 'none';
        document.location.reload();
    };
};
function PrintChoixColorFonc(color, id) {
    let newIMG = document.createElement('img');
    newIMG.setAttribute('src', '../Images/' + color + '.png');
    newIMG.setAttribute('alt', 'colors_' + color);
    newIMG.setAttribute('id', color);
    printChoixColor.appendChild(newIMG);
    colorsPlayer[Compteur] = id
    Compteur ++;
    
    if( Compteur == 5 ){
        IaVerif()

        if(verif[0] == 5){
            WinMastermind();
        }else{
            verif = [0,0,0]
            Compteur = 0;
            vie -= 1;
        }
    }
    if(vie <= 0){
        LoseMastermind()
    }
    
} 

Rouge.onclick = function() {
    console.log("Rouge")
    PrintChoixColorFonc("Rouge", 1)
}
Bleu.onclick = function() {
    console.log("Bleu")
    PrintChoixColorFonc("Bleu", 2)
}
Marron.onclick = function() {
    console.log("Marron")
    PrintChoixColorFonc("Marron", 3)
}
Vert.onclick = function() {
    console.log("Vert")
    PrintChoixColorFonc("Vert", 4)
}
Rose.onclick = function() {
    console.log("Rose")
    PrintChoixColorFonc("Rose", 5)
}
Violet.onclick = function() {
    console.log("Violet")
    PrintChoixColorFonc("Violet", 6)
}
Orange.onclick = function() {
    console.log("Orange")
    PrintChoixColorFonc("Orange", 7)
}
Jaune.onclick = function() {
    console.log("Jaune")
    PrintChoixColorFonc("Jaune", 8)
}

IaSelectColor();
console.log(colorsIa)