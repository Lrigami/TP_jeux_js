// js pour l'index.html
let persoList = document.getElementById("perso-list");
let persoCardTemplate = document.getElementById("perso-template");
let ennemisList = document.getElementById("ennemy-list");
let ennemiCardTemplate = document.getElementById("ennemi-template");

// create cards based on personnages array 
personnages.forEach((perso, index) => createPersoCards(perso, index));
ennemis.forEach((ennemi, index) => createEnnemisCards(ennemi, index));  

function createPersoCards(perso, index) {
    let persoCard = persoCardTemplate.content.cloneNode(true);
    persoCard.querySelector("h3").textContent = perso.nom

    let persoP = persoCard.querySelectorAll("p span");
    let valuesNb = Object.values(perso);
    for (let i = 1; i < valuesNb.length; i++) {
        persoP[i-1].textContent = valuesNb[i];
    }

    let supBtn = persoCard.querySelector(".btn-danger");
    supBtn.setAttribute("onclick", `deletePerso(${index})`);
    persoList.appendChild(persoCard);
}

function createEnnemisCards(ennemi, index) {
    let ennemiCard = ennemiCardTemplate.content.cloneNode(true);
    ennemiCard.querySelector("h3").textContent = ennemi.nom;

    let ennemiP = ennemiCard.querySelectorAll("p span");
    let valuesNb = Object.values(ennemi);
    for (let i = 1; i < valuesNb.length ; i++) {
        console.log(typeof valuesNb[i]);
        if(typeof valuesNb[i] == "string") {
            ennemiP[i-1].textContent = valuesNb[i];
        } else {
            for (let j = 0; j < valuesNb[i].length ; j++) {
                ennemiP[i-1].innerHTML += `<span>${valuesNb[i][j]}</span> `
            }
        }
    }

    let supBtn = ennemiCard.querySelector(".btn-danger");
    supBtn.setAttribute("onclick", `deleteEnnemi(${index})`);
    ennemisList.appendChild(ennemiCard);
}