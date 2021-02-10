
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