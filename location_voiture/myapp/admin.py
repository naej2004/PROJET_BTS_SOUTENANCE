from django.contrib import admin
from .models import Voiture, Image, Administrateur, Location, Client

# Register your models here.
admin.site.register(Voiture)
admin.site.register(Image)
admin.site.register(Administrateur)
admin.site.register(Location)
admin.site.register(Client)