import { Apifin } from "./cheminapi.js";



// Exemple d'ajout de gestionnaire d'événements pour le bouton de suppression
//.addEventListener('click', function() {
    // Logique de suppression
   // deleteWork(workId); // Appeler la fonction de suppression avec l'ID du travail à supprimer
//});

// Fonction pour supprimer un travail avec l'API
function deleteWork(workId) {
    fetch(Apifin("/works/{id}"), {
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('La suppression a échoué.');
        }
        return response.json();
    })
    .then(data => {
        // Supprimer l'élément correspondant du DOM
        const elementToRemove = document.getElementById(`work-${workId}`);
        if (elementToRemove) {
            elementToRemove.remove();
        }
    })
    .catch(error => {
        console.error('Erreur lors de la suppression :', error);
    });
}