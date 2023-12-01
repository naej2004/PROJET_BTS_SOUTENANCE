document.addEventListener('DOMContentLoaded', function () {
    var louerLinks = document.querySelectorAll('.louer');

    louerLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var carId = link.dataset.idVoiture;

            // Envoyer une requête AJAX pour enregistrer l'ID de la voiture dans la session
            fetch('/enregistrer-voiture-id/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': '{{ csrf_token }}' // Ajoutez ceci pour la protection CSRF
                },
                body: JSON.stringify({ car_id: carId })
            })
            .then(response => response.json())
            .then(data => {
                console.log('ID de la voiture enregistré dans la session avec succès.');
                
                // Rediriger l'utilisateur vers la page louer.html
                window.location.href = '/myapp/louer/';
            })
            .catch(error => console.error("Erreur lors de l'enregistrement de l'ID de la voiture :", error));
        });
    });
});
