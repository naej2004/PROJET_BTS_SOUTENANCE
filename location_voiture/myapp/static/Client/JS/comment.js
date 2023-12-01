document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre normalement

    // Récupère le contenu du commentaire et la note
    var commentaire = document.getElementById('comment').value;
    var note = document.querySelector('input[name="note"]:checked');

    // Vérifie si l'utilisateur a donné une note
    if (!note) {
        return alert("Veuillez donner une note de 1 à 5.");
        
    }

    // Crée un nouvel élément d'avis
    var nouvelAvis = document.createElement('div');
    nouvelAvis.classList.add('avis-container');

    var utilisateurDiv = document.createElement('div');
    utilisateurDiv.classList.add('utilisateur');
    utilisateurDiv.innerHTML = `
        <img src="../../Administrator/DASHBOARD/img2.jpg" alt="Image Utilisateur">
        <h3>Nom de l'Utilisateur</h3>
    `;

    var commentaireDiv = document.createElement('div');
    commentaireDiv.classList.add('commentaire');
    commentaireDiv.innerHTML = `
        <p>${commentaire}</p>
        <small>Date du commentaire : ${getFormattedDate()}</small>
        <div class="note">
            Note : ${note.value} étoiles
        </div>
    `;

    nouvelAvis.appendChild(utilisateurDiv);
    nouvelAvis.appendChild(commentaireDiv);

    // Ajoute l'avis à la fin de la liste des avis
    document.querySelector('.comment').appendChild(nouvelAvis);

    // Efface le contenu du formulaire après avoir publié le commentaire
    document.getElementById('comment').value = '';
    // Décoche la note après avoir publié le commentaire
    document.querySelector('input[name="note"]:checked').checked = false;
});

function getFormattedDate() {
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth() + 1; // Les mois sont indexés de 0 à 11
    var year = now.getFullYear();

    // Formatte la date comme "JJ/MM/AAAA"
    return `${day}/${month}/${year}`;
}
