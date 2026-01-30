//Q1
var I_I = 0;
var A_array = [];

function getRandomArbitrary() {
    let I_min = -10;
    let I_max = 40;
    for (let I_i = 0; I_i < 20; I_i++){
        A_array.push(Math.floor(Math.random() * (I_max - I_min) + I_min))
    }
}
//Q2

function affichage(){
    var O_el = document.getElementById("affichage-temperature");
    var O_message = document.getElementById("affichage-message");
    var I_valeur = A_array[I_I]; 
    
    O_el.textContent = I_valeur + " °C";

    if (I_valeur <= 0) {
        O_el.className = "bordure_blue";
    } else if (I_valeur <= 20) {
        O_el.className = "bordure_green";
    } else if (I_valeur <= 30) {
        O_el.className = "bordure_orange";
    } else {
        O_el.className = "bordure_red";
    }

    I_I++;
    if(I_I >= A_array.length){
        I_I = 0;
    }

    if(I_valeur < 0){
        O_message.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";            
    }else if(I_valeur > 30){
        O_message.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!";            
    }

}

const I_timer = setInterval(affichage, 200);

const F_afficherHistorique = function() {
    const O_zoneAffichage = document.getElementById("O_monTableau");

    if (O_zoneAffichage === null) {
        return; 
    }

    for (let I_i = 0; I_i < A_array.length; I_i++) {
        const O_ligne = document.createElement("tr"); 
        const O_cellule = document.createElement("td"); 

        O_cellule.textContent = A_array[I_i] + " °C"; 

        O_ligne.appendChild(O_cellule); 
        O_zoneAffichage.appendChild(O_ligne);
    }
};

getRandomArbitrary(); 
F_afficherHistorique();
affichage();

