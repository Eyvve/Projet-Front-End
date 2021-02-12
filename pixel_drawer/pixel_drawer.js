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

slidingModel.addEventListener("click", () => {
    if(slider == 0){}
    if(slider == 1){}
    if(slider == 2){}
})