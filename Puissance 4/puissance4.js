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

// déclaration des variables de base////////////////////////////////

// Jeton/////////////////////////
var wingreencount = 0
var winredcount = 0
var wincount = 0
var tourcount = 1
var finished = false

var tour = true
var win = ""
var game = true

const tourvert = "Au tour du joueur vert"
const tourrouge = "Au tour du joueur rouge"

var message = document.querySelector("#message")

const round = document.querySelector("#roundnumber")

var jeton = document.querySelector("#tourannonce")

///////////// boutons/////////////

var bouton1 = document.querySelector("#b1")
var bouton2 = document.querySelector("#b2")
var bouton3 = document.querySelector("#b3")
var bouton4 = document.querySelector("#b4")
var bouton5 = document.querySelector("#b5")
var bouton6 = document.querySelector("#b6")
var bouton7 = document.querySelector("#b7")

var boutonreset = document.querySelector("#reset")

/////////////cases du P4////////////


var A1 = document.getElementById("A1"); 
var A2 = document.getElementById("A2");
var A3 = document.getElementById("A3");
var A4 = document.getElementById("A4");
var A5 = document.getElementById("A5");
var A6 = document.getElementById("A6");
var A7 = document.getElementById("A7");

var B1 = document.getElementById("B1");
var B2 = document.getElementById("B2");
var B3 = document.getElementById("B3");
var B4 = document.getElementById("B4");
var B5 = document.getElementById("B5");
var B6 = document.getElementById("B6");
var B7 = document.getElementById("B7");

var C1 = document.getElementById("C1");
var C2 = document.getElementById("C2");
var C3 = document.getElementById("C3");
var C4 = document.getElementById("C4");
var C5 = document.getElementById("C5");
var C6 = document.getElementById("C6");
var C7 = document.getElementById("C7");

var D1 = document.getElementById("D1");
var D2 = document.getElementById("D2");
var D3 = document.getElementById("D3");
var D4 = document.getElementById("D4");
var D5 = document.getElementById("D5");
var D6 = document.getElementById("D6");
var D7 = document.getElementById("D7");

var E1 = document.getElementById("E1");
var E2 = document.getElementById("E2");
var E3 = document.getElementById("E3");
var E4 = document.getElementById("E4");
var E5 = document.getElementById("E5");
var E6 = document.getElementById("E6");
var E7 = document.getElementById("E7");

var F1 = document.getElementById("F1");
var F2 = document.getElementById("F2");
var F3 = document.getElementById("F3");
var F4 = document.getElementById("F4");
var F5 = document.getElementById("F5");
var F6 = document.getElementById("F6");
var F7 = document.getElementById("F7");

/////////////variables de vérification pour chaque case////////////

var A1verif = false;
var A2verif = false;
var A3verif = false;
var A4verif = false;
var A5verif = false;
var A6verif = false;
var A7verif = false;

var B1verif = false;
var B2verif = false;
var B3verif = false;
var B4verif = false;
var B5verif = false;
var B6verif = false;
var B7verif = false;

var C1verif = false;
var C2verif = false;
var C3verif = false;
var C4verif = false;
var C5verif = false;
var C6verif = false;
var C7verif = false;

var D1verif = false;
var D2verif = false;
var D3verif = false;
var D4verif = false;
var D5verif = false;
var D6verif = false;
var D7verif = false;

var E1verif = false;
var E2verif = false;
var E3verif = false;
var E4verif = false;
var E5verif = false;
var E6verif = false;
var E7verif = false;

var F1verif = false;
var F2verif = false;
var F3verif = false;
var F4verif = false;
var F5verif = false;
var F6verif = false;
var F7verif = false;

/////////////variables de couleur (style) pour chaque case////////////

var A1color = "";
var A2color = "";
var A3color = "";
var A4color = "";
var A5color = "";
var A6color = "";
var A7color = "";

var B1color = "";
var B2color = "";
var B3color = "";
var B4color = "";
var B5color = "";
var B6color = "";
var B7color = "";

var C1color = "";
var C2color = "";
var C3color = "";
var C4color = "";
var C5color = "";
var C6color = "";
var C7color = "";

var D1color = "";
var D2color = "";
var D3color = "";
var D4color = "";
var D5color = "";
var D6color = "";
var D7color = "";

var E1color = "";
var E2color = "";
var E3color = "";
var E4color = "";
var E5color = "";
var E6color = "";
var E7color = "";

var F1color = "";
var F2color = "";
var F3color = "";
var F4color = "";
var F5color = "";
var F6color = "";
var F7color = "";

/////////////variables du tableau des victoires////////////

var manche1 = document.querySelector("#manche1").style
var jeton1 = document.querySelector("#jeton1")

var manche2 = document.querySelector("#manche2").style
var jeton2 = document.querySelector("#jeton2")

var manche3 = document.querySelector("#manche3").style
var jeton3 = document.querySelector("#jeton3")

var manche4 = document.querySelector("#manche4").style
var jeton4 = document.querySelector("#jeton4")

var manche5 = document.querySelector("#manche5").style
var jeton5 = document.querySelector("#jeton5")

/////////////variables de vérification du tableau des victoires////////////

var m1 = false
var m2 = false
var m3 = false
var m4 = false
var m5 = false

// animation boutons ///////////////////////


bouton1.addEventListener("mouseover", function(){this.src = "P4Images/boutonhover.png";});
bouton1.addEventListener("mouseout", function(){this.src = "P4Images/bouton.png";});

bouton2.addEventListener("mouseover", function(){this.src = "P4Images/boutonhover.png";});
bouton2.addEventListener("mouseout", function(){this.src = "P4Images/bouton.png";});

bouton3.addEventListener("mouseover", function(){this.src = "P4Images/boutonhover.png";});
bouton3.addEventListener("mouseout", function(){this.src = "P4Images/bouton.png";});

