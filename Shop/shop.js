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




var avatarF2 = document.getElementById("avatarF2");
var avatarF2_achat = document.getElementById("avatarF2_achat");
var button_achat_F2 = document.getElementById("button_centre_F2");
var button_vendu_F2 = document.getElementById("avatarF2_vendu");

if(avatarF2_vendu == 1){
    button_vendu_F2.style.display = "flex";
    
}
avatarF2.addEventListener("mouseover", function() {
    if(avatarF2_vendu != 1){
        avatarF2_achat.style.display = 'flex';
    }
});
avatarF2.addEventListener("mouseout", function() {
    avatarF2_achat.style.display = 'none';
});
button_achat_F2.addEventListener('click', event => {
    if(gold >= 2000){
        console.log("achetez")
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarF2.png');
        newIMG.setAttribute('alt', 'img_profilF2');
        newIMG.setAttribute('class', 'img_profil');
        inv.appendChild(newIMG);
        gold -= 2000
        localStorage.setItem('gold_save', gold);
        avatarF2_vendu = 1;
        localStorage.setItem('avatarF2_vendu_save', avatarF2_vendu);
        button_vendu_F2.style.display = "flex";
        console.log(avatarF2_vendu)
        document.location.reload();
        
    }else{
        alert("Vous n'avez pas assez d'Hetic Coins !")
    }
});


var avatarH2 = document.getElementById("avatarH2");
var avatarH2_achat = document.getElementById("avatarH2_achat");
var button_achat_H2 = document.getElementById("button_centre_H2");
var button_vendu_H2 = document.getElementById("avatarH2_vendu");

if(avatarH2_vendu == 1){
    button_vendu_H2.style.display = "flex";
    
}
avatarH2.addEventListener("mouseover", function() {
    if(avatarH2_vendu != 1){
        avatarH2_achat.style.display = 'flex';
    }
});
avatarH2.addEventListener("mouseout", function() {
    avatarH2_achat.style.display = 'none';
});
button_achat_H2.addEventListener('click', event => {
    if(gold >= 2000){
        console.log("achetez")
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarH2.png');
        newIMG.setAttribute('alt', 'img_profilH2');
        newIMG.setAttribute('class', 'img_profil');
        inv.appendChild(newIMG);
        gold -= 2000
        localStorage.setItem('gold_save', gold);
        avatarH2_vendu = 1;
        localStorage.setItem('avatarH2_vendu_save', avatarH2_vendu);
        button_vendu_H2.style.display = "flex";
        console.log(avatarH2_vendu)
        document.location.reload();
    }else{
        alert("Vous n'avez pas assez d'Hetic Coins !")
    }
});


var avatarF3 = document.getElementById("avatarF3");
var avatarF3_achat = document.getElementById("avatarF3_achat");
var button_achat_F3 = document.getElementById("button_centre_F3");
var button_vendu_F3 = document.getElementById("avatarF3_vendu");

if(avatarF3_vendu == 1){
    button_vendu_F3.style.display = "flex";
    
}
avatarF3.addEventListener("mouseover", function() {
    if(avatarF3_vendu != 1){
        avatarF3_achat.style.display = 'flex';
    }
});
avatarF3.addEventListener("mouseout", function() {
    avatarF3_achat.style.display = 'none';
});
button_achat_F3.addEventListener('click', event => {
    if(gold >= 2000){
        console.log("achetez")
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarF3.png');
        newIMG.setAttribute('alt', 'img_profilF3');
        newIMG.setAttribute('class', 'img_profil');
        inv.appendChild(newIMG);
        gold -= 2000
        localStorage.setItem('gold_save', gold);
        avatarF3_vendu = 1;
        localStorage.setItem('avatarF3_vendu_save', avatarF3_vendu);
        button_vendu_F3.style.display = "flex";
        console.log(avatarF3_vendu)
        document.location.reload();
    }else{
        alert("Vous n'avez pas assez d'Hetic Coins !")
    }
});


var avatarH3 = document.getElementById("avatarH3");
var avatarH3_achat = document.getElementById("avatarH3_achat");
var button_achat_H3 = document.getElementById("button_centre_H3");
var button_vendu_H3 = document.getElementById("avatarH3_vendu");

