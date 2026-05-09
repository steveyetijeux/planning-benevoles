from django.shortcuts import render, redirect, get_object_or_404
from .models import Creneau, Benevole, Inscription


def accueil(request):

    creneaux = Creneau.objects.all().order_by('date')

    return render(request, 'planning/accueil.html', {
        'creneaux': creneaux
    })


def inscription(request, creneau_id):

    creneau = get_object_or_404(Creneau, id=creneau_id)

    if request.method == 'POST':

        nom = request.POST['nom']
        email = request.POST['email']

        benevole, created = Benevole.objects.get_or_create(
            email=email,
            defaults={'nom': nom}
        )

        nb = Inscription.objects.filter(
            creneau=creneau
        ).count()

        if nb < creneau.max_benevoles:

            Inscription.objects.get_or_create(
                benevole=benevole,
                creneau=creneau
            )

        return redirect('/')

    return render(request, 'planning/inscription.html', {
        'creneau': creneau
    })