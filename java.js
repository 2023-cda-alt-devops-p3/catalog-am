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




