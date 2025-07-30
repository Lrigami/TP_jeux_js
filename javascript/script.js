let persoList = document.getElementById("perso-list");

let personnage = {
    "nom": "Jean Treparlaforce",
    "classe": "Barbare",
    "arme": "Hache à deux mains",
    "endurance": 80,
    "force": 90,
    "agilite": 20,
    "intelligence": 25
}

function createPersoCards(perso) {
    let persoCard = document.createElement("div");
    persoCard.classList.add("card");
    let persoName = document.createElement("h2");
    persoName.textContent = perso.nom;
    persoName.classList.add("card-title");
    persoCard.appendChild(persoName);

    let keyNb = Object.keys(perso);
    let valuesNb = Object.values(perso);
    for (let i = 1; i < keyNb.length; i++) {
        let carac = document.createElement("p");
        carac.textContent = `${keyNb[i]} : ${valuesNb[i]}`;
        carac.classList.add("card-text");
        persoCard.appendChild(carac);
    }

    let btnDiv = document.createElement("div");
    let selectBtn = document.createElement("btn");
    selectBtn.textContent = "Sélectionner";
    selectBtn.classList.add("btn", "btn-primary");
    let deleteBtn = document.createElement("btn");
    deleteBtn.textContent = "Supprimer";
    deleteBtn.classList.add("btn", "btn-danger");
    btnDiv.appendChild(selectBtn);
    btnDiv.appendChild(deleteBtn);

    persoCard.appendChild(btnDiv);
    persoList.appendChild(persoCard);
}

createPersoCards(personnage);