bouton4.addEventListener("mouseover", function(){this.src = "P4Images/boutonhover.png";});
bouton4.addEventListener("mouseout", function(){this.src = "P4Images/bouton.png";});

bouton5.addEventListener("mouseover", function(){this.src = "P4Images/boutonhover.png";});
bouton5.addEventListener("mouseout", function(){this.src = "P4Images/bouton.png";});

bouton6.addEventListener("mouseover", function(){this.src = "P4Images/boutonhover.png";});
bouton6.addEventListener("mouseout", function(){this.src = "P4Images/bouton.png";});

bouton7.addEventListener("mouseover", function(){this.src = "P4Images/boutonhover.png";});
bouton7.addEventListener("mouseout", function(){this.src = "P4Images/bouton.png";});

boutonreset.addEventListener("mouseover", function(){
    if(finished == false && game == true){
        this.src = "P4Images/resethover.png";
    }else if(finished == false && game == false){
        this.src = "P4Images/rejouerhover.png"
    }else{
        this.src ="P4Images/newgamehover.png";
    }
});
boutonreset.addEventListener("mouseout", function(){
    if(finished == false && game == true){
        this.src = "P4Images/reset.png";
    }else if(finished == false && game == false){
        this.src = "P4Images/rejouer.png"
    }else{
        this.src ="P4Images/newgame.png";
    }
});


////////////////// Action bouton 1 ////////////////////



bouton1.addEventListener("click", function(){
    if(game == true){
        if(F1verif == false){
            console.log("jeton en F1")
            F1verif = true;
            console.log(F1verif)
            if (tour == true){
                F1.style.backgroundColor = "green";
                tour = false;
                F1color = "green";
            }else{
                F1.style.backgroundColor = "red";
                tour = true;
                F1color = "red";
            }
        }else if (E1verif == false){
            console.log("jeton en E1")
            E1verif = true;
            console.log(E1verif)
            if (tour == true){
                E1.style.backgroundColor = "green";
                tour = false;
                E1color = "green";
            }else{
                E1.style.backgroundColor = "red";
                tour = true;
                E1color = "red";
            }
        }else if (D1verif == false){
            console.log("jeton en D1")
            D1verif = true;
            console.log(D1verif)
            if (tour == true){
                D1.style.backgroundColor = "green";
                tour = false;
                D1color = "green";
            }else{
                D1.style.backgroundColor = "red";
                tour = true;
                D1color = "red";
            }
        }else if (C1verif == false){
            console.log("jeton en C1")
            C1verif = true;
            console.log(C1verif)
            if (tour == true){
                C1.style.backgroundColor = "green";
                tour = false;
                C1color = "green";
            }else{
                C1.style.backgroundColor = "red";
                tour = true;
                C1color = "red";
            }
        }else if (B1verif == false){
            console.log("jeton en B1")
            B1verif = true;
            console.log(B1verif)
            if (tour == true){
                B1.style.backgroundColor = "green";
                tour = false;
                B1color = "green";
            }else{
                B1.style.backgroundColor = "red";
                tour = true;
                B1color = "red";
            }
        }else if (A1verif == false){
            console.log("jeton en A1")
            A1verif = true;
            console.log(A1verif)
            if (tour == true){
                A1.style.backgroundColor = "green";
                tour = false;
                A1color = "green";
            }else{
                A1.style.backgroundColor = "red";
                tour = true;
                A1color = "red";
            }
        }else{
            console.log("impossible")
        }
        if(tour == true){
            message.innerHTML = tourvert
            jeton.src = "P4Images/jeton_vert.png"
        }else{
            message.innerHTML = tourrouge
            jeton.src = "P4Images/jeton_rouge.png"
        }
        wincheck()
    }
})


////////////////// Action bouton 2 ////////////////////

bouton2.addEventListener("click", function(){
    if(game == true){
        if(F2verif == false){
            console.log("jeton en F2")
            F2verif = true;
            console.log(F2verif)
            if (tour == true){
                F2.style.backgroundColor = "green";
                tour = false;
                F2color = "green";
            }else{
                F2.style.backgroundColor = "red";
                tour = true;
                F2color = "red";
            }
        }else if (E2verif == false){
            console.log("jeton en E2")
            E2verif = true;
            console.log(E2verif)
            if (tour == true){
                E2.style.backgroundColor = "green";
                tour = false;
                E2color = "green";
            }else{
                E2.style.backgroundColor = "red";
                tour = true;
                E2color = "red";
            }
        }else if (D2verif == false){
            console.log("jeton en D2")
            D2verif = true;
            console.log(D2verif)
            if (tour == true){
                D2.style.backgroundColor = "green";
                tour = false;
                D2color = "green";
            }else{
                D2.style.backgroundColor = "red";
                tour = true;
                D2color = "red";
            }
        }else if (C2verif == false){
            console.log("jeton en C2")
            C2verif = true;
            console.log(C2verif)
            if (tour == true){
                C2.style.backgroundColor = "green";
                tour = false;
                C2color = "green";
            }else{
                C2.style.backgroundColor = "red";
                tour = true;
                C2color = "red";
            }
        }else if (B2verif == false){
            console.log("jeton en B2")
            B2verif = true;
            console.log(B2verif)
            if (tour == true){
                B2.style.backgroundColor = "green";
                tour = false;
                B2color = "green";
            }else{
                B2.style.backgroundColor = "red";
                tour = true;
                B2color = "red";
            }
        }else if (A2verif == false){
            console.log("jeton en A2")
            A2verif = true;
            console.log(A2verif)
            if (tour == true){
                A2.style.backgroundColor = "green";
                tour = false;
                A2color = "green";
            }else{
                A2.style.backgroundColor = "red";
                tour = true;
                A2color = "red";
            }
        }else{
            console.log("impossible")
        }
        if(tour == true){
            message.innerHTML = tourvert
            jeton.src = "P4Images/jeton_vert.png"
        }else{
            message.innerHTML = tourrouge
            jeton.src = "P4Images/jeton_rouge.png"
        }
        wincheck()
    }
})


