from django.urls import path
from . import views

urlpatterns = [
    path('', views.accueil),
    path('inscription/<int:creneau_id>/', views.inscription),

    # API JSON
    path('api/creneaux/', views.api_creneaux, name='api_creneaux'),

    # Calendrier
    path('calendrier/', views.calendrier, name='calendrier'),
]