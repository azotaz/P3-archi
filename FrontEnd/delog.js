// Fonction pour déconnecter l'utilisateur
function logout() {
    localStorage.removeItem("token"); // Supprimer le token du stockage local


    // Rediriger vers la page de connexion ou une autre page de votre choix
    window.location.href = "indexloading.html"; 
}

// Ajouter un gestionnaire d'événements pour le bouton de déconnexion
const logoutButton = document.getElementById("login"); 
// Remplacez "logoutButton" par l'ID de votre bouton de déconnexion

logoutButton.addEventListener("click", logout);