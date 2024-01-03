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

function fermerModaleajout() {
  // Cacher la modale
  document.getElementById('modaleajout').style.display = 'none';
}

document.body.addEventListener("mousedown", function(event) {
  if (event.target.id === "ajouterunephoto") {
    event.preventDefault();
    ouvrirModaleajout();
  }
});

const buttonNodale = document.getElementById("buttonmodaleajout");
buttonNodale.addEventListener ('click', function (event) {
  event.preventDefault();
  fermerModaleajout();
});

 /*function importemodale () {
    (data => {
        // Traitement des données (data) obtenues de l'API
        console.log(data);

         // Parcourir les données et créer des éléments d'image pour chaque entrée
          data.forEach(imageData => {
         // Log des informations de chaque image dans la console
          console.log(imageData);

          // Créer un conteneur pour chaque image avec titre
          const containerElement = document.createElement('div');
          containerElement.classList.add('image-container-modal');
          // Créer un élément d'image
          const imageElement = document.createElement('img');

          // Définir l'attribut src de l'image avec l'URL de l'image
          imageElement.src = imageData.imageUrl;
          containerElement.appendChild(imageElement);
          photomodale.appendChild(containerElement);
        });
    })
}


importemodale ();*/
import { Apifin } from "./cheminapi.js";

const modale = document.getElementById("Modale");
const photomodale = modale.querySelector("#gallerymodal");

function importeImages () {
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
            console.log(data);

             // Parcourir les données et créer des éléments d'image pour chaque entrée
              data.forEach(imageData => {
             // Log des informations de chaque image dans la console
              console.log(imageData);

              // Créer un conteneur pour chaque image avec titre
              const containerElement = document.createElement('div');
              containerElement.classList.add('image-container-modale');
              // Créer un élément d'image
              const imageElement = document.createElement('img');

              // Définir l'attribut src de l'image avec l'URL de l'image
              imageElement.src = imageData.imageUrl;
              containerElement.appendChild(imageElement);
                // Créer un élément de titre
             //   const titleElement = document.createElement('p');
              //  const idElement = document.createElement('Id');
             // Définir le texte du titre avec le titre de l'image
              //  titleElement.textContent = imageData.title;
              //  idElement.textContent = imageData.categoryId;
              //création de class pour l'id
              //  idElement.classList.add('Idphoto');
              // Ajouter l'image à la galerie
            //  containerElement.appendChild(titleElement);
              //containerElement.appendChild(idElement);
              photomodale.appendChild(containerElement);




       });
      })
  .catch(error => {
      // Gérer les erreurs survenues lors de la requête
      console.error('Erreur lors de la récupération des données:', error);
  });
}

// Appel de la fonction pour importer les images
importeImages();