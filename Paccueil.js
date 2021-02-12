
var img_select1 = document.getElementById("img_profil1");
var img_select2 = document.getElementById("img_profil2");
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
var gold_nav = document.getElementById("gold_nav")
var gold_profil = document.getElementById("gold")
var gold_score_deffine = 0;
gold_nav.innerHTML = 100;
gold_profil.innerHTML = 100;
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

save_or_not = localStorage.getItem("save_or_not_save");
gold_score_deffine = localStorage.getItem("gold_score_deffine_save");


// detection de la premiere connexion ou  non + chargement des sauvgarde
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

// fenettre d'inscription
// default photo profil
img_select1.className = "img_profil_select";
photo_profil_player = 1;

// chois de la photo de profil
img_select1.addEventListener('click', event => {
    img_select1.className = "img_profil_select";
    img_select2.className = "";
    photo_profil_player = 1;
    
});
img_select2.addEventListener('click', event => {
    img_select2.className = "img_profil_select";
    img_select1.className = "";
    photo_profil_player = 2;
});

// detection du bouton d'inscription
boutton_inscription.addEventListener('click', event => {
    localStorage.setItem("pseudo_save",pseudo_player.value);
    localStorage.setItem("photo_profil_player_save", photo_profil_player);
    save_or_not = 1;
    localStorage.setItem("save_or_not_save", save_or_not);
    connect_page.style.display = "none";
    document.location.reload();
});



//detection du clique sur la nav pour ouvrir le profil
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
//rajout des images achete dans l'inventaire
function test_inv_img_vendu(){
    if(avatarF2_vendu == 1){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './avatars/avatarF2.png');
        newIMG.setAttribute('alt', 'img_profilF2');
        newIMG.setAttribute('class', 'img_inv');
        newIMG.setAttribute('id', 'img_inv_F2');
        inv.appendChild(newIMG);
    };
    if(avatarH2_vendu == 1){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './avatars/avatarH2.png');
        newIMG.setAttribute('alt', 'img_profilH2');
        newIMG.setAttribute('class', 'img_inv');
        newIMG.setAttribute('id', 'img_inv_H2');
        inv.appendChild(newIMG);
    };
    if(avatarF3_vendu == 1){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './avatars/avatarF3.png');
        newIMG.setAttribute('alt', 'img_profilF3');
        newIMG.setAttribute('class', 'img_inv');
        newIMG.setAttribute('id', 'img_inv_F3');
        inv.appendChild(newIMG);
    };
    if(avatarH3_vendu == 1){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './avatars/avatarH3.png');
        newIMG.setAttribute('alt', 'img_profilH3');
        newIMG.setAttribute('class', 'img_inv');
        newIMG.setAttribute('id', 'img_inv_H3');
        inv.appendChild(newIMG);
    };
    if(avatarF4_vendu == 1){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './avatars/avatarF4.png');
        newIMG.setAttribute('alt', 'img_profilF4');
        newIMG.setAttribute('class', 'img_inv');
        newIMG.setAttribute('id', 'img_inv_F4');
        inv.appendChild(newIMG);
    };
    if(avatarH4_vendu == 1){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './avatars/avatarH4.png');
        newIMG.setAttribute('alt', 'img_profilH4');
        newIMG.setAttribute('class', 'img_inv');
        newIMG.setAttribute('id', 'img_inv_H4');
        inv.appendChild(newIMG);
    };
    if(avatarF5_vendu == 1){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './avatars/avatarF5.png');
        newIMG.setAttribute('alt', 'img_profilF5');
        newIMG.setAttribute('class', 'img_inv');
        newIMG.setAttribute('id', 'img_inv_F5');
        inv.appendChild(newIMG);
    };
    if(avatarH5_vendu == 1){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './avatars/avatarH5.png');
        newIMG.setAttribute('alt', 'img_profilH5');
        newIMG.setAttribute('class', 'img_inv');
        newIMG.setAttribute('id', 'img_inv_H5');
        inv.appendChild(newIMG);
    };
    if(avatarF6_vendu == 1){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './avatars/avatarF6.png');
        newIMG.setAttribute('alt', 'img_profilF6');
        newIMG.setAttribute('class', 'img_inv');
        newIMG.setAttribute('id', 'img_inv_F6');
        inv.appendChild(newIMG);
    };
    if(avatarH6_vendu == 1){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './avatars/avatarH6.png');
        newIMG.setAttribute('alt', 'img_profilH6');
        newIMG.setAttribute('class', 'img_inv');
        newIMG.setAttribute('id', 'img_inv_H6');
        inv.appendChild(newIMG);
    };
};

