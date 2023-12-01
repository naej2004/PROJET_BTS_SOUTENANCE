from django.db import models


class Administrateur(models.Model):
    idAdministrateur = models.AutoField(primary_key=True)
    Nom = models.CharField(max_length=45, null=False, default="Nom")
    Prenom = models.CharField(max_length=100, null=False, default="Prenom")
    Email = models.EmailField(unique=True, null=False, default="email@gmail.com")
    Password = models.CharField(max_length=45, null=False, default="1234")
    Numero_tel = models.CharField(max_length=45, unique=True, default="0710069551")
    Date_inscription = models.DateField(auto_now_add=True, null=False)
    Image = models.ImageField(upload_to='admin_images/', null=False, default="")

    def __str__(self):
        return f"{self.Prenom} {self.Nom}"
    
    class Meta:
        db_table = 'Administrateur'
        verbose_name = 'Administrateur'
        verbose_name_plural = 'Administrateurs'


class Client(models.Model):
    idClient = models.AutoField(primary_key=True)
    Nom = models.CharField(max_length=45, null=False, default="")
    Prenom = models.CharField(max_length=100, null=False, default="")
    Email = models.EmailField(unique=True, null=False, default="")
    Password = models.CharField(max_length=45, null=False, default="")
    Numero_tel = models.CharField(max_length=45, unique=True, default="")
    Image = models.ImageField(upload_to='client_images/', null=False, blank=True, default="")


    def __str__(self):
        return f"{self.Prenom} {self.Nom}"

    class Meta:
        db_table = 'Client'
        verbose_name = 'Client'
        verbose_name_plural = 'Clients'


class Voiture(models.Model):
    idVoiture = models.AutoField(primary_key=True)
    Marque = models.CharField(max_length=45, null=False, default="Marque")
    Modele = models.CharField(max_length=45, null=False, default="Modele")
    Prix_location_jour = models.DecimalField(max_digits=10, decimal_places=2, null=False, default=1)
    Etat_voiture = models.CharField(max_length=45, null=False, default="")
    Garantir_voiture = models.CharField(max_length=45, null=False, default="")
    vitesse = models.DecimalField(max_digits=10,decimal_places=2, max_length=200, null=False, default=200)
    Killometrage = models.CharField(max_length=45, null=False, default="Illimitee")
    Equipement_voiture = models.CharField(max_length=45, null=False, default="")
    Document_requis = models.CharField(max_length=45, null=False, default="Permis de conduire")
    Administrateur_idAdministrateur = models.ForeignKey(Administrateur, on_delete=models.CASCADE)
    disponible = models.BooleanField(default=True, help_text="Indique si la voiture est disponible pour la location")
    Client_idClient = models.ForeignKey(Client, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f"{self.Modele}"
    
    class Meta:
        db_table = 'Voiture'
        verbose_name = 'Voiture'
        verbose_name_plural = 'Voitures'


class Image(models.Model):
    idImage = models.AutoField(primary_key=True)
    Image_voiture = models.ImageField(upload_to='voiture_images/', null=False, default="")
    Voiture_idVoiture = models.ForeignKey(Voiture, on_delete=models.CASCADE)

    def __str__(self):
        return f"Image"
    
    class Meta:
        db_table = 'Image'
        verbose_name = 'Image'
        verbose_name_plural = 'Images'


class Location(models.Model):
    idLocation = models.AutoField(primary_key=True)
    Date_debut = models.DateTimeField(auto_now_add=True, null=False)
    Date_fin = models.DateTimeField(null=True, blank=True)
    Cout_total = models.DecimalField(max_digits=10, decimal_places=2, null=False, default=200)
    Client_idClient = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='locations')
    Voiture_idVoiture = models.ForeignKey(Voiture, on_delete=models.CASCADE)
    condition_general = models.BooleanField(default=True)
    nombre_jour = models.IntegerField(null=False, default=1)
    Administrateur_idAdministrateur = models.ForeignKey(Administrateur, on_delete=models.CASCADE)
    Note = models.IntegerField(default=1, null=False)

    def __str__(self):
        return f"Location :  {self.Date_debut} à {self.Date_fin}"
    
    class Meta:
        db_table = 'Location'
        verbose_name = 'Location'
        verbose_name_plural = 'Locations'