////////////////// Action bouton 3 ////////////////////

bouton3.addEventListener("click", function(){
    if(game == true){
        if(F3verif == false){
            console.log("jeton en F3")
            F3verif = true;
            console.log(F3verif)
            if (tour == true){
                F3.style.backgroundColor = "green";
                tour = false;
                F3color = "green";
            }else{
                F3.style.backgroundColor = "red";
                tour = true;
                F3color = "red";
            }
        }else if (E3verif == false){
            console.log("jeton en E3")
            E3verif = true;
            console.log(E3verif)
            if (tour == true){
                E3.style.backgroundColor = "green";
                tour = false;
                E3color = "green";
            }else{
                E3.style.backgroundColor = "red";
                tour = true;
                E3color = "red";
            }
        }else if (D3verif == false){
            console.log("jeton en D3")
            D3verif = true;
            console.log(D3verif)
            if (tour == true){
                D3.style.backgroundColor = "green";
                tour = false;
                D3color = "green";
            }else{
                D3.style.backgroundColor = "red";
                tour = true;
                D3color = "red";
            }
        }else if (C3verif == false){
            console.log("jeton en C3")
            C3verif = true;
            console.log(C3verif)
            if (tour == true){
                C3.style.backgroundColor = "green";
                tour = false;
                C3color = "green";
            }else{
                C3.style.backgroundColor = "red";
                tour = true;
                C3color = "red";
            }
        }else if (B3verif == false){
            console.log("jeton en B3")
            B3verif = true;
            console.log(B3verif)
            if (tour == true){
                B3.style.backgroundColor = "green";
                tour = false;
                B3color = "green";
            }else{
                B3.style.backgroundColor = "red";
                tour = true;
                B3color = "red";
            }
        }else if (A3verif == false){
            console.log("jeton en A3")
            A3verif = true;
            console.log(A3verif)
            if (tour == true){
                A3.style.backgroundColor = "green";
                tour = false;
                A3color = "green";
            }else{
                A3.style.backgroundColor = "red";
                tour = true;
                A3color = "red";
            }
        }else{
            console.log("impossible")
        }
        if(tour == true){
            message.innerHTML = tourvert
            jeton.src = "P4Images/jeton_vert.png"
        }else{
            message.innerHTML = tourrouge
            jeton.src = "P4Images/jeton_rouge.png"
        }
        wincheck()
    }
})


////////////////// Action bouton 4 ////////////////////

bouton4.addEventListener("click", function(){
    if(game == true){
        if(F4verif == false){
            console.log("jeton en F4")
            F4verif = true;
            console.log(F4verif)
            if (tour == true){
                F4.style.backgroundColor = "green";
                tour = false;
                F4color = "green";
            }else{
                F4.style.backgroundColor = "red";
                tour = true;
                F4color = "red";
            }
        }else if (E4verif == false){
            console.log("jeton en E4")
            E4verif = true;
            console.log(E4verif)
            if (tour == true){
                E4.style.backgroundColor = "green";
                tour = false;
                E4color = "green";
            }else{
                E4.style.backgroundColor = "red";
                tour = true;
                E4color = "red";
            }
        }else if (D4verif == false){
            console.log("jeton en D4")
            D4verif = true;
            console.log(D4verif)
            if (tour == true){
                D4.style.backgroundColor = "green";
                tour = false;
                D4color = "green";
            }else{
                D4.style.backgroundColor = "red";
                tour = true;
                D4color = "red";
            }
        }else if (C4verif == false){
            console.log("jeton en C4")
            C4verif = true;
            console.log(C4verif)
            if (tour == true){
                C4.style.backgroundColor = "green";
                tour = false;
                C4color = "green";
            }else{
                C4.style.backgroundColor = "red";
                tour = true;
                C4color = "red";
            }
        }else if (B4verif == false){
            console.log("jeton en B4")
            B4verif = true;
            console.log(B4verif)
            if (tour == true){
                B4.style.backgroundColor = "green";
                tour = false;
                B4color = "green";
            }else{
                B4.style.backgroundColor = "red";
                tour = true;
                B4color = "red";
            }
        }else if (A4verif == false){
            console.log("jeton en A4")
            A4verif = true;
            console.log(A4verif)
            if (tour == true){
                A4.style.backgroundColor = "green";
                tour = false;
                A4color = "green";
            }else{
                A4.style.backgroundColor = "red";
                tour = true;
                A4color = "red";
            }
        }else{
            console.log("impossible")
        }
        if(tour == true){
            message.innerHTML = tourvert
            jeton.src = "P4Images/jeton_vert.png"
        }else{
            message.innerHTML = tourrouge
            jeton.src = "P4Images/jeton_rouge.png"
        }
        wincheck()
    }
})


////////////////// Action bouton 5 ////////////////////

