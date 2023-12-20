
 
 
 // Fonction pour modifier la page une fois l'utilisateur connecté
       function modifyPage() {

        const token = localStorage.getItem('token');
        // Vérifiez si le token est valide côté serveur
        validateToken(token)
            .then(isValid => {
                if (isValid) {
                    // Sélectionnez l'élément à modifier
                    const contentElement = document.getElementById('login');

                    // Modifiez le contenu de l'élément
                    contentElement.textContent = "Logout";
                } else {
                    // Redirigez l'utilisateur vers la page de connexion si le token n'est pas valide
                    window.location.href = 'indexloading.html';
                }
            });
    }

    // Appelez la fonction pour modifier la page une fois le chargement terminé
    window.onload = modifyPage;
