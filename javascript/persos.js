// js pour les personnages
let getPersos = localStorage.getItem("allPersos");
let personnages = getPersos ? JSON.parse(getPersos, 'UTF-8') : [];

// create a new personnage 
let newPersoForm = document.getElementById("new-perso-form");

function createPerso() {
    let newPerso = {};
    newPerso.nom = document.getElementById("perso-name").value;
    newPerso.classe = document.getElementById("perso-classe").value;
    newPerso.arme = document.getElementById("perso-arme").value;
    newPerso.constitution = document.getElementById("perso-constitution").value;
    newPerso.force = document.getElementById("perso-force").value;
    newPerso.agilite = document.getElementById("perso-agilite").value;
    newPerso.intelligence = document.getElementById("perso-intelligence").value;
    newPerso.sagesse = document.getElementById("perso-sagesse").value;
    newPerso.charisme = document.getElementById("perso-charisme").value;
    personnages.push(newPerso);
    savePersos(personnages);
}

// save all personnages
function savePersos(personnages) {
    let allPersos = JSON.stringify(personnages);
    localStorage.setItem("allPersos", allPersos);
}

// supprimer un personnage
function deletePerso(indice) {
    personnages.splice(indice,1);
    savePersos(personnages);
    document.location.reload();
}