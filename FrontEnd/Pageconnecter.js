
 
 
 // Fonction pour modifier la page une fois l'utilisateur connecté
       function modifyPage() {

        const token = localStorage.getItem("token");
        // Vérifiez si le token est valide côté serveur

                if (token) {
                    // Sélectionnez l'élément à modifier
                    const contentElement = document.getElementById("login");

                    // Modifiez le contenu de l'élément
                    contentElement.textContent = "Logout";

                    const filtreslogin = document.getElementById("filtresclic") 
                    //supression des bouttons
                    filtreslogin.style.display = 'none' 

                    //tete de page login
                    const modeEdition = document.getElementsByTagName("body")[0] ;
                    
                    if (modeEdition) {
                    modeEdition.insertAdjacentHTML("beforebegin", '<div class = "edition"><i class="fa-regular fa-pen-to-square"></i> Mode éditions</div>');
                    }
                    //boutton modifier
                    const galeriedesphotos= document.getElementById("portfolio")
                    const AjoutDePhoto = galeriedesphotos.getElementsByTagName("h2")[0] ;

                    if (AjoutDePhoto) {
                        AjoutDePhoto.insertAdjacentHTML("beforeend", '<div class = "modifier"><a href="#" id="lienModifier"><i class="fa-regular fa-pen-to-square"></i> Modifier</a></div>');
                      }
                    


                }
            }
    

    // Appelez la fonction pour modifier la page une fois le chargement terminé
    window.onload = modifyPage;

