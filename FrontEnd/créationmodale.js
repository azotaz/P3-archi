

function createModalStructure() {
    // Création des éléments
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');

    var modal = document.createElement('div');
    modal.classList.add('modal');

    var closeButton = document.createElement('button');
    closeButton.setAttribute('id', 'buttonmodale');
    closeButton.textContent = 'x';

    var title = document.createElement('p');
    title.textContent = 'Galerie Photo';

    var galleryDiv = document.createElement('div');
    galleryDiv.setAttribute('id', 'gallerymodal');

    var customLine = document.createElement('div');
    customLine.classList.add('ligne-personnalise');

    var addPhotoButton = document.createElement('button');
    addPhotoButton.setAttribute('id', 'ajouterunephoto');
    addPhotoButton.textContent = 'Ajouter une photo';

    // Ajout des éléments à la modal
    modal.appendChild(closeButton);
    modal.appendChild(title);
    modal.appendChild(galleryDiv);
    modal.appendChild(customLine);
    modal.appendChild(addPhotoButton);

    // Ajout de la modal à l'overlay
    overlay.appendChild(modal);

    // Ajout de l'overlay au conteneur principal avec l'ID "Modale"
    document.getElementById('Modale').appendChild(overlay);
  }

  // Appel de la fonction pour créer la structure HTML
  createModalStructure();

var inputAjout;
var stockAjoutPhoto;

    function createAddModalStructure() {
    // Création des éléments
    var modalAjout = document.createElement('div');
    modalAjout.classList.add('modalajout');

    var retourButton = document.createElement('button');
    retourButton.setAttribute('id', 'flecheretour');
    retourButton.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';

    var closeButtonAjout = document.createElement('button');
    closeButtonAjout.setAttribute('id', 'buttonmodaleajout');
    closeButtonAjout.textContent = 'x';

    var titleAjout = document.createElement('p');
    titleAjout.textContent = 'Ajout photo';

    stockAjoutPhoto = document.createElement('div');
    stockAjoutPhoto.setAttribute('id', 'stockajoutphoto');

    var imgAjout = document.createElement('img');
    imgAjout.classList.add('imgajout');
    imgAjout.setAttribute('src', 'assets/images/Vector.png');

    var labelAjout= document.createElement('label');
    labelAjout.setAttribute('id', 'addphotolabel');
    labelAjout.textContent='+ Ajouter photo';

    inputAjout = document.createElement('input');
    inputAjout.setAttribute('id', 'addphoto');
    inputAjout.setAttribute('type', 'file');

    var infoAjout = document.createElement('p');
    infoAjout.textContent = 'jpg, png : 4mo max';

    var formulaireModale = document.createElement('section');
    formulaireModale.setAttribute('id', 'formulairemodale');

    var formAjout = document.createElement('form');
    formAjout.setAttribute('action', '#');
    formAjout.setAttribute('method', 'post');

    var labelTitre = document.createElement('label');
    labelTitre.setAttribute('for', 'titres');
    labelTitre.textContent = 'Titre';

    var inputTitre = document.createElement('input');
    inputTitre.setAttribute('type', 'text');
    inputTitre.setAttribute('name', 'titres');
    inputTitre.setAttribute('id', 'titres');
    inputTitre.setAttribute('required', 'true');

    var labelCategories = document.createElement('label');
    labelCategories.setAttribute('for', 'categories');
    labelCategories.textContent = 'Catégorie';

    var selectCategories = document.createElement('select');
    selectCategories.setAttribute('id', 'categories');
    selectCategories.setAttribute('name', 'categories');

    var lignePersonnalise = document.createElement('div');
    lignePersonnalise.classList.add('ligne-personnalise');

    var validerPhotoButton = document.createElement('input');
    validerPhotoButton.setAttribute('id', 'validerunephoto');
    validerPhotoButton.setAttribute('type', 'submit');
    validerPhotoButton.setAttribute('value', 'Valider');

    // Ajout des éléments à la modal d'ajout
    modalAjout.appendChild(retourButton);
    modalAjout.appendChild(closeButtonAjout);
    modalAjout.appendChild(titleAjout);
    modalAjout.appendChild(stockAjoutPhoto);
    stockAjoutPhoto.appendChild(imgAjout);
    stockAjoutPhoto.appendChild(labelAjout);
    stockAjoutPhoto.appendChild(inputAjout);
    stockAjoutPhoto.appendChild(infoAjout);
    modalAjout.appendChild(formulaireModale);
    formulaireModale.appendChild(formAjout);
    formAjout.appendChild(labelTitre);
    formAjout.appendChild(inputTitre);
    formAjout.appendChild(labelCategories);
    formAjout.appendChild(selectCategories);
    formulaireModale.appendChild(lignePersonnalise);
    formulaireModale.appendChild(validerPhotoButton);

    // Ajout de la modal d'ajout au conteneur principal avec l'ID "modaleajout"
    document.getElementById('modaleajout').appendChild(modalAjout);

    // Ajout d'un gestionnaire d'événements pour le clic sur le label
labelAjout.addEventListener('click', function() {
    inputAjout.click(); // Simule le clic sur le bouton de fichier

});  

  }

