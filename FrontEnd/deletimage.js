import { Apifin } from "./cheminapi.js";
import importeImages from "./modale.js";
import importeImagesprincipal from "./imagefiltres.js"


export default function deletevent() {

const modale = document.getElementById("Modale");
const photomodale = modale.querySelector("#gallerymodal");
const deleteButtons = photomodale.querySelectorAll('.delete-button');

deleteButtons.forEach(deleteButton => {
    deleteButton.addEventListener('click', function () {
    const imageId = deleteButton.getAttribute('data-image-id');
    console.log("ID de l'image à supprimer :", imageId);
    deleteImage(imageId);
            });
        });


}

deletevent()

// Fonction pour supprimer un travail avec l'API
function deleteImage(imageId) {
    var token = localStorage.getItem("token");
    fetch(Apifin(`/works/${imageId}`), {
        method: 'DELETE',
        headers: {
            "Authorization": "Bearer " + token,
        },
        
    })
    .then(response => {
        console.log(response)
        if (!response.ok) {
            throw new Error('La suppression a échoué.');
        }else
        console.log("suppression")
    })
    .then (importeImages())
    .then(importeImagesprincipal())

    .catch(error => {
        console.error('Erreur lors de la suppression :', error);
    });
    deletevent()
}