bouton5.addEventListener("click", function(){
    if(game == true){
        if(F5verif == false){
            console.log("jeton en F5")
            F5verif = true;
            console.log(F5verif)
            if (tour == true){
                F5.style.backgroundColor = "green";
                tour = false;
                F5color = "green";
            }else{
                F5.style.backgroundColor = "red";
                tour = true;
                F5color = "red";
            }
        }else if (E5verif == false){
            console.log("jeton en E5")
            E5verif = true;
            console.log(E5verif)
            if (tour == true){
                E5.style.backgroundColor = "green";
                tour = false;
                E5color = "green";
            }else{
                E5.style.backgroundColor = "red";
                tour = true;
                E5color = "red";
            }
        }else if (D5verif == false){
            console.log("jeton en D5")
            D5verif = true;
            console.log(D5verif)
            if (tour == true){
                D5.style.backgroundColor = "green";
                tour = false;
                D5color = "green";
            }else{
                D5.style.backgroundColor = "red";
                tour = true;
                D5color = "red";
            }
        }else if (C5verif == false){
            console.log("jeton en C5")
            C5verif = true;
            console.log(C5verif)
            if (tour == true){
                C5.style.backgroundColor = "green";
                tour = false;
                C5color = "green";
            }else{
                C5.style.backgroundColor = "red";
                tour = true;
                C5color = "red";
            }
        }else if (B5verif == false){
            console.log("jeton en B5")
            B5verif = true;
            console.log(B5verif)
            if (tour == true){
                B5.style.backgroundColor = "green";
                tour = false;
                B5color = "green";
            }else{
                B5.style.backgroundColor = "red";
                tour = true;
                B5color = "red";
            }
        }else if (A5verif == false){
            console.log("jeton en A5")
            A5verif = true;
            console.log(A5verif)
            if (tour == true){
                A5.style.backgroundColor = "green";
                tour = false;
                A5color = "green";
            }else{
                A5.style.backgroundColor = "red";
                tour = true;
                A5color = "red";
            }
        }else{
            console.log("impossible")
        }
        if(tour == true){
            message.innerHTML = tourvert
            jeton.src = "P4Images/jeton_vert.png"
        }else{
            message.innerHTML = tourrouge
            jeton.src = "P4Images/jeton_rouge.png"
        }
        wincheck()
    }
})


////////////////// Action bouton 6 ////////////////////

bouton6.addEventListener("click", function(){
    if(game == true){
        if(F6verif == false){
            console.log("jeton en F6")
            F6verif = true;
            console.log(F6verif)
            if (tour == true){
                F6.style.backgroundColor = "green";
                tour = false;
                F6color = "green";
            }else{
                F6.style.backgroundColor = "red";
                tour = true;
                F6color = "red";
            }
        }else if (E6verif == false){
            console.log("jeton en E6")
            E6verif = true;
            console.log(E6verif)
            if (tour == true){
                E6.style.backgroundColor = "green";
                tour = false;
                E6color = "green";
            }else{
                E6.style.backgroundColor = "red";
                tour = true;
                E6color = "red";
            }
        }else if (D6verif == false){
            console.log("jeton en D6")
            D6verif = true;
            console.log(D6verif)
            if (tour == true){
                D6.style.backgroundColor = "green";
                tour = false;
                D6color = "green";
            }else{
                D6.style.backgroundColor = "red";
                tour = true;
                D6color = "red";
            }
        }else if (C6verif == false){
            console.log("jeton en C6")
            C6verif = true;
            console.log(C6verif)
            if (tour == true){
                C6.style.backgroundColor = "green";
                tour = false;
                C6color = "green";
            }else{
                C6.style.backgroundColor = "red";
                tour = true;
                C6color = "red";
            }
        }else if (B6verif == false){
            console.log("jeton en B6")
            B6verif = true;
            console.log(B6verif)
            if (tour == true){
                B6.style.backgroundColor = "green";
                tour = false;
                B6color = "green";
            }else{
                B6.style.backgroundColor = "red";
                tour = true;
                B6color = "red";
            }
        }else if (A6verif == false){
            console.log("jeton en A6")
            A6verif = true;
            console.log(A6verif)
            if (tour == true){
                A6.style.backgroundColor = "green";
                tour = false;
                A6color = "green";
            }else{
                A6.style.backgroundColor = "red";
                tour = true;
                A6color = "red";
            }
        }else{
            console.log("impossible")
        }
        if(tour == true){
            message.innerHTML = tourvert
            jeton.src = "P4Images/jeton_vert.png"
        }else{
            message.innerHTML = tourrouge
            jeton.src = "P4Images/jeton_rouge.png"
        }
        wincheck()
    }
})


////////////////// Action bouton 7 ////////////////////

bouton7.addEventListener("click", function(){
    if(game == true){
        if(F7verif == false){
            console.log("jeton en F7")
            F7verif = true;
            console.log(F7verif)
            if (tour == true){
                F7.style.backgroundColor = "green";
                tour = false;
                F7color = "green";
            }else{
                F7.style.backgroundColor = "red";
                tour = true;
                F7color = "red";
            }
        }else if (E7verif == false){
            console.log("jeton en E7")
            E7verif = true;
            console.log(E7verif)
            if (tour == true){
                E7.style.backgroundColor = "green";
                tour = false;
                E7color = "green";
            }else{
                E7.style.backgroundColor = "red";
                tour = true;
                E7color = "red";
            }
        }else if (D7verif == false){
            console.log("jeton en D7")
            D7verif = true;
            console.log(D7verif)
            if (tour == true){
                D7.style.backgroundColor = "green";
                tour = false;
                D7color = "green";
            }else{
                D7.style.backgroundColor = "red";
                tour = true;
                D7color = "red";
            }
        }else if (C7verif == false){
            console.log("jeton en C7")
            C7verif = true;
            console.log(C7verif)
            if (tour == true){
                C7.style.backgroundColor = "green";
                tour = false;
                C7color = "green";
            }else{
                C7.style.backgroundColor = "red";
                tour = true;
                C7color = "red";
            }
        }else if (B7verif == false){
            console.log("jeton en B7")
            B7verif = true;
            console.log(B7verif)
            if (tour == true){
                B7.style.backgroundColor = "green";
                tour = false;
                B7color = "green";
            }else{
                B7.style.backgroundColor = "red";
                tour = true;
                B7color = "red";
            }
        }else if (A7verif == false){
            console.log("jeton en A7")
            A7verif = true;
            console.log(A7verif)
            if (tour == true){
                A7.style.backgroundColor = "green";
                tour = false;
                A7color = "green";
            }else{
                A7.style.backgroundColor = "red";
                tour = true;
                A7color = "red";
            }
        }else{
            console.log("impossible")
        }
        if(tour == true){
            message.innerHTML = tourvert
            jeton.src = "P4Images/jeton_vert.png"
        }else{
            message.innerHTML = tourrouge
            jeton.src = "P4Images/jeton_rouge.png"
        }
        wincheck()
    }
})


