from django.urls import path
from . import views

urlpatterns = [
    path('', views.accueil),
    path('inscription/<int:creneau_id>/', views.inscription),
]