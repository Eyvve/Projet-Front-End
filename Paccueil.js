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
gold_score_deffine = localStorage.getItem("gold_scpre_deffine_save");

if (save_or_not != 1) {
    connect_page.style.display = "flex";
    save_or_not = 1;
    localStorage.setItem("save_or_not_save", save_or_not);
}else {
    photo_profil_player = parseInt(localStorage.getItem("photo_profil_player_save"));
    test_profil_fonction();
    nomProfil.innerHTML = localStorage.getItem("pseudo_save");
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


img_select1.className = "img_profil_select";
pseudo = localStorage.getItem("pseudo_save");
console.log(pseudo);

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
    connect_page.style.display = "none";
    document.location.reload();
});


