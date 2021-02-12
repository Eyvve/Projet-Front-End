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
const printDefeat = document.getElementById("defaitee_flex");
const continueDefeatButton = document.getElementById("button_defaitee");
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
print_score.innerHTML = parseInt(localStorage.getItem("gold_save"));
var avatarF2_vendu = 0;
var avatarH2_vendu = 0;
var avatarF3_vendu = 0;
var avatarH3_vendu = 0;
var avatarF4_vendu = 0;
var avatarH4_vendu = 0;
var avatarF5_vendu = 0;
var avatarH5_vendu = 0;
var avatarF6_vendu = 0;
var avatarH6_vendu = 0;
var inv = document.getElementById("inv");

var gold_score_deffine = 0;
gold_score_deffine = localStorage.getItem("gold_score_deffine_save")


//profil;

//detection des sauvegarde pour les charger ou non
if(save_or_not == 1) {
    pseudo = localStorage.getItem("pseudo_save");
    if(pseudo == null) {
        pseudo = "Sans nom 1"
    }
    console.log(pseudo);
    photo_profil_player = parseInt(localStorage.getItem("photo_profil_player_save"));
    test_profil_fonction();
    nomProfil.innerHTML = pseudo;
    if(gold_score_deffine == 1){
        gold = parseInt(localStorage.getItem("gold_save"));
        gold_nav.innerHTML = parseInt(localStorage.getItem("gold_save"));
        gold_profil.innerHTML = parseInt(localStorage.getItem("gold_save"));
        avatarF2_vendu = parseInt(localStorage.getItem("avatarF2_vendu_save"));
        avatarH2_vendu = parseInt(localStorage.getItem("avatarH2_vendu_save"));
        avatarF3_vendu = parseInt(localStorage.getItem("avatarF3_vendu_save"));
        avatarH3_vendu = parseInt(localStorage.getItem("avatarH3_vendu_save"));
        avatarF4_vendu = parseInt(localStorage.getItem("avatarF4_vendu_save"));
        avatarH4_vendu = parseInt(localStorage.getItem("avatarH4_vendu_save"));
        avatarF5_vendu = parseInt(localStorage.getItem("avatarF5_vendu_save"));
        avatarH5_vendu = parseInt(localStorage.getItem("avatarH5_vendu_save"));
        avatarF6_vendu = parseInt(localStorage.getItem("avatarF6_vendu_save"));
        avatarH6_vendu = parseInt(localStorage.getItem("avatarH6_vendu_save"));
        test_inv_img_vendu();
    };

}


//detection du clique sur la nav pour ouvrir le profil
profil.addEventListener('click', event => {
    profil_print.style.display = "flex";
});
profil_print.addEventListener('click', function(e) {
    if (profil_inner.contains(e.target)){
        profil_print.style.display = "flex";
    } else{
        profil_print.style.display = "none";
    }
});

var change_avatarF1 = document.getElementById("img_inv_F1")
var change_avatarH1 = document.getElementById("img_inv_H1")
var change_avatarF2 = document.getElementById("img_inv_F2")
var change_avatarH2 = document.getElementById("img_inv_H2")
var change_avatarF3 = document.getElementById("img_inv_F3")
var change_avatarH3 = document.getElementById("img_inv_H3")
var change_avatarF4 = document.getElementById("img_inv_F4")
var change_avatarH4 = document.getElementById("img_inv_H4")
var change_avatarF5 = document.getElementById("img_inv_F5")
var change_avatarH5 = document.getElementById("img_inv_H5")
var change_avatarF6 = document.getElementById("img_inv_F6")
var change_avatarH6 = document.getElementById("img_inv_H6")

