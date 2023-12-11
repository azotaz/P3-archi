function filtrer(categorie) {
    var elements = document.querySelectorAll('.elements');

    elements.forEach(function (element) {
        var elementCategorie = element.getAttribute('categories');

        if (categorie === 'tous' || elementCategorie === categorie) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}