//fonction pour afficher la photo de profil choisi
function test_profil_fonction(){
    if(photo_profil_player == 1){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './avatars/avatarF1.png');
        newIMG.setAttribute('alt', 'img_profilF1');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else if (photo_profil_player == 2){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './avatars/avatarH1.png');
        newIMG.setAttribute('alt', 'img_profilH1');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else if (photo_profil_player == 3){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './avatars/avatarF2.png');
        newIMG.setAttribute('alt', 'img_profilF2');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else if (photo_profil_player == 4){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './avatars/avatarH2.png');
        newIMG.setAttribute('alt', 'img_profilH2');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else if (photo_profil_player == 5){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './avatars/avatarF3.png');
        newIMG.setAttribute('alt', 'img_profilF3');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else if (photo_profil_player == 6){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './avatars/avatarH3.png');
        newIMG.setAttribute('alt', 'img_profilH3');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else if (photo_profil_player == 7){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './avatars/avatarF4.png');
        newIMG.setAttribute('alt', 'img_profilF4');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else if (photo_profil_player == 8){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './avatars/avatarH4.png');
        newIMG.setAttribute('alt', 'img_profilH4');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else if (photo_profil_player == 9){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './avatars/avatarF5.png');
        newIMG.setAttribute('alt', 'img_profilF5');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else if (photo_profil_player == 10){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './avatars/avatarH5.png');
        newIMG.setAttribute('alt', 'img_profilH5');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else if (photo_profil_player == 11){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './avatars/avatarF6.png');
        newIMG.setAttribute('alt', 'img_profilF6');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }else if (photo_profil_player == 12){
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', './avatars/avatarH6.png');
        newIMG.setAttribute('alt', 'img_profilH6');
        newIMG.setAttribute('class', 'img_profil');
        imgProfil.appendChild(newIMG);
    }
};




// fonctions slider ////////////////////////////////////////////

var stuckRight = false
var stuckLeft = false

var slider = 0

var slidingModel = document.querySelector("#slidingmodel")
var slidedroit = document.querySelector("#FD")
var slidegauche = document.querySelector("#FG")

var photo1 = document.querySelector("#photo1")
var photo2 = document.querySelector("#photo2")
var photo3 = document.querySelector("#photo3")

var nom1 = document.querySelector("#nom1")
var nom2 = document.querySelector("#nom2")
var nom3 = document.querySelector("#nom3")

var txtprofil1 = document.querySelector("#txtprofil1")
var txtprofil2 = document.querySelector("#txtprofil2")
var txtprofil3 = document.querySelector("#txtprofil3")

var role1 = document.querySelector("#role1")
var role2 = document.querySelector("#role2")
var role3 = document.querySelector("#role3")

