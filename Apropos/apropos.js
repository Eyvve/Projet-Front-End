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

// FONCTION RESET /////////////////////////////////////

var reset = document.querySelector("#reset")

reset.addEventListener("click", () => {
    console.log("réinitialisation du compte")
    localStorage.clear()
    document.location.href='../index.html'

})

// LOADING /////////////////////////////////////

var loadingpage = document.querySelector("#loadingpage")

function loading(){
        console.log("chargement...")
        loadingpage.style.display = "grid";
    if(document.readyState == "complete"){
        loadingpage.style.display = "none";
        console.log("chargement terminé !")
    }
    
}