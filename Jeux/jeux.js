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

var jeux1 = document.getElementById("jeu1");
var jeux1_button = document.getElementById("jeu1_jouer");

jeux1.addEventListener("mouseover", function() {
    jeux1_button.style.display = 'flex';
});
jeux1.addEventListener("mouseout", function() {
    jeux1_button.style.display = 'none';
});

var jeux2 = document.getElementById("jeu2");
var jeux2_button = document.getElementById("jeu2_jouer");

jeux2.addEventListener("mouseover", function() {
    jeux2_button.style.display = 'flex';
});
jeux2.addEventListener("mouseout", function() {
    jeux2_button.style.display = 'none';
});

var jeux3 = document.getElementById("jeu3");
var jeux3_button = document.getElementById("jeu3_jouer");

jeux3.addEventListener("mouseover", function() {
    jeux3_button.style.display = 'flex';
});
jeux3.addEventListener("mouseout", function() {
    jeux3_button.style.display = 'none';
});

var jeux4 = document.getElementById("jeu4");
var jeux4_button = document.getElementById("jeu4_jouer");

jeux4.addEventListener("mouseover", function() {
    jeux4_button.style.display = 'flex';
});
jeux4.addEventListener("mouseout", function() {
    jeux4_button.style.display = 'none';
});