slidedroit.addEventListener("click", () => {
    console.log("slide droit")
    if (slider >= 0 && slider <= 6){
        slider += 1
        if (slider == 6){slider = 0}
        console.log("slide n°" + slider)
        if (slider == 0){ 
            photo1.style.backgroundImage = "url(./Images/photoamin.jpg)"; 
            photo2.style.backgroundImage = "url(./Images/photodorian.png)";
            photo3.style.backgroundImage = "url(./Images/photojulie.jpg)";

            nom1.innerHTML = "Amin Bentani";
            nom2.innerHTML = "Dorian Canonne";
            nom3.innerHTML = "Julie Cesana";
            
            txtprofil1.innerHTML = "<li>HTML / CSS du site</li><li>Recherches design</li><li>Meilleur tryharder 2021</li>";
            txtprofil2.innerHTML = "<li>Direction de projet</li><li>Jeu : Puissance 4</li><li>Jeu : Pixel Drawer</li><li>Supervision, intégration & correction HTML/CSS</li>"
            txtprofil3.innerHTML.innerHTML = "<li>JavaScript du site</li><li>Maquette</li><li>Recherches design</li>"

            role1.innerHTML = "DESIGN / HTML / CSS"
            role2.innerHTML = "JEUX / HTML / <br>CSS"
            role3.innerHTML = "DESIGN / JAVASCRIPT"

            stuckRight = false; 
            stuckLeft = false;
        }

        if (slider == 1){ 
            photo1.style.backgroundImage = "url(./Images/photodorian.png)"
            photo2.style.backgroundImage = "url(./Images/photojulie.jpg)"
            photo3.style.backgroundImage = "url(./Images/photogabriel.png)"

            nom1.innerHTML = "Dorian Canonne"; 
            nom2.innerHTML = "Julie Cesana";
            nom3.innerHTML = "Gabriel Goldbronn";

            txtprofil1.innerHTML = "<li>Direction de projet</li><li>Jeu : Puissance 4</li><li>Jeu : Pixel Drawer</li><li>Supervision, intégration & correction HTML/CSS</li>"
            txtprofil2.innerHTML = "<li>JavaScript du site</li><li>Maquette</li><li>Recherches design</li>"
            txtprofil3.innerHTML = "<li>Jeu : Clicker</li><li>Jeu : Mastermind</li><li>Supervision & intégration JavaScript</li><li>Graphisme</li>"

            role1.innerHTML = "JEUX / HTML / <br>CSS"
            role2.innerHTML = "DESIGN / JAVASCRIPT"
            role3.innerHTML = "JEUX / JAVASCRIPT"

            stuckRight = false; 
            stuckLeft = false;
        }

        if (slider == 2){ 
            photo1.style.backgroundImage = "url(./Images/photojulie.jpg)"
            photo2.style.backgroundImage = "url(./Images/photogabriel.png)"
            photo3.style.backgroundImage = "url(./Images/photothomas.jpg)"

            nom1.innerHTML = "Julie Cesana"; 
            nom2.innerHTML = "Gabriel Goldbronn";
            nom3.innerHTML = "Thomas Latour";

            txtprofil1.innerHTML = "<li>JavaScript du site</li><li>Maquette</li><li>Recherches design</li>"
            txtprofil2.innerHTML = "<li>Jeu : Clicker</li><li>Jeu : Mastermind</li><li>Supervision & intégration JavaScript</li><li>Graphisme</li>"
            txtprofil3.innerHTML = "<li>JavaScript du site</li><li>Maquette</li><li>Recherches design</li>"

            role1.innerHTML = "DESIGN / JAVASCRIPT"
            role2.innerHTML = "JEUX / <br> JAVASCRIPT"
            role3.innerHTML = "DESIGN / JAVASCRIPT"

            stuckRight = false; 
            stuckLeft = false;
        }

        if (slider == 3){ 
            photo1.style.backgroundImage = "url(./Images/photogabriel.png)"
            photo2.style.backgroundImage = "url(./Images/photothomas.jpg)"
            photo3.style.backgroundImage = "url(./Images/photoamira.jpg)"

            nom1.innerHTML = "Gabriel Goldbronn";
            nom2.innerHTML = "Thomas Latour";
            nom3.innerHTML = "Amira Rechid";

            txtprofil1.innerHTML = "<li>Jeu : Clicker</li><li>Jeu : Mastermind</li><li>Supervision & intégration JavaScript</li><li>Graphisme</li>"
            txtprofil2.innerHTML = "<li>JavaScript du site</li><li>Maquette</li><li>Recherches design</li>"
            txtprofil3.innerHTML = "<li>HTML / CSS du site</li><li>Recherches design</li>"

            role1.innerHTML = "JEUX / JAVASCRIPT"
            role2.innerHTML = "DESIGN / JAVASCRIPT"
            role3.innerHTML = "DESIGN / HTML / CSS"

            stuckRight = false; 
            stuckLeft = false;
        }

        if (slider == 4){ 
            photo1.style.backgroundImage = "url(./Images/photothomas.jpg)"
            photo2.style.backgroundImage = "url(./Images/photoamira.jpg)"
            photo3.style.backgroundImage = "url(./Images/photoamin.jpg)"

            nom1.innerHTML = "Thomas Latour"
            nom2.innerHTML = "Amira Rechid";
            nom3.innerHTML = "Amin Bentani"

            txtprofil1.innerHTML = "<li>JavaScript du site</li><li>Maquette</li><li>Recherches design</li>"
            txtprofil2.innerHTML = "<li>HTML / CSS du site</li><li>Recherches design</li>"
            txtprofil3.innerHTML = "<li>HTML / CSS du site</li><li>Recherches design</li><li>Meilleur tryharder 2021</li>";

            role1.innerHTML = "DESIGN / JAVASCRIPT"
            role2.innerHTML = "DESIGN / HTML / CSS"
            role3.innerHTML = "DESIGN / HTML / CSS"

            stuckRight = false; 
            stuckLeft = false;
        }

        if (slider == 5){ 
            photo1.style.backgroundImage = "url(./Images/photoamira.jpg)"
            photo2.style.backgroundImage = "url(./Images/photoamin.jpg)"
            photo3.style.backgroundImage = "url(./Images/photodorian.png)";

            nom1.innerHTML = "Amira Rechid";
            nom2.innerHTML = "Amin Bentani";
            nom3.innerHTML = "Dorian Canonne"; 

            txtprofil1.innerHTML = "<li>HTML / CSS du site</li><li>Recherches design</li>"
            txtprofil2.innerHTML = "<li>HTML / CSS du site</li><li>Recherches design</li><li>Meilleur tryharder 2021</li>";
            txtprofil3.innerHTML = "<li>Direction de projet</li><li>Jeu : Puissance 4</li><li>Jeu : Pixel Drawer</li><li>Supervision, intégration & correction HTML/CSS</li>"

            role1.innerHTML = "DESIGN / HTML / CSS"
            role2.innerHTML = "DESIGN / HTML / CSS"
            role3.innerHTML = "JEUX / HTML / <br>CSS"

            stuckRight = false; 
            stuckLeft = false;
        }
    }
})




