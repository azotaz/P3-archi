import { Apifin } from "./cheminapi.js";

document.addEventListener('DOMContentLoaded', function() {
    var inputElement = document.getElementById('addphoto');
    var inputTitre = document.getElementById('titres');
    var selectCategories = document.getElementById('categories');
    var validerPhotoButton = document.getElementById('validerunephoto');

    validerPhotoButton.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire

    var file = inputElement.files[0];
    var formData = new FormData();

    formData.append('file', file);
    formData.append('titres', inputTitre.value);
    formData.append('categories', selectCategories.value);

    var token = localStorage.getItem("token");

        fetch(Apifin("/works"), {
                method: "POST",
                body: formData,
                headers: {
                    "Authorization": "Bearer " + token,
                },

            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Réponse du serveur non OK - Statut : ' + response.status);
                }
                return response.json();
            })
            .then(data => {
              console.log('Réponse de l\'API :', data);
            })
            .catch(error => {
              console.error('Erreur lors de la requête :', error);
            });
        });    
    });
