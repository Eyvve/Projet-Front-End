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

////////////////////////////// valeurs par défaut //////////////////////////////


var color_picked = "black";
const cases_color = "white";
var activatedpicker = false;
let click = false;


const repere = document.querySelector("#colordiv");

var classchaser = document.querySelectorAll(".cases").style;


///////////////////// fonction pour selectionner la couleur ////////////////////


function changeColor(){
        var color = document.getElementById("palette").value;
        color_picked = color;
        repere.style.backgroundColor = color_picked
        console.log(color_picked)
}


////////////////////////////// fonction de reset ///////////////////////////////
    
    
function reset(){
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
    if(activatedpicker == false){
        div.style.backgroundColor = color_picked;
        repere.style.backgroundColor = color_picked
    } else{
        color_picked = div.style.backgroundColor 
        repere.style.backgroundColor = color_picked
        activatedpicker = false
    }
    
} )
div.addEventListener( "mouseover", () => {
    console.log(click);
    if ( click ) div.style.backgroundColor = color_picked;
} )
} )

document.querySelector( "html" ).addEventListener( "mousedown", () => {
    click = true;
} )
document.querySelector( "html" ).addEventListener( "mouseup", () => {
    click = false;
} )



////////////////////////// fonction de pipette /////////////////////////////////

function pipette(){
    activatedpicker = true;
    click = false
    console.log("activatedpicker = " + activatedpicker)
    console.log(click)
}


//////////////////////// fonctions de palette manuelle /////////////////////////

function manualrouge(){
    color_picked = "red";
    repere.style.backgroundColor = color_picked
    console.log("nouvelle couleur !")
}

function manualviolet(){
    color_picked = "violet";
    repere.style.backgroundColor = color_picked
    console.log("nouvelle couleur !")
}

function manualrose(){
    repere.style.backgroundColor = color_picked
    color_picked = "pink";
    console.log("nouvelle couleur !")
}

function manualbleu(){
    repere.style.backgroundColor = color_picked
    color_picked = "blue";
    console.log("nouvelle couleur !")
}

function manualbleuclair(){
    repere.style.backgroundColor = color_picked
    color_picked = "lightblue";
    console.log("nouvelle couleur !")
}

function manualvert(){
    repere.style.backgroundColor = color_picked
    color_picked = "green"
    console.log("nouvelle couleur !")
}

function manualverthetic(){
    repere.style.backgroundColor = color_picked
    color_picked = "#46C36C"
    console.log("nouvelle couleur !")
}

function manualjaune(){
    repere.style.backgroundColor = color_picked
    color_picked = "yellow"
    console.log("nouvelle couleur !")
}

function manualorange(){
    repere.style.backgroundColor = color_picked
    color_picked = "orange"
    console.log("nouvelle couleur !")
}

function manualblanc(){
    repere.style.backgroundColor = color_picked
    color_picked = "white"
    console.log("nouvelle couleur !")
}

function manualgris(){
    repere.style.backgroundColor = color_picked
    color_picked = "grey"
    console.log("nouvelle couleur !")
}

function manualnoir(){
    repere.style.backgroundColor = color_picked
    color_picked = "black"
    console.log("nouvelle couleur !")
}


//////////////////////////// fonctions slider ///////////////////////////////////

var image = "link"

var stuckright = false
var stuckleft = false

var slider = 0

var slidingmodel = document.querySelector("#slidingmodel")
var slidedroit = document.querySelector("#FD")
var slidegauche = document.querySelector("#FG")

slidedroit.addEventListener("click", () => {
    console.log("slide droit")
    if (slider >= 0 && slider <= 4){
        slider += 1
        console.log("slide n°" + slider)
        if (slider == 0){ slidingmodel.src = "pixelImages/Link.png"; stuckleft = true}
        if (slider == 1){ slidingmodel.src = "pixelImages/Link.png"; stuckright = false; stuckleft = false}
        if (slider == 2){ slidingmodel.src = "pixelImages/Link.png"; stuckright = false; stuckleft = false}
        if (slider == 3){ slidingmodel.src = "pixelImages/Link.png"; stuckright = false; stuckleft = false}
        if (slider == 4){ slidingmodel.src = "pixelImages/Link.png"; stuckright = true}
    }
})

slidegauche.addEventListener("click", () => {
    console.log("slide gauche")
    if (slider >= 1 && slider <= 4){
        slider -= 1
        console.log("slide n°" + slider)
        if (slider == 0){ slidingmodel.src = "pixelImages/Link.png"; stuckleft = true}
        if (slider == 1){ slidingmodel.src = "pixelImages/Link.png"; stuckright = false; stuckleft = false}
        if (slider == 2){ slidingmodel.src = "pixelImages/Link.png"; stuckright = false; stuckleft = false}
        if (slider == 3){ slidingmodel.src = "pixelImages/Link.png"; stuckright = false; stuckleft = false}
        if (slider == 4){ slidingmodel.src = "pixelImages/Link.png"; stuckright = true}
    }
})

function boutonGhover(){
    if(stuckleft == false){
        var img = document.querySelector("#FG")
        // console.log("check")
        FG.setAttribute("src", "pixelImages/flecheGV.png")
    }
}

function boutonGout(){
    var img = document.querySelector("#FG")
    // console.log("check")
    FG.setAttribute("src", "pixelImages/flecheGB.png")
}

function boutonDhover(){
    if(stuckright == false){
        var img = document.querySelector("#FD")
        // console.log("check")
        FD.setAttribute("src", "pixelImages/flecheDV.png")
    }
}

function boutonDout(){
    var img = document.querySelector("#FD")
    // console.log("check")
    FD.setAttribute("src", "pixelImages/flecheDB.png")
}