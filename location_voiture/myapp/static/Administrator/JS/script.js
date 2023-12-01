document.addEventListener('DOMContentLoaded', function () {
    const imageInput = document.getElementById('imageInput');

    function handleFileSelect(event) {
        const files = event.target.files;

        if (files.length === 4) {
            for (let i = 0; i < 4; i++) {
                const reader = new FileReader();
                const imageContainer = document.getElementById(`imageContainer${i + 1}`);

                reader.onload = function (e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    imageContainer.innerHTML = ''; // Clear existing content
                    imageContainer.appendChild(img);
                };

                reader.readAsDataURL(files[i]);
            }
        } else {
            alert('Veuillez sélectionner exactement 4 images.');
            // Réinitialise l'input de fichier pour permettre à l'utilisateur de sélectionner à nouveau.
            document.getElementById('imageInput').value = '';
        }
    }

    imageInput.addEventListener('change', handleFileSelect);
});
