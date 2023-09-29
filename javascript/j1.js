document.addEventListener('DOMContentLoaded', function() {
    // Attachez l'écouteur d'événements après le chargement complet du document
    document.getElementById('Diagrammes').addEventListener('change', function() {
        // Obtenez la valeur sélectionnée
        var selectedParagraph = this.value;

        // Vérifiez si la valeur n'est pas vide
        if (selectedParagraph) {
            // Faites défiler la page jusqu'à l'élément avec l'ID correspondant
            document.getElementById(selectedParagraph).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

// Sélectionnez le bouton
const btn = document.querySelector('.btn');

// Ajoutez un gestionnaire d'événements au clic sur le bouton
btn.addEventListener('click', scrollToTop);

// Gestionnaire d'événement de défilement pour afficher/masquer le bouton
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Affichez le bouton lorsque vous faites défiler de plus de 200 pixels vers le bas
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});



