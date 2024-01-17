import { Apifin } from "./cheminapi.js";
import importeImages from "./modale.js";
import importeImagesprincipal from "./imagefiltres.js"

document.addEventListener('DOMContentLoaded', function() {
    var inputElement = document.getElementById('addphoto');
    var inputTitre = document.getElementById('titres');
    var selectCategories = document.getElementById('categories');
    var validerPhotoButton = document.getElementById('validerunephoto');

    validerPhotoButton.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire

    var file = inputElement.files[0];
    var formData = new FormData();

    formData.append('image', file);
    formData.append('title', inputTitre.value);
    formData.append('category', selectCategories.value);

    var token = localStorage.getItem("token");

        fetch(Apifin("/works"), {
            
                method: "POST",
                body: formData,
                headers: {
                    "Authorization": "Bearer " + token,
                },

            })
            .then(response => {
                console.log(response)
                if (!response.ok) {
                    throw new Error('Réponse du serveur non OK - Statut : ' + response.status);
                }else
                importeImages()
            importeImagesprincipal() 
                console.log("ok")
               //return response.json();
            })
            
           

            .catch(error => {
              console.error('Erreur lors de la requête :', error);
            });
        });    
    });
