document.addEventListener('DOMContentLoaded', function () {
    // Récupère les éléments du DOM
    const openPopupButton = document.getElementById('openPopupLink');
    const closePopupButton = document.getElementById('closePopup');
    const popup = document.getElementById('popup');

    // Ajoute des écouteurs d'événements pour ouvrir et fermer le pop-up
    openPopupButton.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});

