from django.urls import path
from . import views

app_name = "myapp"

urlpatterns = [
    path('', views.first, name="first"),
    path("connexion-admin", views.connexion_admin, name="connexion-admin"),
    path("inscription-admin", views.inscription_admin, name="inscription-admin"),
    path("dashboard", views.dashboard, name="dashboard"),
    path("contact", views.contact, name="contact"),
    path("gestion", views.gestion, name="gestion"),
    path("modifier/<int:voiture_id>/", views.modifier, name="modifier"),
    path("profil-admin", views.profil_admin, name="profil-admin"),
    path("profil-user", views.profil_user, name="profil-user"),
    path("home", views.home, name="home"),
    path("connexion-user", views.connexion_user, name="connexion-user"),
    path("inscription-user", views.inscription_user, name="inscription-user"),
    path("louer/<int:voiture_id>/", views.louer, name="louer"),
    path("search", views.search, name="search"),
    path("ajouter", views.ajouter, name="ajouter"),
    path("recherche_voiture", views.recherche_voiture, name="recherche_voiture"),
    # path("redir", views.redir, name="redir"),
    path("en_location", views.en_location, name="en_location"),
    path("modif-profil-admin", views.modif_profil_admin, name="modif_profil_admin"),
    path("modif-profil-user", views.modif_profil_user, name="modif_profil_user"),
    path("log_out-user", views.log_out_user, name="log_out-user"),
    path("log_out-admin", views.log_out_admin, name="log_out-admin"),
    path("forget_password_admin_step1", views.forget_password_admin_step1, name="forget_password_admin_step1"),
    path("forget_password_admin_step2", views.forget_password_admin_step2, name="forget_password_admin_step2"),
    path("forget_password_user_step1", views.forget_password_user_step1, name="forget_password_user_step1"),
    path("forget_password_user_step2", views.forget_password_user_step2, name="forget_password_user_step2"),
    path("header", views.header, name="header"),
    path("delete_car/<int:voiture_id>", views.delete, name="delete"),
    path("footer", views.footer, name="footer"),
    path("delete_user_account", views.delete_account_user, name="delete_user"),
    path("delete_admin_account", views.delete_account_admin, name="delete_admin"),
    # path("save_id", views.save_id, name="save_id"),
    # path("save_id_admin", views.save_id_admin, name="save_id_admin")
    # path("add-comment/<int:client_id>", views.ajouter_commentaire, name="add-comment")
]
