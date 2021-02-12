/////////////////////////// Script de la page //////////////////////////////////

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

////////////////////////////// valeurs par défaut //////////////////////////////


var pickedColor = "black";
const casesColor = "white";
var activatedPicker = false;
let click = false;


const repere = document.querySelector("#colordiv");

var classChaser = document.querySelectorAll(".cases").style;


///////////////////// fonction pour selectionner la couleur ////////////////////


function ChangeColor(){
        var color = document.getElementById("palette").value;
        pickedColor = color;
        repere.style.backgroundColor = pickedColor
        console.log(pickedColor)
}


////////////////////////////// fonction de reset ///////////////////////////////
    
    
function Reset(){
    const allcases = document.querySelectorAll(".cases");
    // console.log(allcases);
    allcases.forEach((idcases) => {
        // console.log(idcases)
        idcases.style.backgroundColor = "white";
    })
};


//////////// fonction pour changer la couleur de la case sélecionnée ///////////

// merci Damien !


document.querySelectorAll( ".cases" ).forEach( div => {
div.addEventListener( "click", () => {
    if(activatedPicker == false){
        div.style.backgroundColor = pickedColor;
        repere.style.backgroundColor = pickedColor
    } else{
        pickedColor = div.style.backgroundColor 
        repere.style.backgroundColor = pickedColor
        activatedPicker = false
    }
    
} )
div.addEventListener( "mouseover", () => {
    console.log(click);
    if ( click ) div.style.backgroundColor = pickedColor;
} )
} )

document.querySelector( "html" ).addEventListener( "mousedown", () => {
    click = true;
} )
document.querySelector( "html" ).addEventListener( "mouseup", () => {
    click = false;
} )



////////////////////////// fonction de pipette /////////////////////////////////

function Pipette(){
    activatedPicker = true;
    click = false
    console.log("activatedPicker = " + activatedPicker)
    console.log(click)
}


//////////////////////// fonctions de palette manuelle /////////////////////////

function Manualrouge(){
    pickedColor = "red";
    repere.style.backgroundColor = pickedColor
    console.log("nouvelle couleur !")
}

function Manualviolet(){
    pickedColor = "violet";
    repere.style.backgroundColor = pickedColor
    console.log("nouvelle couleur !")
}

function Manualrose(){
    repere.style.backgroundColor = pickedColor
    pickedColor = "pink";
    console.log("nouvelle couleur !")
}

function Manualbleu(){
    repere.style.backgroundColor = pickedColor
    pickedColor = "blue";
    console.log("nouvelle couleur !")
}

function Manualbleuclair(){
    repere.style.backgroundColor = pickedColor
    pickedColor = "lightblue";
    console.log("nouvelle couleur !")
}

function Manualvert(){
    repere.style.backgroundColor = pickedColor
    pickedColor = "green"
    console.log("nouvelle couleur !")
}

function Manualverthetic(){
    repere.style.backgroundColor = pickedColor
    pickedColor = "#46C36C"
    console.log("nouvelle couleur !")
}

function Manualjaune(){
    repere.style.backgroundColor = pickedColor
    pickedColor = "yellow"
    console.log("nouvelle couleur !")
}

function Manualorange(){
    repere.style.backgroundColor = pickedColor
    pickedColor = "orange"
    console.log("nouvelle couleur !")
}

function Manualblanc(){
    repere.style.backgroundColor = pickedColor
    pickedColor = "white"
    console.log("nouvelle couleur !")
}

function Manualgris(){
    repere.style.backgroundColor = pickedColor
    pickedColor = "grey"
    console.log("nouvelle couleur !")
}

function Manualnoir(){
    repere.style.backgroundColor = pickedColor
    pickedColor = "black"
    console.log("nouvelle couleur !")
}


//////////////////////////// fonctions slider ///////////////////////////////////

var image = "link"

var stuckRight = false
var stuckLeft = false

var slider = 0

var slidingModel = document.querySelector("#slidingmodel")
var slidedroit = document.querySelector("#FD")
var slidegauche = document.querySelector("#FG")

var grivide = document.querySelector("#grivide")

slidedroit.addEventListener("click", () => {
    console.log("slide droit")
    if (slider >= 0 && slider <= 1){
        slider += 1
        console.log("slide n°" + slider)
        if (slider == 0){ slidingModel.src = "pixelImages/Link.png"; stuckLeft = true}
        if (slider == 1){ slidingModel.src = "pixelImages/Megaman.png"; stuckRight = false; stuckLeft = false}
        if (slider == 2){ slidingModel.src = "pixelImages/Pokeball.png"; stuckRight = true;}
    }
})

slidegauche.addEventListener("click", () => {
    console.log("slide gauche")
    if (slider >= 1 && slider <= 4){
        slider -= 1
        console.log("slide n°" + slider)
        if (slider == 0){ slidingModel.src = "pixelImages/Link.png"; stuckLeft = true}
        if (slider == 1){ slidingModel.src = "pixelImages/Megaman.png"; stuckRight = false; stuckLeft = false}
        if (slider == 2){ slidingModel.src = "pixelImages/Pokeball.png"; stuckRight = true;}
    }
})

