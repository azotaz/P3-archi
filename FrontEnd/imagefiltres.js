import { Apifin } from "./cheminapi.js";


const categoriefiltres = document.getElementById("portfolio")
let galleryElement = categoriefiltres.querySelector("#gallery")
export default function importeImagesprincipal () {
    galleryElement.innerHTML = ''
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


                // Créer un conteneur pour chaque image avec titre
                const containerElement = document.createElement('div');
                containerElement.classList.add('image-container');
                // Créer un élément d'image
                const imageElement = document.createElement('img');

                // Définir l'attribut src de l'image avec l'URL de l'image
                imageElement.src = imageData.imageUrl;
                containerElement.appendChild(imageElement);
                  // Créer un élément de titre
                  const titleElement = document.createElement('p');
                  const idElement = document.createElement('Id');
               // Définir le texte du titre avec le titre de l'image
                  titleElement.textContent = imageData.title;
                  idElement.textContent = imageData.categoryId;
                //création de class pour l'id
                  idElement.classList.add('Idphoto');
                // Ajouter l'image à la galerie
                containerElement.appendChild(titleElement);
                containerElement.appendChild(idElement);
                galleryElement.appendChild(containerElement);




         });
        })
        
    .catch(error => {
        // Gérer les erreurs survenues lors de la requête
        console.error('Erreur lors de la récupération des données:', error);
    });
}

// Appel de la fonction pour importer les images
importeImagesprincipal();