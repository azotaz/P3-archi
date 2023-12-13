import { Apifin } from "./cheminapi.js";

// Tous: id 1,2,3 ; Objets : id 1 ; Appartements: id 2 ; hôtels & restaurants: id 3 
const filtres = document.getElementById("portfolio")
const filtreElement = filtres.querySelector ("#filtresclic")
function fonctionnementdufiltre () {
    fetch(Apifin("/categories"), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(response => {
        // Vérifier si la requête a réussi (statut 200 OK)
        if (!response.ok) {
            throw new Error('La requête a échoué');
        }
        // Retourner la réponse sous forme de JSON
        return response.json();
    })
    .then(data => {
        // Traitement des données (data) obtenues de l'API
        console.log(data);

        data.forEach(idData => {
            // Log des informations de chaque image dans la console
             console.log(idData);
            });
    })

}