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

        
            // Log des informations de chaque image dans la console
             //console.log(idData);



             const selectCategories = document.getElementById('categories');

             data.forEach(category => {
                 // Création d'une option pour chaque catégorie

                 const option = document.createElement('option');
                 option.value = category.id;
                 option.text = category.name; // Utilisez la propriété text au lieu de textContent

                            // Limiter aux trois premières catégories
                 

                 // Ajout de l'option au menu déroulant
                 selectCategories.add(option);
             });
             data.forEach(idData => {
                
             const divfiltres = document.createElement('button');
             divfiltres.classList.add('styled-button');
             divfiltres.textContent = idData.name

             const idfiltres = document.createElement ('id');
            
             //const textfiltres = document.createElement('p');
           
             idfiltres.textContent = idData.id;
           
             idfiltres.classList.add('Idfiltre');

             //textfiltres.textContent = idData.name;

             divfiltres.appendChild(idfiltres);
             //divfiltres.appendChild(textfiltres);
             filtreElement.appendChild(divfiltres);
         });  
       })
    .catch(error => {
        // Gérer les erreurs survenues lors de la requête
        console.error('Erreur lors de la récupération des données:', error);
    });
}



// Fonction pour filtrer les images par ID
function filterImagesById(idfiltres) {
    const galleryImages = document.querySelectorAll('.image-container');

    galleryImages.forEach((galleryImage) => {
        const idElement = galleryImage.querySelector('.Idphoto').textContent;

        if (idfiltres === 'tous' || idElement === idfiltres) {
            galleryImage.style.display = 'inline-block'; // Affiche l'image
        } else {
            galleryImage.style.display = 'none'; // Masque l'image
        }
    });
}

// Ajouter des gestionnaires d'événements aux boutons de filtre
filtreElement.addEventListener('click', function (event) {
    const target = event.target;
    
    // Vérifier si l'élément cliqué est un bouton
    
        const idfiltres = target.querySelector('.Idfiltre').textContent;
        filterImagesById(idfiltres);

   // }
});


fonctionnementdufiltre(); 