////////////// bouton reset ////////////////

boutonreset.addEventListener("click", function(){
    const totaltiles = document.querySelectorAll(".fond")
    totaltiles.forEach((tiles) => {
        tiles.style.backgroundColor = "#262c2c"
    })
    tour = true
    count = 0
    win = ""
    A1verif = false;
    A2verif = false;
    A3verif = false;
    A4verif = false;
    A5verif = false;
    A6verif = false;
    A7verif = false;
    B1verif = false;
    B2verif = false;
    B3verif = false;
    B4verif = false;
    B5verif = false;
    B6verif = false;
    B7verif = false;
    C1verif = false;
    C2verif = false;
    C3verif = false;
    C4verif = false;
    C5verif = false;
    C6verif = false;
    C7verif = false;
    D1verif = false;
    D2verif = false;
    D3verif = false;
    D4verif = false;
    D5verif = false;
    D6verif = false;
    D7verif = false;
    E1verif = false;
    E2verif = false;
    E3verif = false;
    E4verif = false;
    E5verif = false;
    E6verif = false;
    E7verif = false;
    F1verif = false;
    F2verif = false;
    F3verif = false;
    F4verif = false;
    F5verif = false;
    F6verif = false;
    F7verif = false;
    A1color = "";
    A2color = "";
    A3color = "";
    A4color = "";
    A5color = "";
    A6color = "";
    A7color = "";

    B1color = "";
    B2color = "";
    B3color = "";
    B4color = "";
    B5color = "";
    B6color = "";
    B7color = "";

    C1color = "";
    C2color = "";
    C3color = "";
    C4color = "";
    C5color = "";
    C6color = "";
    C7color = "";

    D1color = "";
    D2color = "";
    D3color = "";
    D4color = "";
    D5color = "";
    D6color = "";
    D7color = "";

    E1color = "";
    E2color = "";
    E3color = "";
    E4color = "";
    E5color = "";
    E6color = "";
    E7color = "";

    F1color = "";
    F2color = "";
    F3color = "";
    F4color = "";
    F5color = "";
    F6color = "";
    F7color = "";
    message.innerHTML = "Au tour du joueur vert de commencer"
    jeton.src = "P4Images/jeton_vert.png"
    game = true
    round.innerHTML = tourcount
    message.style.color = "#46c36c"
    if (finished == true){
        manche1.display = "none"
        jeton1.src = ""
        manche2.display = "none"
        jeton2.src = ""
        manche3.display = "none"
        jeton3.src = ""
        manche4.display = "none"
        jeton4.src = ""
        manche5.display = "none"
        jeton5.src = ""
        m1 = false
        m2 = false
        m3 = false
        m4 = false
        m5 = false
        wingreencount = 0
        winredcount = 0
        wincount = 0
        tourcount = 1
        finished = false
    }
});

///////////// Conditions de victoire ////////////

function wingreen(){
    message.style.color = "green"
    console.log("les verts gagnent")
    message.innerHTML = "Manche remportée par le joueur Vert !"
    game = false
    boutonreset.src = "P4Images/rejouer.png"
    wingreencount += 1;
    tourcount += 1
    wincount += 1
    if (m1 == false){
        manche1.display = "block"
        jeton1.src = "P4Images/jeton_vert.png"
        m1 = true
    }
    else if (m2 == false){
        manche2.display = "block"
        jeton2.src = "P4Images/jeton_vert.png"
        m2 = true
    }
    else if (m3 == false){
        manche3.display = "block"
        jeton3.src = "P4Images/jeton_vert.png"
        m3 = true
    }
    else if (m4 == false){
        manche4.display = "block"
        jeton4.src = "P4Images/jeton_vert.png"
        m4 = true
    }
    else if (m5 == false){
        manche5.display = "block"
        jeton5.src = "P4Images/jeton_vert.png"
        m5 = true
    }
    if (wingreencount >= 3 || winredcount >= 3){
        message.style.color = "yellow"
        if (wingreencount >= 3){
            message.innerHTML = "Les verts gagnent la partie";
        }else if (winredcount >= 3){
            message.innerHTML = "Les rouges gagnent la partie";
        }
        boutonreset.src = "P4Images/newgame.png"
        wincount = 0
        tourcount = 1
        finished = true
    }
    console.log("finished = " + finished)
}

function winred(){
    message.style.color = "red"
    console.log("les rouges gagnent")
    message.innerHTML = "Manche remportée par le joueur Rouge !"
    game = false
    boutonreset.src = "P4Images/rejouer.png"
    winredcount += 1;
    tourcount += 1
    wincount += 1
    if (m1 == false){
        manche1.display = "block"
        jeton1.src = "P4Images/jeton_rouge.png"
        m1 = true
    }
    else if (m2 == false){
        manche2.display = "block"
        jeton2.src = "P4Images/jeton_rouge.png"
        m2 = true
    }
    else if (m3 == false){
        manche3.display = "block"
        jeton3.src = "P4Images/jeton_rouge.png"
        m3 = true
    }
    else if (m4 == false){
        manche4.display = "block"
        jeton4.src = "P4Images/jeton_rouge.png"
        m4 = true
    }
    else if (m5 == false){
        manche5.display = "block"
        jeton5.src = "P4Images/jeton_rouge.png"
        m5 = true
    }
    if (wingreencount >= 3 || winredcount >= 3){
        message.style.color = "yellow"
        if (wingreencount >= 3){
            message.innerHTML = "Les verts gagnent la partie";
        }else if (winredcount >= 3){
            message.innerHTML = "Les rouges gagnent la partie";
        }
        boutonreset.src = "P4Images/newgame.png"
        wincount = 0
        tourcount = 1
        finished = true
    }
    console.log("finished = " + finished)
}

