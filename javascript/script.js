let persoList = document.getElementById("perso-list");
let persoCardTemplate = document.querySelector("template");
console.log(persoCardTemplate);

let getPersos = localStorage.getItem("allPersos");
console.log(getPersos);
let personnages = getPersos ? JSON.parse(getPersos, 'UTF-8') : [];

// create cards based on personnages array 
function createPersoCards(perso) {
    let persoCard = persoCardTemplate.content.cloneNode(true);
    console.log(persoCard);
    console.log(persoCard.h2);
    persoCard.querySelector("h2").textContent = perso.nom

    let persoP = persoCard.querySelectorAll("p span");
    let valuesNb = Object.values(perso);
    for (let i = 1; i < valuesNb.length; i++) {
        persoP[i-1].textContent = valuesNb[i];
    }

    persoList.appendChild(persoCard);
}

personnages.forEach(perso => createPersoCards(perso));  

// save all personnages
function savePersos(personnages) {
    let allPersos = JSON.stringify(personnages);
    localStorage.setItem("allPersos", allPersos);
}