//rajout des photo de profile achete dans l'inventaire
change_avatarF1.addEventListener('click', event => {
    photo_profil_player = 1
    localStorage.setItem("photo_profil_player_save", photo_profil_player);
    document.location.reload();
});
change_avatarH1.addEventListener('click', event => {
    photo_profil_player = 2
    localStorage.setItem("photo_profil_player_save", photo_profil_player);
    document.location.reload();
});
if(avatarF2_vendu == 1){
    change_avatarF2.addEventListener('click', event => {
        photo_profil_player = 3
        localStorage.setItem("photo_profil_player_save", photo_profil_player);
        document.location.reload();
    });
}
if(avatarH2_vendu == 1){
    change_avatarH2.addEventListener('click', event => {
        photo_profil_player = 4
        localStorage.setItem("photo_profil_player_save", photo_profil_player);
        document.location.reload();
    });
}if(avatarF3_vendu == 1){
    change_avatarF3.addEventListener('click', event => {
        photo_profil_player = 5
        localStorage.setItem("photo_profil_player_save", photo_profil_player);
        document.location.reload();
    });
}if(avatarH3_vendu == 1){
    change_avatarH3.addEventListener('click', event => {
        photo_profil_player = 6
        localStorage.setItem("photo_profil_player_save", photo_profil_player);
        document.location.reload();
    });
}if(avatarF4_vendu == 1){
    change_avatarF4.addEventListener('click', event => {
        photo_profil_player = 7
        localStorage.setItem("photo_profil_player_save", photo_profil_player);
        document.location.reload();
    });
}if(avatarH4_vendu == 1){
    change_avatarH4.addEventListener('click', event => {
        photo_profil_player = 8
        localStorage.setItem("photo_profil_player_save", photo_profil_player);
        document.location.reload();
    });
}if(avatarF5_vendu == 1){
    change_avatarF5.addEventListener('click', event => {
        photo_profil_player = 9
        localStorage.setItem("photo_profil_player_save", photo_profil_player);
        document.location.reload();
    });
}if(avatarH5_vendu == 1){
    change_avatarH5.addEventListener('click', event => {
        photo_profil_player = 10
        localStorage.setItem("photo_profil_player_save", photo_profil_player);
        document.location.reload();
    });
}if(avatarF6_vendu == 1){
    change_avatarF6.addEventListener('click', event => {
        photo_profil_player = 11
        localStorage.setItem("photo_profil_player_save", photo_profil_player);
        document.location.reload();
    });
}if(avatarH6_vendu == 1){
    change_avatarH6.addEventListener('click', event => {
        photo_profil_player = 12
        localStorage.setItem("photo_profil_player_save", photo_profil_player);
        document.location.reload();
    });
}