function BoutonGaucheHover(){
    if(stuckLeft == false){
        var img = document.querySelector("#FG")
        // console.log("check")
        FG.setAttribute("src", "pixelImages/flecheGV.png")
    }
}

function BoutonGaucheOut(){
    var img = document.querySelector("#FG")
    // console.log("check")
    FG.setAttribute("src", "pixelImages/flecheGB.png")
}

function BoutonDroitHover(){
    if(stuckRight == false){
        var img = document.querySelector("#FD")
        // console.log("check")
        FD.setAttribute("src", "pixelImages/flecheDV.png")
    }
}

function BoutonDroitOut(){
    var img = document.querySelector("#FD")
    // console.log("check")
    FD.setAttribute("src", "pixelImages/flecheDB.png")
}


var temp1 = document.querySelector("#temp1")
var temp2 = document.querySelector("#temp2")
var temp3 = document.querySelector("#temp3")
var temp4 = document.querySelector("#temp4")
var temp5 = document.querySelector("#temp5")
var temp6 = document.querySelector("#temp6")
var temp7 = document.querySelector("#temp7")
var temp8 = document.querySelector("#temp8")
var encadreNumOn = document.getElementById("encadre")
var linkTemplateOn = document.getElementById("linktemplate")
var megamanTemplateOn = document.getElementById("megamantemplate")
var pokeballTemplateOn = document.getElementById("pokeballtemplate")

slidingModel.addEventListener("click", () => {
    console.log("selection")
    linkTemplateOn.style.display = "none"
    megamanTemplateOn.style.display = "none"
    pokeballTemplateOn.style.display = "none"

    if(slider == 0){
        encadreNumOn.style.opacity = "80%"
        linkTemplateOn.style.display = "grid"

        temp1.style.backgroundColor = "#add8e6";
        temp1.innerHTML = "1: #add8e6";

        temp2.style.backgroundColor = "#000";
        temp2.innerHTML = "2: #000";

        temp3.style.backgroundColor = "#46C36C";
        temp3.innerHTML = "3: #46C36C";

        temp4.style.backgroundColor = "#FF0";
        temp4.innerHTML = "4: #FF0";

        temp5.style.backgroundColor = "#ffc933";
        temp5.innerHTML = "5: #ffc933";

        temp6.style.backgroundColor = "#fffab3";
        temp6.innerHTML = "6: #fffab3";

        temp7.style.backgroundColor = "#636145";
        temp7.innerHTML = "7: #636145";

        temp8.style.backgroundColor = "#2af477";
        temp8.innerHTML = "8: #2af477";
    }

    if(slider == 1){
        encadreNumOn.style.opacity = "80%"
        megamanTemplateOn.style.display = "grid"
        temp1.style.backgroundColor = "#ff8fab";
        temp1.innerHTML = "#ff8fab";

        temp2.style.backgroundColor = "#ffc0cb";
        temp2.innerHTML = "#ffc0cb";

        temp3.style.backgroundColor = "#5bd1e6";
        temp3.innerHTML = "#5bd1e6";

        temp4.style.backgroundColor = "#4279c2";
        temp4.innerHTML = "#4279c2";

        temp5.style.backgroundColor = "#eed5a0";
        temp5.innerHTML = "#eed5a0";

        temp6.style.backgroundColor = "";
        temp6.innerHTML = "";

        temp7.style.backgroundColor = "";
        temp7.innerHTML = "";

        temp8.style.backgroundColor = "";
        temp8.innerHTML = "";
    }

    if(slider == 2){
        encadreNumOn.style.opacity = "80%"
        pokeballTemplateOn.style.display = "grid"

        temp1.style.backgroundColor = "#80f587";
        temp1.innerHTML = "#80f587";

        temp2.style.backgroundColor = "#ffebf9";
        temp2.innerHTML = "#ffebf9";

        temp3.style.backgroundColor = "#c4c4c4";
        temp3.innerHTML = "#c4c4c4";

        temp4.style.backgroundColor = "#F00";
        temp4.innerHTML = "#F00";

        temp5.style.backgroundColor = "";
        temp5.innerHTML = "";

        temp6.style.backgroundColor = "";
        temp6.innerHTML = "";

        temp7.style.backgroundColor = "";
        temp7.innerHTML = "";
    }

})

grivide.addEventListener("click", () => {
    grivide.addEventListener("click", () => {
        console.log("vide")
        temp1.style.backgroundColor = "";
        temp1.innerHTML = "";
        temp2.style.backgroundColor = "";
        temp2.innerHTML = "";
        temp3.style.backgroundColor = "";
        temp3.innerHTML = "";
        temp4.style.backgroundColor = "";
        temp4.innerHTML = "";
        temp5.style.backgroundColor = "";
        temp5.innerHTML = "";
        temp6.style.backgroundColor = "";
        temp6.innerHTML = "";
        temp7.style.backgroundColor = "";
        temp7.innerHTML = "";
        temp8.style.backgroundColor = "";
        temp8.innerHTML = "";
        linkTemplateOn.style.display = "none"
        megamanTemplateOn.style.display = "none"
        pokeballTemplateOn.style.display = "none"
        encadreNumOn.style.opacity = "100%"
})