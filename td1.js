//Q1
var I_I = 0;
var A_array = [];

function getRandomArbitrary() {
    let I_min = -10;
    let I_max = 40;
    for (let I_i = 0; I_i < 20; I_i++){
        A_array.push(Math.floor(Math.random() * (I_max - I_min) + I_min))
    }
    return A_array;
}
console.log(getRandomArbitrary());
//Q2

function Affichage(){
    var O_el = document.getElementById("affichage-temperature");
    O_el.textContent = A_array[I_I];
    I_I++;
}

Affichage();