//fonction pour afficher la photo de profil choisi
function test_profil_fonction(){
    if(photo_profil_player == 1){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarF1.png');
        newIMG.setAttribute('alt', 'img_profilF1');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else if (photo_profil_player == 2){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarH1.png');
        newIMG.setAttribute('alt', 'img_profilH1');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else if (photo_profil_player == 3){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarF2.png');
        newIMG.setAttribute('alt', 'img_profilF2');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else if (photo_profil_player == 4){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarH2.png');
        newIMG.setAttribute('alt', 'img_profilH2');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else if (photo_profil_player == 5){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarF3.png');
        newIMG.setAttribute('alt', 'img_profilF3');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else if (photo_profil_player == 6){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarH3.png');
        newIMG.setAttribute('alt', 'img_profilH3');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else if (photo_profil_player == 7){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarF4.png');
        newIMG.setAttribute('alt', 'img_profilF4');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else if (photo_profil_player == 8){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarH4.png');
        newIMG.setAttribute('alt', 'img_profilH4');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else if (photo_profil_player == 9){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarF5.png');
        newIMG.setAttribute('alt', 'img_profilF5');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else if (photo_profil_player == 10){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarH5.png');
        newIMG.setAttribute('alt', 'img_profilH5');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else if (photo_profil_player == 11){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarF6.png');
        newIMG.setAttribute('alt', 'img_profilF6');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else if (photo_profil_player == 12){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarH6.png');
        newIMG.setAttribute('alt', 'img_profilH6');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }
};
//rajout des images achete dans l'inventaire
function test_inv_img_vendu(){
    if(avatarF2_vendu == 1){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarF2.png');
        newIMG.setAttribute('alt', 'img_profilF2');
        newIMG.setAttribute('class', 'img_inv');
        newIMG.setAttribute('id', 'img_inv_F2');
        inv.appendChild(newIMG);
    };
    if(avatarH2_vendu == 1){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarH2.png');
        newIMG.setAttribute('alt', 'img_profilH2');
        newIMG.setAttribute('class', 'img_inv');
        newIMG.setAttribute('id', 'img_inv_H2');
        inv.appendChild(newIMG);
    };
    if(avatarF3_vendu == 1){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarF3.png');
        newIMG.setAttribute('alt', 'img_profilF3');
        newIMG.setAttribute('class', 'img_inv');
        newIMG.setAttribute('id', 'img_inv_F3');
        inv.appendChild(newIMG);
    };
    if(avatarH3_vendu == 1){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarH3.png');
        newIMG.setAttribute('alt', 'img_profilH3');
        newIMG.setAttribute('class', 'img_inv');
        newIMG.setAttribute('id', 'img_inv_H3');
        inv.appendChild(newIMG);
    };
    if(avatarF4_vendu == 1){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarF4.png');
        newIMG.setAttribute('alt', 'img_profilF4');
        newIMG.setAttribute('class', 'img_inv');
        newIMG.setAttribute('id', 'img_inv_F4');
        inv.appendChild(newIMG);
    };
    if(avatarH4_vendu == 1){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarH4.png');
        newIMG.setAttribute('alt', 'img_profilH4');
        newIMG.setAttribute('class', 'img_inv');
        newIMG.setAttribute('id', 'img_inv_H4');
        inv.appendChild(newIMG);
    };
    if(avatarF5_vendu == 1){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarF5.png');
        newIMG.setAttribute('alt', 'img_profilF5');
        newIMG.setAttribute('class', 'img_inv');
        newIMG.setAttribute('id', 'img_inv_F5');
        inv.appendChild(newIMG);
    };
    if(avatarH5_vendu == 1){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarH5.png');
        newIMG.setAttribute('alt', 'img_profilH5');
        newIMG.setAttribute('class', 'img_inv');
        newIMG.setAttribute('id', 'img_inv_H5');
        inv.appendChild(newIMG);
    };
    if(avatarF6_vendu == 1){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarF6.png');
        newIMG.setAttribute('alt', 'img_profilF6');
        newIMG.setAttribute('class', 'img_inv');
        newIMG.setAttribute('id', 'img_inv_F6');
        inv.appendChild(newIMG);
    };
    if(avatarH6_vendu == 1){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarH6.png');
        newIMG.setAttribute('alt', 'img_profilH6');
        newIMG.setAttribute('class', 'img_inv');
        newIMG.setAttribute('id', 'img_inv_H6');
        inv.appendChild(newIMG);
    };
};


// fonctions jeu
    
// selection du suite secrete
function IaSelectColor() {
    for(let i = 0; i <= 4; i++){
        colorsIa[i] = Math.floor(Math.random() * 8) + 1  
    };
};

// verification des choix du joueur
function IaVerif() {
    // verification des pions noir (juste et bien plasse)
    let colorsIaCopy = [].concat(colorsIa)
    for(let i = 0; i <= 4; i++){
        if(colorsIa[i] == colorsPlayer[i]){
            verif[0] += 1;
        }; 
    };

    // verification des pions blanc (juste mais mal placé 
    // (les pions noir detecte avant sont remit dans les blanc))
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

    
    // soustraction des pions noir au pions blancs pour eviter les doublons
    if(verif[1] != 0){
        verif[1] -= verif[0];
    };

    // rajout des pions vide
    verif[2] = 5 - (verif[1]+verif[0]);
    
    // affichage des pions dans la fenetre des reponse de l'ia
    for(let i = 0; i <= verif[0]-1; i++){ //pions noir
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../Images/noir.png');
        newIMG.setAttribute('alt', 'colors_noir');
        newIMG.setAttribute('id', 'noir');
        printChoixVraiFaux.appendChild(newIMG);
    };
    for(let i = 0; i <= verif[1]-1; i++){//pions blanc
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../Images/blanc.png');
        newIMG.setAttribute('alt', 'colors_blanc');
        newIMG.setAttribute('id', 'blanc');
        printChoixVraiFaux.appendChild(newIMG);
    };
    for(let i = 0; i <= verif[2]-1; i++){//pions vide
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../Images/vide.png');
        newIMG.setAttribute('alt', 'colors_vide');
        newIMG.setAttribute('id', 'vide');
        printChoixVraiFaux.appendChild(newIMG);
    };
    
    
};

// defaite du joueur
function LoseMastermind(){
    printDefeat.style.display = 'flex';
    continueDefeatButton.onclick = function() {
        printDefeat.style.display = 'none';
        document.location.reload();
    };
};
// victoire du joueur
function WinMastermind(){
    vieCopy = [].concat(vie)
    score += 700 * vieCopy;
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

// affichage des couleur choisis dans la fenettre des choix du joueur
function PrintChoixColorFonc(color, id) {
    let newIMG = document.createElement('img');
    newIMG.setAttribute('src', '../Images/' + color + '.png');
    newIMG.setAttribute('alt', 'colors_' + color);
    newIMG.setAttribute('id', color);
    printChoixColor.appendChild(newIMG);
    colorsPlayer[Compteur] = id
    Compteur ++;
    
    if( Compteur == 5 ){ //verification de la victoire 
        IaVerif()

        if(verif[0] == 5){ //si le joueur a 5 pions noir il gagne
            WinMastermind();
        }else{ // sinon il perd une vie et recomence
            verif = [0,0,0]
            Compteur = 0;
            vie -= 1;
        }
    }
    if(vie <= 0){ // si les vie tombe à 0 le joueur perd
        LoseMastermind()
    }
    
} 



// bouton jeton de couleur
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


// selection du code secret
IaSelectColor();