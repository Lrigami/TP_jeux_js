// js pour l'index.html
let persoList = document.getElementById("perso-list");
let persoCardTemplate = document.querySelector("template");

// create cards based on personnages array 
personnages.forEach((perso, index) => createPersoCards(perso, index));  

function createPersoCards(perso, index) {
    let persoCard = persoCardTemplate.content.cloneNode(true);
    persoCard.querySelector("h2").textContent = perso.nom

    let persoP = persoCard.querySelectorAll("p span");
    let valuesNb = Object.values(perso);
    for (let i = 1; i < valuesNb.length; i++) {
        persoP[i-1].textContent = valuesNb[i];
    }

    let supBtn = persoCard.querySelector(".btn-danger");
    supBtn.setAttribute("onclick", `deletePerso(${index})`);
    persoList.appendChild(persoCard);
}

// supprimer un personnage
function deletePerso(indice) {
    personnages.splice(indice,1);
    savePersos(personnages);
    document.location.reload();
}