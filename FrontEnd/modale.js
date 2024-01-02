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