if(avatarH3_vendu == 1){
    button_vendu_H3.style.display = "flex";
    
}
avatarH3.addEventListener("mouseover", function() {
    if(avatarH3_vendu != 1){
        avatarH3_achat.style.display = 'flex';
    }
});
avatarH3.addEventListener("mouseout", function() {
    avatarH3_achat.style.display = 'none';
});
button_achat_H3.addEventListener('click', event => {
    if(gold >= 2000){
        console.log("achetez")
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarH3.png');
        newIMG.setAttribute('alt', 'img_profilH3');
        newIMG.setAttribute('class', 'img_profil');
        inv.appendChild(newIMG);
        gold -= 2000
        localStorage.setItem('gold_save', gold);
        avatarH3_vendu = 1;
        localStorage.setItem('avatarH3_vendu_save', avatarH3_vendu);
        button_vendu_H3.style.display = "flex";
        console.log(avatarH3_vendu)
        document.location.reload();
    }else{
        alert("Vous n'avez pas assez d'Hetic Coins !")
    }
});


var avatarF4 = document.getElementById("avatarF4");
var avatarF4_achat = document.getElementById("avatarF4_achat");
var button_achat_F4 = document.getElementById("button_centre_F4");
var button_vendu_F4 = document.getElementById("avatarF4_vendu");

if(avatarF4_vendu == 1){
    button_vendu_F4.style.display = "flex";
    
}
avatarF4.addEventListener("mouseover", function() {
    if(avatarF4_vendu != 1){
        avatarF4_achat.style.display = 'flex';
    }
});
avatarF4.addEventListener("mouseout", function() {
    avatarF4_achat.style.display = 'none';
});
button_achat_F4.addEventListener('click', event => {
    if(gold >= 2000){
        console.log("achetez")
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarF4.png');
        newIMG.setAttribute('alt', 'img_profilF4');
        newIMG.setAttribute('class', 'img_profil');
        inv.appendChild(newIMG);
        gold -= 2000
        localStorage.setItem('gold_save', gold);
        avatarF4_vendu = 1;
        localStorage.setItem('avatarF4_vendu_save', avatarF4_vendu);
        button_vendu_F4.style.display = "flex";
        console.log(avatarF4_vendu)
        document.location.reload();
    }else{
        alert("Vous n'avez pas assez d'Hetic Coins !")
    }
});


var avatarH4 = document.getElementById("avatarH4");
var avatarH4_achat = document.getElementById("avatarH4_achat");
var button_achat_H4 = document.getElementById("button_centre_H4");
var button_vendu_H4 = document.getElementById("avatarH4_vendu");

if(avatarH4_vendu == 1){
    button_vendu_H4.style.display = "flex";
    
}
avatarH4.addEventListener("mouseover", function() {
    if(avatarH4_vendu != 1){
        avatarH4_achat.style.display = 'flex';
    }
});
avatarH4.addEventListener("mouseout", function() {
    avatarH4_achat.style.display = 'none';
});
button_achat_H4.addEventListener('click', event => {
    if(gold >= 2000){
        console.log("achetez")
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarH4.png');
        newIMG.setAttribute('alt', 'img_profilH4');
        newIMG.setAttribute('class', 'img_profil');
        inv.appendChild(newIMG);
        gold -= 2000
        localStorage.setItem('gold_save', gold);
        avatarH4_vendu = 1;
        localStorage.setItem('avatarH4_vendu_save', avatarH4_vendu);
        button_vendu_H4.style.display = "flex";
        console.log(avatarH4_vendu)
        document.location.reload();
    }else{
        alert("Vous n'avez pas assez d'Hetic Coins !")
    }
});


var avatarF5 = document.getElementById("avatarF5");
var avatarF5_achat = document.getElementById("avatarF5_achat");
var button_achat_F5 = document.getElementById("button_centre_F5");
var button_vendu_F5 = document.getElementById("avatarF5_vendu");

if(avatarF5_vendu == 1){
    button_vendu_F5.style.display = "flex";
    
}
avatarF5.addEventListener("mouseover", function() {
    if(avatarF5_vendu != 1){
        avatarF5_achat.style.display = 'flex';
    }
});
avatarF5.addEventListener("mouseout", function() {
    avatarF5_achat.style.display = 'none';
});
button_achat_F5.addEventListener('click', event => {
    if(gold >= 2000){
        console.log("achetez")
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarF5.png');
        newIMG.setAttribute('alt', 'img_profilF5');
        newIMG.setAttribute('class', 'img_profil');
        inv.appendChild(newIMG);
        gold -= 2000
        localStorage.setItem('gold_save', gold);
        avatarF5_vendu = 1;
        localStorage.setItem('avatarF5_vendu_save', avatarF5_vendu);
        button_vendu_F5.style.display = "flex";
        console.log(avatarF5_vendu)
        document.location.reload();
    }else{
        alert("Vous n'avez pas assez d'Hetic Coins !")
    }
});


