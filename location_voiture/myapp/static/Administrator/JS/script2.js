function openFileExplorer() {
    document.getElementById('images').click();
}

document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('images');
    const imageContainer = document.querySelector('.carousel-slide');

    let counter = 0;

    fileInput.addEventListener('change', function () {
        // Vérifier si des fichiers ont été sélectionnés
        if (fileInput.files.length > 0 ) {
            // Effacer le contenu actuel du conteneur d'images
            imageContainer.innerHTML = '';

            for (let i = 0; i < fileInput.files.length; i++) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    // Créer une nouvelle balise d'image pour chaque fichier
                    const img = document.createElement('img');
                    img.src = e.target.result;

                    // Ajouter l'image au conteneur d'images
                    imageContainer.appendChild(img);
                };

                // Lire le contenu du fichier actuel
                reader.readAsDataURL(fileInput.files[i]);
            }

            // Mettre à jour le carrousel
            updateCarousel_();
        }
    });

    function updateCarousel_() {
        const imageSlides = document.querySelectorAll('.carousel-slide img');
        const numImages = imageSlides.length;

        // Masquer toutes les images
        imageSlides.forEach((img, index) => {
            img.style.display = 'none';
        });

        // Afficher l'image actuelle
        imageSlides[counter % numImages].style.display = 'block';
    }
});
