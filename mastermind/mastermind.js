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

//profil

var gold_score_deffine = 0;
gold_score_deffine = localStorage.getItem("gold_score_deffine_save");
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