var avatarH5 = document.getElementById("avatarH5");
var avatarH5_achat = document.getElementById("avatarH5_achat");
var button_achat_H5 = document.getElementById("button_centre_H5");
var button_vendu_H5 = document.getElementById("avatarH5_vendu");

if(avatarH5_vendu == 1){
    button_vendu_H5.style.display = "flex";
    
}
avatarH5.addEventListener("mouseover", function() {
    if(avatarH5_vendu != 1){
        avatarH5_achat.style.display = 'flex';
    }
});
avatarH5.addEventListener("mouseout", function() {
    avatarH5_achat.style.display = 'none';
});
button_achat_H5.addEventListener('click', event => {
    if(gold >= 2000){
        console.log("achetez")
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarH5.png');
        newIMG.setAttribute('alt', 'img_profilH5');
        newIMG.setAttribute('class', 'img_profil');
        inv.appendChild(newIMG);
        gold -= 2000
        localStorage.setItem('gold_save', gold);
        avatarH5_vendu = 1;
        localStorage.setItem('avatarH5_vendu_save', avatarH5_vendu);
        button_vendu_H5.style.display = "flex";
        console.log(avatarH5_vendu)
        document.location.reload();
    }else{
        alert("Vous n'avez pas assez d'Hetic Coins !")
    }
});


var avatarF6 = document.getElementById("avatarF6");
var avatarF6_achat = document.getElementById("avatarF6_achat");
var button_achat_F6 = document.getElementById("button_centre_F6");
var button_vendu_F6 = document.getElementById("avatarF6_vendu");

if(avatarF6_vendu == 1){
    button_vendu_F6.style.display = "flex";
    
}
avatarF6.addEventListener("mouseover", function() {
    if(avatarF6_vendu != 1){
        avatarF6_achat.style.display = 'flex';
    }
});
avatarF6.addEventListener("mouseout", function() {
    avatarF6_achat.style.display = 'none';
});
button_achat_F6.addEventListener('click', event => {
    if(gold >= 2000){
        console.log("achetez")
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarF6.png');
        newIMG.setAttribute('alt', 'img_profilF6');
        newIMG.setAttribute('class', 'img_profil');
        inv.appendChild(newIMG);
        gold -= 2000
        localStorage.setItem('gold_save', gold);
        avatarF6_vendu = 1;
        localStorage.setItem('avatarF6_vendu_save', avatarF6_vendu);
        button_vendu_F6.style.display = "flex";
        console.log(avatarF6_vendu)
        document.location.reload();
    }else{
        alert("Vous n'avez pas assez d'Hetic Coins !")
    }
});


var avatarH6 = document.getElementById("avatarH6");
var avatarH6_achat = document.getElementById("avatarH6_achat");
var button_achat_H6 = document.getElementById("button_centre_H6");
var button_vendu_H6 = document.getElementById("avatarH6_vendu");

if(avatarH6_vendu == 1){
    button_vendu_H6.style.display = "flex";
    
}
avatarH6.addEventListener("mouseover", function() {
    if(avatarH6_vendu != 1){
        avatarH6_achat.style.display = 'flex';
    }
});
avatarH6.addEventListener("mouseout", function() {
    avatarH6_achat.style.display = 'none';
});
button_achat_H6.addEventListener('click', event => {
    if(gold >= 2000){
        console.log("achetez")
        let newIMG = document.createElement('img');
        newIMG.setAttribute('src', '../avatars/avatarH6.png');
        newIMG.setAttribute('alt', 'img_profilH6');
        newIMG.setAttribute('class', 'img_profil');
        inv.appendChild(newIMG);
        gold -= 2000
        localStorage.setItem('gold_save', gold);
        avatarH6_vendu = 1;
        localStorage.setItem('avatarH6_vendu_save', avatarH6_vendu);
        button_vendu_H6.style.display = "flex";
        console.log(avatarH6_vendu)
        document.location.reload();
    }else{
        alert("Vous n'avez pas assez d'Hetic Coins !")
    }
});