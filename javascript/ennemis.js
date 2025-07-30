// js pour les ennemis
let getEnnemis = localStorage.getItem("allEnnemis");
let ennemis = getEnnemis ? JSON.parse(getEnnemis, 'UTF-8') : [];

// create a new ennemi
let newEnnemiForm = document.getElementById("new-ennemi-form");
let ennemiFp = document.getElementById("ennemi-fp");

for (let i = 1; i <= 30; i++) {
    let newOption = document.createElement("option");
    newOption.value = i;
    newOption.textContent = i;
    ennemiFp.appendChild(newOption);
}

function createEnnemi() {
    let newEnnemi = {};
    newEnnemi.nom = document.getElementById("ennemi-name").value;
    newEnnemi.taille = document.getElementById("ennemi-taille").value;
    newEnnemi.type = document.getElementById("ennemi-type").value;
    newEnnemi.resistances = Array.from(document.getElementById("ennemi-résistances").options).filter(option => option.selected).map(option => option.value);
    newEnnemi.vulnerabilites = Array.from(document.getElementById("ennemi-vulnérabilités").options).filter(option => option.selected).map(option => option.value);
    newEnnemi.immunites = Array.from(document.getElementById("ennemi-immunités").options).filter(option => option.selected).map(option => option.value);
    newEnnemi.fp = ennemiFp.value;
    console.log(newEnnemi);
    ennemis.push(newEnnemi);
    saveEnnemis(ennemis);
}

// save all ennemis
function saveEnnemis(ennemis) {
    let allEnnemis = JSON.stringify(ennemis);
    localStorage.setItem("allEnnemis", allEnnemis);
}

// supprimer un ennemi
function deleteEnnemi(indice) {
    ennemis.splice(indice,1);
    saveEnnemis(ennemis);
    document.location.reload();
}