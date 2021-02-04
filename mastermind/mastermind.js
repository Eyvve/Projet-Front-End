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
var compteur = 0; // compteur pour verifier tout les 5 jetons
var vie = 12;//nombre de vie
var verif = [0,0,0]; // liste [nombre de jeton validé, nombre de jeton mal plasé, nombre de jeton nul]
var colors_player = [0,0,0,0,0];
var colors_ia = [0,0,0,0,0];
var copy = [0,0,0,0,0];

function ia_select_color() {
    for(let i = 0; i <= 4; i++){
        colors_ia[i] = Math.floor(Math.random() * 8) + 1  
    };
};
function ia_verif() {
    console.log(colors_player);
    console.log(colors_ia + "ia post");
    let colors_ia_copy = colors_ia;
    console.log(colors_ia + "ia apres");
    console.log(colors_ia_copy + "copy apres");

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
        newIMG.setAttribute('src', './images/noir.png');
        newIMG.setAttribute('alt', 'colors_noir');
        newIMG.setAttribute('id', 'noir');
        print_choix_vrai_faux.appendChild(newIMG);
    };
    for(let i = 0; i <= verif[1]-1; i++){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './images/blanc.png');
        newIMG.setAttribute('alt', 'colors_blanc');
        newIMG.setAttribute('id', 'blanc');
        print_choix_vrai_faux.appendChild(newIMG);
    };
    for(let i = 0; i <= verif[2]-1; i++){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './images/vide.png');
        newIMG.setAttribute('alt', 'colors_vide');
        newIMG.setAttribute('id', 'vide');
        print_choix_vrai_faux.appendChild(newIMG);
    };
    
    
};
function lose_mastermind(){
    alert("vous avez perdu")
    document.location.reload();
};
function win_mastermind(){
    alert("vous avez gagné")
    document.location.reload();
}
function print_choix_color_fonc(color, id) {
    let newIMG = document.createElement('img');
    newIMG.setAttribute('src', './images/' + color + '.png');
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
document.get

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
console.log(colors_ia);
copy = colors_ia;