"use strict"
const rouge = document.getElementById("jeton_rouge");
const bleu = document.getElementById("jeton_bleu");
const marron = document.getElementById("jeton_marron");
const vert = document.getElementById("jeton_vert");
const rose = document.getElementById("jeton_rose");
const violet = document.getElementById("jeton_violet");
const orange = document.getElementById("jeton_orange");
const jaune = document.getElementById("jeton_jaune");
const print_choix_color = document.getElementById("color_select");
const print_choix_vrai_faux = document.getElementById("black_white");
const print_score = document.getElementById("score");
const print_win = document.getElementById("win_flex");
const continuer_button_win = document.getElementById("button_win");
const print_defete = document.getElementById("defete_flex");
const continuer_button_defete = document.getElementById("button_defete");
var compteur = 0; // compteur pour verifier tout les 5 jetons
var vie = 12;//nombre de vie
var verif = [0,0,0]; // liste [nombre de jeton validé, nombre de jeton mal plasé, nombre de jeton nul]
var colors_player = [0,0,0,0,0];
var colors_ia = [0,0,0,0,0];
var copy = [0,0,0,0,0];
var score = 0;
var vie_copy = 0;
var save_or_not = parseInt(localStorage.getItem('save_or_not_save'));
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
print_score.innerHTML = parseInt(localStorage.getItem("gold_save"));

var gold_score_deffine = 0;
gold_score_deffine = localStorage.getItem("gold_scpre_deffine_save");

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

    
function ia_select_color() {
    for(let i = 0; i <= 4; i++){
        colors_ia[i] = Math.floor(Math.random() * 8) + 1  
    };
};
function ia_verif() {
    let colors_ia_copy = [].concat(colors_ia)
    for(let i = 0; i <= 4; i++){
        if(colors_ia[i] == colors_player[i]){
            verif[0] += 1;
        }; 
    };

    
    for(let i = 0; i <= 4; i++){
        if(colors_player[i] == colors_ia_copy[0]){
            verif[1] += 1;
            colors_ia_copy[0] = 0;
        }else if(colors_player[i] == colors_ia_copy[1]){
            verif[1] += 1;
            colors_ia_copy[1] = 0;
        }else if(colors_player[i] == colors_ia_copy[2]){
            verif[1] += 1;
            colors_ia_copy[2] = 0;
        }else if(colors_player[i] == colors_ia_copy[3]){
            verif[1] += 1;
            colors_ia_copy[3] = 0;
        }else if(colors_player[i] == colors_ia_copy[4]){
            verif[1] += 1;
            colors_ia_copy[4] = 0;
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
        print_choix_vrai_faux.appendChild(newIMG);
    };
    for(let i = 0; i <= verif[1]-1; i++){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../Images/blanc.png');
        newIMG.setAttribute('alt', 'colors_blanc');
        newIMG.setAttribute('id', 'blanc');
        print_choix_vrai_faux.appendChild(newIMG);
    };
    for(let i = 0; i <= verif[2]-1; i++){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../Images/vide.png');
        newIMG.setAttribute('alt', 'colors_vide');
        newIMG.setAttribute('id', 'vide');
        print_choix_vrai_faux.appendChild(newIMG);
    };
    
    
};
function lose_mastermind(){
    print_defete.style.display = 'flex';
    continuer_button_defete.onclick = function() {
        print_defete.style.display = 'none';
        document.location.reload();
    };
};
function win_mastermind(){
    vie_copy = [].concat(vie)
    score += 100 * vie_copy;
    gold += score
    localStorage.setItem('gold_save', gold);
    print_score.innerText = gold;

    localStorage.setItem('score_save', score);
    gold_score_deffine = 1
    localStorage.setItem('gold_score_deffine_save', gold_score_deffine);
    save_or_not = 1
    localStorage.setItem('save_or_not_save', save_or_not);
    print_win.style.display = 'flex';
    continuer_button_win.onclick = function() {
        print_win.style.display = 'none';
        document.location.reload();
    };
};
function print_choix_color_fonc(color, id) {
    let newIMG = document.createElement('img');
    newIMG.setAttribute('src', '../Images/' + color + '.png');
    newIMG.setAttribute('alt', 'colors_' + color);
    newIMG.setAttribute('id', color);
    print_choix_color.appendChild(newIMG);
    colors_player[compteur] = id
    compteur ++;
    
    if( compteur == 5 ){
        ia_verif()

        if(verif[0] == 5){
            win_mastermind();
        }else{
            verif = [0,0,0]
            compteur = 0;
            vie -= 1;
        }
    }
    if(vie <= 0){
        lose_mastermind()
    }
    
} 

rouge.onclick = function() {
    console.log("rouge")
    print_choix_color_fonc("rouge", 1)
}
bleu.onclick = function() {
    console.log("bleu")
    print_choix_color_fonc("bleu", 2)
}
marron.onclick = function() {
    console.log("marron")
    print_choix_color_fonc("marron", 3)
}
vert.onclick = function() {
    console.log("vert")
    print_choix_color_fonc("vert", 4)
}
rose.onclick = function() {
    console.log("rose")
    print_choix_color_fonc("rose", 5)
}
violet.onclick = function() {
    console.log("violet")
    print_choix_color_fonc("violet", 6)
}
orange.onclick = function() {
    console.log("orange")
    print_choix_color_fonc("orange", 7)
}
jaune.onclick = function() {
    console.log("jaune")
    print_choix_color_fonc("jaune", 8)
}

ia_select_color();
console.log(colors_ia)