//////// Check de victoire ////////

function wincheck(){

//////// Vertical ////////

/// A -> D ///

    if(A1color == "green" && B1color == "green" && C1color == "green" && D1color == "green" ){
        wingreen()
    }
    if(A1color == "red" && B1color == "red" && C1color == "red" && D1color == "red" )
    {
        winred()
    }

    if(A2color == "green" && B2color == "green" && C2color == "green" && D2color == "green" ){
        wingreen()
    }
    if(A2color == "red" && B2color == "red" && C2color == "red" && D2color == "red" )
    {
        winred()
    }

    if(A3color == "green" && B3color == "green" && C3color == "green" && D3color == "green" ){
        wingreen()
    }
    if(A3color == "red" && B3color == "red" && C3color == "red" && D3color == "red" )
    {
        winred()
    }

    if(A4color == "green" && B4color == "green" && C4color == "green" && D4color == "green" ){
        wingreen()
    }
    if(A4color == "red" && B4color == "red" && C4color == "red" && D4color == "red" )
    {
        winred()
    }

    if(A5color == "green" && B5color == "green" && C5color == "green" && D5color == "green" ){
        wingreen()
    }
    if(A5color == "red" && B5color == "red" && C5color == "red" && D5color == "red" )
    {
        winred()
    }

    if(A6color == "green" && B6color == "green" && C6color == "green" && D6color == "green" ){
        wingreen()
    }
    if(A6color == "red" && B6color == "red" && C6color == "red" && D6color == "red" )
    {
        winred()
    }

    if(A7color == "green" && B7color == "green" && C7color == "green" && D7color == "green" ){
        wingreen()
    }
    if(A7color == "red" && B7color == "red" && C7color == "red" && D7color == "red" )
    {
        winred()
    }

/// B -> E ///

    if(B1color == "green" && C1color == "green" && D1color == "green" && E1color == "green" ){
        wingreen()
    }
    if(B1color == "red" && C1color == "red" && D1color == "red" && E1color == "red" )
    {
        winred()
    }

    if(B2color == "green" && C2color == "green" && D2color == "green" && E2color == "green" ){
        wingreen()
    }
    if(B2color == "red" && C2color == "red" && D2color == "red" && E2color == "red" )
    {
        winred()
    }

    if(B3color == "green" && C3color == "green" && D3color == "green" && E3color == "green" ){
        wingreen()
    }
    if(B3color == "red" && C3color == "red" && D3color == "red" && E3color == "red" )
    {
        winred()
    }

    if(B4color == "green" && C4color == "green" && D4color == "green" && E4color == "green" ){
        wingreen()
    }
    if(B4color == "red" && C4color == "red" && D4color == "red" && E4color == "red" )
    {
        winred()
    }

    if(B5color == "green" && C5color == "green" && D5color == "green" && E5color == "green" ){
        wingreen()
    }
    if(B5color == "red" && C5color == "red" && D5color == "red" && E5color == "red" )
    {
        winred()
    }

    if(B6color == "green" && C6color == "green" && D6color == "green" && E6color == "green" ){
        wingreen()
    }
    if(B6color == "red" && C6color == "red" && D6color == "red" && E6color == "red" )
    {
        winred()
    }

    if(B7color == "green" && C7color == "green" && D7color == "green" && E7color == "green" ){
        wingreen()
    }
    if(B7color == "red" && C7color == "red" && D7color == "red" && E7color == "red" )
    {
        winred()
    }

/// C -> F ///

    if(C1color == "green" && D1color == "green" && E1color == "green" && F1color == "green" ){
        wingreen()
    }
    if(C1color == "red" && D1color == "red" && E1color == "red" && F1color == "red" )
    {
        winred()
    }

    if(C2color == "green" && D2color == "green" && E2color == "green" && F2color == "green" ){
        wingreen()
    }
    if(C2color == "red" && D2color == "red" && E2color == "red" && F2color == "red" )
    {
        winred()
    }

    if(C3color == "green" && D3color == "green" && E3color == "green" && F3color == "green" ){
        wingreen()
    }
    if(C3color == "red" && D3color == "red" && E3color == "red" && F3color == "red" )
    {
        winred()
    }

    if(C4color == "green" && D4color == "green" && E4color == "green" && F4color == "green" ){
        wingreen()
    }
    if(C4color == "red" && D4color == "red" && E4color == "red" && F4color == "red" )
    {
        winred()
    }

    if(C5color == "green" && D5color == "green" && E5color == "green" && F5color == "green" ){
        wingreen()
    }
    if(C5color == "red" && D5color == "red" && E5color == "red" && F5color == "red" )
    {
        winred()
    }

    if(C6color == "green" && D6color == "green" && E6color == "green" && F6color == "green" ){
        wingreen()
    }
    if(C6color == "red" && D6color == "red" && E6color == "red" && F6color == "red" )
    {
        winred()
    }

    if(C7color == "green" && D7color == "green" && E7color == "green" && F7color == "green" ){
        wingreen()
    }
    if(C7color == "red" && D7color == "red" && E7color == "red" && F7color == "red" )
    {
        winred()
    }

//////// Horizontal ////////

// A

    if(A1color == "green" && A2color == "green" && A3color == "green" && A4color == "green"){
        wingreen()
    }
    if(A1color == "red" && A2color == "red" && A3color == "red" && A4color == "red")
    {
        winred()
    }

    if(A2color == "green" && A3color == "green" && A4color == "green" && A5color == "green"){
        wingreen()
    }
    if(A2color == "red" && A3color == "red" && A4color == "red" && A5color == "red")
    {
        winred()
    }

    if(A3color == "green" && A4color == "green" && A5color == "green" && A6color == "green"){
        wingreen()
    }
    if(A3color == "red" && A4color == "red" && A5color == "red" && A6color == "red")
    {
        winred()
    }

    if(A4color == "green" && A5color == "green" && A6color == "green" && A7color == "green"){
        wingreen()
    }
    if(A4color == "red" && A5color == "red" && A6color == "red" && A7color == "red")
    {
        winred()
    }

// B

    if(B1color == "green" && B2color == "green" && B3color == "green" && B4color == "green"){
        wingreen()
    }
    if(B1color == "red" && B2color == "red" && B3color == "red" && B4color == "red")
    {
        winred()
    }

    if(B2color == "green" && B3color == "green" && B4color == "green" && B5color == "green"){
        wingreen()
    }
    if(B2color == "red" && B3color == "red" && B4color == "red" && B5color == "red")
    {
        winred()
    }

    if(B3color == "green" && B4color == "green" && B5color == "green" && B6color == "green"){
        wingreen()
    }
    if(B3color == "red" && B4color == "red" && B5color == "red" && B6color == "red")
    {
        winred()
    }

    if(B4color == "green" && B5color == "green" && B6color == "green" && B7color == "green"){
        wingreen()
    }
    if(B4color == "red" && B5color == "red" && B6color == "red" && B7color == "red")
    {
        winred()
    }

// C

    if(C1color == "green" && C2color == "green" && C3color == "green" && C4color == "green"){
        wingreen()
    }
    if(C1color == "red" && C2color == "red" && C3color == "red" && C4color == "red")
    {
        winred()
    }

    if(C2color == "green" && C3color == "green" && C4color == "green" && C5color == "green"){
        wingreen()
    }
    if(C2color == "red" && C3color == "red" && C4color == "red" && C5color == "red")
    {
        winred()
    }

    if(C3color == "green" && C4color == "green" && C5color == "green" && C6color == "green"){
        wingreen()
    }
    if(C3color == "red" && C4color == "red" && C5color == "red" && C6color == "red")
    {
        winred()
    }

    if(C4color == "green" && C5color == "green" && C6color == "green" && C7color == "green"){
        wingreen()
    }
    if(C4color == "red" && C5color == "red" && C6color == "red" && C7color == "red")
    {
        winred()
    }

// D

    if(D1color == "green" && D2color == "green" && D3color == "green" && D4color == "green"){
        wingreen()
    }
    if(D1color == "red" && D2color == "red" && D3color == "red" && D4color == "red")
    {
        winred()
    }

    if(D2color == "green" && D3color == "green" && D4color == "green" && D5color == "green"){
        wingreen()
    }
    if(D2color == "red" && D3color == "red" && D4color == "red" && D5color == "red")
    {
        winred()
    }

    if(D3color == "green" && D4color == "green" && D5color == "green" && D6color == "green"){
        wingreen()
    }
    if(D3color == "red" && D4color == "red" && D5color == "red" && D6color == "red")
    {
        winred()
    }

    if(D4color == "green" && D5color == "green" && D6color == "green" && D7color == "green"){
        wingreen()
    }
    if(D4color == "red" && D5color == "red" && D6color == "red" && D7color == "red")
    {
        winred()
    }

// E

    if(E1color == "green" && E2color == "green" && E3color == "green" && E4color == "green"){
        wingreen()
    }
    if(E1color == "red" && E2color == "red" && E3color == "red" && E4color == "red")
    {
        winred()
    }

    if(E2color == "green" && E3color == "green" && E4color == "green" && E5color == "green"){
        wingreen()
    }
    if(E2color == "red" && E3color == "red" && E4color == "red" && E5color == "red")
    {
        winred()
    }

    if(E3color == "green" && E4color == "green" && E5color == "green" && E6color == "green"){
        wingreen()
    }
    if(E3color == "red" && E4color == "red" && E5color == "red" && E6color == "red")
    {
        winred()
    }

    if(E4color == "green" && E5color == "green" && E6color == "green" && E7color == "green"){
        wingreen()
    }
    if(E4color == "red" && E5color == "red" && E6color == "red" && E7color == "red")
    {
        winred()
    }

// F

    if(F1color == "green" && F2color == "green" && F3color == "green" && F4color == "green"){
        wingreen()
    }
    if(F1color == "red" && F2color == "red" && F3color == "red" && F4color == "red")
    {
        winred()
    }

    if(F2color == "green" && F3color == "green" && F4color == "green" && F5color == "green"){
        wingreen()
    }
    if(F2color == "red" && F3color == "red" && F4color == "red" && F5color == "red")
    {
        winred()
    }

    if(F3color == "green" && F4color == "green" && F5color == "green" && F6color == "green"){
        wingreen()
    }
    if(F3color == "red" && F4color == "red" && F5color == "red" && F6color == "red")
    {
        winred()
    }

    if(F4color == "green" && F5color == "green" && F6color == "green" && F7color == "green"){
        wingreen()
    }
    if(F4color == "red" && F5color == "red" && F6color == "red" && F7color == "red")
    {
        winred()
    }

//////// Biais ////////

/// A4 -> D7 ///

    if(A4color == "green" && B5color == "green" && C6color == "green" && D7color == "green"){wingreen()}

    if(A4color == "red" && B5color == "red" && C6color == "red" && D7color == "red"){winred()}

/// A3 -> E7 ///    

    if(A3color == "green" && B4color == "green" && C5color == "green" && D6color == "green"){wingreen()}
    if(B4color == "green" && C5color == "green" && D6color == "green" && E7color == "green"){wingreen()}

    if(A3color == "red" && B4color == "red" && C5color == "red" && D6color == "red"){winred()}
    if(B4color == "red" && C5color == "red" && D6color == "red" && E7color == "red"){winred()}

/// A2 -> F7 ///    

    if(A2color == "green" && B3color == "green" && C4color == "green" && D5color == "green"){wingreen()}
    if(B3color == "green" && C4color == "green" && D5color == "green" && E6color == "green"){wingreen()}
    if(C4color == "green" && D5color == "green" && E6color == "green" && F7color == "green"){wingreen()}

    if(A2color == "red" && B3color == "red" && C4color == "red" && D5color == "red"){winred()}
    if(B3color == "red" && C4color == "red" && D5color == "red" && E6color == "red"){winred()}
    if(C4color == "red" && D5color == "red" && E6color == "red" && F7color == "red"){winred()}

/// A1 -> G7 ///

    if(A1color == "green" && B2color == "green" && C3color == "green" && D4color == "green"){wingreen()}
    if(B2color == "green" && C3color == "green" && D4color == "green" && E5color == "green"){wingreen()}
    if(C3color == "green" && D4color == "green" && E5color == "green" && F6color == "green"){wingreen()}

    if(A1color == "red" && B2color == "red" && C3color == "red" && D4color == "red"){winred()}
    if(B2color == "red" && C3color == "red" && D4color == "red" && E5color == "red"){winred()}
    if(C3color == "red" && D4color == "red" && E5color == "red" && F6color == "red"){winred()}

/// B1 -> F5 ///

    if(B1color == "green" && C2color == "green" && D3color == "green" && E4color == "green"){wingreen()}
    if(C2color == "green" && D3color == "green" && E4color == "green" && F5color == "green"){wingreen()}

    if(B1color == "red" && C2color == "red" && D3color == "red" && E4color == "red"){winred()}
    if(C2color == "red" && D3color == "red" && E4color == "red" && F5color == "red"){winred()}

/// C1 -> F4 ///

    if(C1color == "green" && D2color == "green" && E3color == "green" && F4color == "green"){wingreen()}

    if(C1color == "red" && D2color == "red" && E3color == "red" && F4color == "red"){winred()}

/// D1 -> A4 ///

    if(D1color == "green" && C2color == "green" && B3color == "green" && A4color == "green"){wingreen()}

    if(D1color == "red" && C2color == "red" && B3color == "red" && A4color == "red"){winred()}

/// E1 -> A5 ///

    if(E1color == "green" && D2color == "green" && C3color == "green" && B4color == "green"){wingreen()}
    if(D2color == "green" && C3color == "green" && B4color == "green" && A5color == "green"){wingreen()}

    if(E1color == "red" && D2color == "red" && C3color == "red" && B4color == "red"){winred()}
    if(D2color == "red" && C3color == "red" && B4color == "red" && A5color == "red"){winred()}

///  F1 -> A6 ///

    if(F1color == "green" && E2color == "green" && D3color == "green" && C4color == "green"){wingreen()}
    if(E2color == "green" && D3color == "green" && C4color == "green" && B5color == "green"){wingreen()}
    if(D3color == "green" && C4color == "green" && B5color == "green" && A6color == "green"){wingreen()}

    if(F1color == "red" && E2color == "red" && D3color == "red" && C4color == "red"){winred()}
    if(E2color == "red" && D3color == "red" && C4color == "red" && B5color == "red"){winred()}
    if(D3color == "red" && C4color == "red" && B5color == "red" && A6color == "red"){winred()}

/// F2 -> A7 ///

    if(F2color == "green" && E3color == "green" && D4color == "green" && C5color == "green"){wingreen()}
    if(E3color == "green" && D4color == "green" && C5color == "green" && B6color == "green"){wingreen()}
    if(D4color == "green" && C5color == "green" && B6color == "green" && A7color == "green"){wingreen()}

    if(F2color == "red" && E3color == "red" && D4color == "red" && C5color == "red"){winred()}
    if(E3color == "red" && D4color == "red" && C5color == "red" && B6color == "red"){winred()}
    if(D4color == "red" && C5color == "red" && B6color == "red" && A7color == "red"){winred()}

/// F3 -> B7 ///

    if(F3color == "green" && E4color == "green" && D5color == "green" && C6color == "green"){wingreen()}
    if(E4color == "green" && D5color == "green" && C6color == "green" && B7color == "green"){wingreen()}

    if(F3color == "red" && E4color == "red" && D5color == "red" && C6color == "red"){winred()}
    if(E4color == "red" && D5color == "red" && C6color == "red" && B7color == "red"){winred()}

/// F4 -> C7 ///

    if(F4color == "green" && E5color == "green" && D6color == "green" && C7color == "green"){wingreen()}

    if(F4color == "red" && E5color == "red" && D6color == "red" && C7color == "red"){winred()}

    if( A1verif == true && A2verif == true && A3verif == true && A4verif == true && A5verif == true && A6verif == true && A7verif == true && 
        B1verif == true && B2verif == true && B3verif == true && B4verif == true && B5verif == true && B6verif == true && B7verif == true && 
        C1verif == true && C2verif == true && C3verif == true && C4verif == true && C5verif == true && C6verif == true && C7verif == true && 
        D1verif == true && D2verif == true && D3verif == true && D4verif == true && D5verif == true && D6verif == true && D7verif == true && 
        E1verif == true && E2verif == true && E3verif == true && E4verif == true && E5verif == true && E6verif == true && E7verif == true && 
        F1verif == true && F2verif == true && F3verif == true && F4verif == true && F5verif == true && F6verif == true && F7verif == true){
            message.innerHTML = "Egalité, recommencez la manche"
        }
}