slidegauche.addEventListener("click", () => {
    console.log("slide gauche")
    if (slider >= -1 && slider <= 6){
        slider -= 1
        if (slider == -1){slider = 5}
        console.log("slide n°" + slider)
        if (slider == 0){ 
            photo1.style.backgroundImage = "url(./Images/photoamin.jpg)"; 
            photo2.style.backgroundImage = "url(./Images/photodorian.png)";
            photo3.style.backgroundImage = "url(./Images/photojulie.jpg)";

            nom1.innerHTML = "Amin Bentani";
            nom2.innerHTML = "Dorian Canonne";
            nom3.innerHTML = "Julie Cesana";
            
            txtprofil1.innerHTML = "<li>HTML / CSS du site</li><li>Recherches design</li><li>Meilleur tryharder 2021</li>";
            txtprofil2.innerHTML = "<li>Direction de projet</li><li>Jeu : Puissance 4</li><li>Jeu : Pixel Drawer</li><li>Supervision, intégration & correction HTML/CSS</li>"
            txtprofil3.innerHTML.innerHTML = "<li>JavaScript du site</li><li>Maquette</li><li>Recherches design</li>"

            role1.innerHTML = "DESIGN / HTML / CSS"
            role2.innerHTML = "JEUX / HTML / <br>CSS"
            role3.innerHTML = "DESIGN / JAVASCRIPT"

            stuckRight = false; 
            stuckLeft = false;
        }

        if (slider == 1){ 
            photo1.style.backgroundImage = "url(./Images/photodorian.png)"
            photo2.style.backgroundImage = "url(./Images/photojulie.jpg)"
            photo3.style.backgroundImage = "url(./Images/photogabriel.png)"

            nom1.innerHTML = "Dorian Canonne"; 
            nom2.innerHTML = "Julie Cesana";
            nom3.innerHTML = "Gabriel Goldbronn";

            txtprofil1.innerHTML = "<li>Direction de projet</li><li>Jeu : Puissance 4</li><li>Jeu : Pixel Drawer</li><li>Supervision, intégration & correction HTML/CSS</li>"
            txtprofil2.innerHTML = "<li>JavaScript du site</li><li>Maquette</li><li>Recherches design</li>"
            txtprofil3.innerHTML = "<li>Jeu : Clicker</li><li>Jeu : Mastermind</li><li>Supervision & intégration JavaScript</li><li>Graphisme</li>"

            role1.innerHTML = "JEUX / HTML / <br>CSS"
            role2.innerHTML = "DESIGN / JAVASCRIPT"
            role3.innerHTML = "JEUX / JAVASCRIPT"

            stuckRight = false; 
            stuckLeft = false;
        }

        if (slider == 2){ 
            photo1.style.backgroundImage = "url(./Images/photojulie.jpg)"
            photo2.style.backgroundImage = "url(./Images/photogabriel.png)"
            photo3.style.backgroundImage = "url(./Images/photothomas.jpg)"

            nom1.innerHTML = "Julie Cesana"; 
            nom2.innerHTML = "Gabriel Goldbronn";
            nom3.innerHTML = "Thomas Latour";

            txtprofil1.innerHTML = "<li>JavaScript du site</li><li>Maquette</li><li>Recherches design</li>"
            txtprofil2.innerHTML = "<li>Jeu : Clicker</li><li>Jeu : Mastermind</li><li>Supervision & intégration JavaScript</li><li>Graphisme</li>"
            txtprofil3.innerHTML = "<li>JavaScript du site</li><li>Maquette</li><li>Recherches design</li>"

            role1.innerHTML = "DESIGN / JAVASCRIPT"
            role2.innerHTML = "JEUX / <br> JAVASCRIPT"
            role3.innerHTML = "DESIGN / JAVASCRIPT"

            stuckRight = false; 
            stuckLeft = false;
        }

        if (slider == 3){ 
            photo1.style.backgroundImage = "url(./Images/photogabriel.png)"
            photo2.style.backgroundImage = "url(./Images/photothomas.jpg)"
            photo3.style.backgroundImage = "url(./Images/photoamira.jpg)"

            nom1.innerHTML = "Gabriel Goldbronn";
            nom2.innerHTML = "Thomas Latour";
            nom3.innerHTML = "Amira Rechid";

            txtprofil1.innerHTML = "<li>Jeu : Clicker</li><li>Jeu : Mastermind</li><li>Supervision & intégration JavaScript</li><li>Graphisme</li>"
            txtprofil2.innerHTML = "<li>JavaScript du site</li><li>Maquette</li><li>Recherches design</li>"
            txtprofil3.innerHTML = "<li>HTML / CSS du site</li><li>Recherches design</li>"

            role1.innerHTML = "JEUX / JAVASCRIPT"
            role2.innerHTML = "DESIGN / JAVASCRIPT"
            role3.innerHTML = "DESIGN / HTML / CSS"

            stuckRight = false; 
            stuckLeft = false;
        }

        if (slider == 4){ 
            photo1.style.backgroundImage = "url(./Images/photothomas.jpg)"
            photo2.style.backgroundImage = "url(./Images/photoamira.jpg)"
            photo3.style.backgroundImage = "url(./Images/photoamin.jpg)"

            nom1.innerHTML = "Thomas Latour"
            nom2.innerHTML = "Amira Rechid";
            nom3.innerHTML = "Amin Bentani"

            txtprofil1.innerHTML = "<li>JavaScript du site</li><li>Maquette</li><li>Recherches design</li>"
            txtprofil2.innerHTML = "<li>HTML / CSS du site</li><li>Recherches design</li>"
            txtprofil3.innerHTML = "<li>HTML / CSS du site</li><li>Recherches design</li><li>Meilleur tryharder 2021</li>";

            role1.innerHTML = "DESIGN / JAVASCRIPT"
            role2.innerHTML = "DESIGN / HTML / CSS"
            role3.innerHTML = "DESIGN / HTML / CSS"

            stuckRight = false; 
            stuckLeft = false;
        }

        if (slider == 5){ 
            photo1.style.backgroundImage = "url(./Images/photoamira.jpg)"
            photo2.style.backgroundImage = "url(./Images/photoamin.jpg)"
            photo3.style.backgroundImage = "url(./Images/photodorian.png)";

            nom1.innerHTML = "Amira Rechid";
            nom2.innerHTML = "Amin Bentani";
            nom3.innerHTML = "Dorian Canonne"; 

            txtprofil1.innerHTML = "<li>HTML / CSS du site</li><li>Recherches design</li>"
            txtprofil2.innerHTML = "<li>HTML / CSS du site</li><li>Recherches design</li><li>Meilleur tryharder 2021</li>";
            txtprofil3.innerHTML = "<li>Direction de projet</li><li>Jeu : Puissance 4</li><li>Jeu : Pixel Drawer</li><li>Supervision, intégration & correction HTML/CSS</li>"

            role1.innerHTML = "DESIGN / HTML / CSS"
            role2.innerHTML = "DESIGN / HTML / CSS"
            role3.innerHTML = "JEUX / HTML / <br>CSS"

            stuckRight = false; 
            stuckLeft = false;
        }
    }
})

function BoutonGaucheHover(){
    if(stuckLeft == false){
        var img = document.querySelector("#FG")
        // console.log("check")
        FG.setAttribute("src", "./pixel_drawer/pixelImages/flecheGV.png")
    }
}

function BoutonGaucheOut(){
    var img = document.querySelector("#FG")
    // console.log("check")
    FG.setAttribute("src", "./pixel_drawer/pixelImages/flecheGB.png")
}

function BoutonDroitHover(){
    if(stuckRight == false){
        var img = document.querySelector("#FD")
        // console.log("check")
        FD.setAttribute("src", "./pixel_drawer/pixelImages/flecheDV.png")
    }
}

function BoutonDroitOut(){
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