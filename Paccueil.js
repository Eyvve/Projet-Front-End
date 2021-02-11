
var img_select1 = document.getElementById("img_profil1");
var img_select2 = document.getElementById("img_profil2");
var img_select3 = document.getElementById("img_profil3");
const test_profil = document.getElementById("test_profil");
var pseudo_player = document.getElementById("pseudo_player_texte");
var boutton_inscription = document.getElementById("inscrire");
var pseudo;
const connect_page = document.getElementById("connect_page_flex")
const profil = document.getElementById("button_profil");
const profil_print = document.getElementById("profil_flex");
const profil_inner = document.getElementById('profilpopup')
var imgProfil = document.getElementById('imageprofil')
var nomProfil = document.getElementById('nomProfil')
var save_or_not = 0;
var photo_profil_player = 1;
var gold = 100;
var gold_nav = document.querySelector("div.score_gold")
var gold_profil = document.getElementById("gold")
var gold_score_deffine = 0;
gold_nav.innerHTML = 100;
gold_profil.innerHTML = 100;


save_or_not = localStorage.getItem("save_or_not_save");
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


// default img profil
img_select1.className = "img_profil_select";
photo_profil_player = 1;

img_select1.addEventListener('click', event => {
    img_select1.className = "img_profil_select";
    img_select2.className = "";
    img_select3.className = "";
    photo_profil_player = 1;
    
});
img_select2.addEventListener('click', event => {
    img_select2.className = "img_profil_select";
    img_select1.className = "";
    img_select3.className = "";
    photo_profil_player = 2;
});
img_select3.addEventListener('click', event => {
    img_select3.className = "img_profil_select";
    img_select1.className = "";
    img_select2.className = "";
    photo_profil_player = 3;
});
function test_profil_fonction(){
    if(photo_profil_player == 1){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './images/photo_profil_1.png');
        newIMG.setAttribute('alt', 'img_profil1');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else if (photo_profil_player == 2){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './images/photo_profil_2.png');
        newIMG.setAttribute('alt', 'img_profil2');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else {
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './images/photo_profil_3.png');
        newIMG.setAttribute('alt', 'img_profil3');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    };
};

boutton_inscription.addEventListener('click', event => {
    localStorage.setItem("pseudo_save",pseudo_player.value);
    localStorage.setItem("photo_profil_player_save", photo_profil_player);
    save_or_not = 1;
    localStorage.setItem("save_or_not_save", save_or_not);
    connect_page.style.display = "none";
    document.location.reload();
});


// fonctions slider ////////////////////////////////////////////

var stuckright = false
var stuckleft = false

var slider = 0

var slidingmodel = document.querySelector("#slidingmodel")
var slidedroit = document.querySelector("#FD")
var slidegauche = document.querySelector("#FG")

slidedroit.addEventListener("click", () => {
    console.log("slide droit")
    if (slider >= 0 && slider <= 1){
        slider += 1
        console.log("slide n°" + slider)
        if (slider == 0){ slidingmodel.src = "pixelImages/Link.png"; stuckleft = true}
        if (slider == 1){ slidingmodel.src = "pixelImages/Megaman.png"; stuckright = false; stuckleft = false}
        if (slider == 2){ slidingmodel.src = "pixelImages/Pokeball.png"; stuckright = true;}
    }
})

slidegauche.addEventListener("click", () => {
    console.log("slide gauche")
    if (slider >= 1 && slider <= 4){
        slider -= 1
        console.log("slide n°" + slider)
        if (slider == 0){ slidingmodel.src = "pixelImages/Link.png"; stuckleft = true}
        if (slider == 1){ slidingmodel.src = "pixelImages/Megaman.png"; stuckright = false; stuckleft = false}
        if (slider == 2){ slidingmodel.src = "pixelImages/Pokeball.png"; stuckright = true;}
    }
})

function boutonGhover(){
    if(stuckleft == false){
        var img = document.querySelector("#FG")
        // console.log("check")
        FG.setAttribute("src", "./pixel_drawer/pixelImages/flecheGV.png")
    }
}

function boutonGout(){
    var img = document.querySelector("#FG")
    // console.log("check")
    FG.setAttribute("src", "./pixel_drawer/pixelImages/flecheGB.png")
}

function boutonDhover(){
    if(stuckright == false){
        var img = document.querySelector("#FD")
        // console.log("check")
        FD.setAttribute("src", "./pixel_drawer/pixelImages/flecheDV.png")
    }
}

function boutonDout(){
    var img = document.querySelector("#FD")
    // console.log("check")
    FD.setAttribute("src", "./pixel_drawer/pixelImages/flecheDB.png")
}

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