function handleFileChange() {
    var file = inputAjout.files[0];

    if (file) {
        var reader = new FileReader();

        // Ajout d'un gestionnaire d'événements pour le chargement de l'image
        reader.addEventListener('load', function(e) {
            // Création d'une nouvelle image
            var newImage = document.createElement('img');
            newImage.classList.add('imgajout','custom-size');
            newImage.setAttribute('src', e.target.result);

                        // Masquer les éléments existants s'ils existent
                        var imgAjout = stockAjoutPhoto.querySelector('.imgajout');
                        var addPhotolabel = stockAjoutPhoto.querySelector('#addphotolabel');
                        var addPhoto = stockAjoutPhoto.querySelector('#addphoto');
                        var infoAjout = stockAjoutPhoto.querySelector('p');
            
                        if (imgAjout) imgAjout.style.display = 'none';
                        if (addPhotolabel) addPhotolabel.style.display = 'none';
                        if (addPhoto) addPhoto.style.display = 'none';
                        if (infoAjout) infoAjout.style.display = 'none';

            // Ajout de la nouvelle image à stockAjoutPhoto
            stockAjoutPhoto.appendChild(newImage);
        });

        // Lecture du fichier en tant que données URL
        reader.readAsDataURL(file);
    }
}
  // Appel de la fonction pour créer la structure HTML
  createAddModalStructure();

  inputAjout.addEventListener('change', handleFileChange);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  function retourmodale() {
    document.getElementById('modaleajout').style.display = 'none';
    stockAjoutPhoto.querySelector('.imgajout').style.display = '';
    stockAjoutPhoto.querySelector('#addphotolabel').style.display = '';
    stockAjoutPhoto.querySelector('#addphoto').style.display = '';
    stockAjoutPhoto.querySelector('p').style.display = '';
    document.getElementById('titres').value = '';
    var imgAjout = stockAjoutPhoto.querySelector('.imgajout.custom-size');
    if (imgAjout) stockAjoutPhoto.removeChild(imgAjout);
  }
  
  const buttonModales = document.getElementById("flecheretour");
  buttonModales.addEventListener ('click', function (event) {
    event.preventDefault();
    retourmodale();
  });

  function fermerModaleajout() {
    // Cacher la modale
    document.getElementById('modaleajout').style.display = 'none';
    document.getElementById('Modale').style.display = 'none';
    stockAjoutPhoto.querySelector('.imgajout').style.display = '';
    stockAjoutPhoto.querySelector('#addphotolabel').style.display = '';
    stockAjoutPhoto.querySelector('#addphoto').style.display = '';
    stockAjoutPhoto.querySelector('p').style.display = '';
    document.getElementById('titres').value = '';
    var imgAjout = stockAjoutPhoto.querySelector('.imgajout.custom-size');
    if (imgAjout) stockAjoutPhoto.removeChild(imgAjout);
  }
  
  const buttonNodale = document.getElementById("buttonmodaleajout");
buttonNodale.addEventListener ('click', function (event) {
  event.preventDefault();
  fermerModaleajout();
});