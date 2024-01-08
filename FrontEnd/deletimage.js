import { Apifin } from "./cheminapi.js";



document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
const modale = document.getElementById("Modale");
const photomodale = modale.querySelector("#gallerymodal");
const deleteButtons = photomodale.querySelectorAll('.delete-button');

deleteButtons.forEach(deleteButton => {
    deleteButton.addEventListener('click', function () {
    // Appelez ici la fonction pour supprimer l'image avec imageData.id
    const imageId = deleteButton.getAttribute('data-image-id');
    console.log("ID de l'image à supprimer :", imageId);
    deleteImage(imageId);
            });
        });
     }, 1000); // Délai d'une seconde
});

// Fonction pour supprimer un travail avec l'API
function deleteImage(imageId) {
    fetch(Apifin(`/works/${imageId}`), {
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
        const elementToRemove = document.getElementById(`image-${imageId}`);
        if (elementToRemove) {
            elementToRemove.remove();
        }
    })
    .catch(error => {
        console.error('Erreur lors de la suppression :', error);
    });
}
