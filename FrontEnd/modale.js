import { Apifin } from "./cheminapi.js";
import deletevent from "./deletimage.js"


function ouvrirModale() {
    // Afficher la modale
    document.getElementById('Modale').style.display = 'block';
  }

  function fermerModale() {
    // Cacher la modale
    document.getElementById('Modale').style.display = 'none';
  }

  document.body.addEventListener("mousedown", function(event) {
    if (event.target.id === "lienModifier") {
      event.preventDefault();
      ouvrirModale();
    }
  });

  const buttonNodal = document.getElementById("buttonmodale");
  buttonNodal.addEventListener ('click', function (event) {
    event.preventDefault();
    fermerModale();
 });

 function ouvrirModaleajout() {
  // Afficher la modale
  document.getElementById('modaleajout').style.display = 'block';
}

document.body.addEventListener("mousedown", function(event) {
  if (event.target.id === "ajouterunephoto") {
    event.preventDefault();
    ouvrirModaleajout();
  }
});











let imageDataEntry;

const modale = document.getElementById("Modale");
let photomodale = modale.querySelector("#gallerymodal");

export default function importeImages () {
  photomodale.innerHTML=''
  fetch(Apifin("/works"), {
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
            //console.log(data);
           
             // Parcourir les données et créer des éléments d'image pour chaque entrée
              data.forEach(imageData => {
             // Log des informations de chaque image dans la console
              //console.log(imageData);
              
              // Créer un conteneur pour chaque image avec titre
              const containerElement = document.createElement('div');
              containerElement.classList.add('image-container-modale');
              // Créer un élément d'image
              const imageElement = document.createElement('img');

                  // Créez l'élément de bouton de suppression avec l'icône de la poubelle
              const deleteButton = document.createElement('div');
               deleteButton.classList.add('delete-button');

              // Ajoutez l'attribut data-image-id avec la valeur de l'ID de l'image
               deleteButton.setAttribute('data-image-id', imageData.id);
              // Créez l'icône de la poubelle avec Font Awesome
              const trashIcon = document.createElement('i');
              trashIcon.classList.add('fa-solid', 'fa-trash-can');



              // Ajoutez l'icône de la poubelle au bouton de suppression
              deleteButton.appendChild(trashIcon);

              // Ajoutez le bouton de suppression à la div de l'image

              containerElement.appendChild(deleteButton);



              // Définir l'attribut src de l'image avec l'URL de l'image
             imageElement.src = imageData.imageUrl;
             containerElement.appendChild(imageElement);
             photomodale.appendChild(containerElement);

             imageDataEntry = imageData;
       });
       deletevent ()
      })
  .catch(error => {
      // Gérer les erreurs survenues lors de la requête
      console.error('Erreur lors de la récupération des données:', error);
  });
}

// Appel de la fonction pour importer les images
importeImages ()

export { imageDataEntry };