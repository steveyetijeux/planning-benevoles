
from django.shortcuts import render, redirect, get_object_or_404
from django.http import JsonResponse
from django.db import transaction

from .models import Creneau, Benevole, Inscription


def accueil(request):
    creneaux = Creneau.objects.all().order_by('date')

    return render(request, 'planning/accueil.html', {
        'creneaux': creneaux
    })


def inscription(request, creneau_id):
    creneau = get_object_or_404(Creneau, id=creneau_id)

    if request.method == 'POST':

        nom = request.POST.get('nom', '').strip()
        telephone = request.POST.get('telephone', '').strip()

        if not nom or not telephone:
            nb = Inscription.objects.filter(creneau=creneau).count()

            return render(request, 'planning/inscription.html', {
                'creneau': creneau,
                'nb_inscrits': nb,
                'places_restantes': max(0, creneau.max_benevoles - nb),
                'complet': nb >= creneau.max_benevoles,
                'erreur': 'Merci de renseigner votre nom et votre téléphone.'
            })

        benevole, created = Benevole.objects.get_or_create(
            nom=nom,
            defaults={'telephone': telephone}
        )

        with transaction.atomic():

            creneau = Creneau.objects.select_for_update().get(id=creneau_id)

            deja_inscrit = Inscription.objects.filter(
                benevole=benevole,
                creneau=creneau
            ).exists()

            if deja_inscrit:
                return redirect('/')

            nb = Inscription.objects.filter(creneau=creneau).count()

            if nb >= creneau.max_benevoles:
                return render(request, 'planning/inscription.html', {
                    'creneau': creneau,
                    'nb_inscrits': nb,
                    'places_restantes': 0,
                    'complet': True,
                    'erreur': 'Désolé, ce créneau est complet. Les inscriptions sont fermées.'
                }, status=409)

            Inscription.objects.create(
                benevole=benevole,
                creneau=creneau
            )

        return redirect('/')

    nb = Inscription.objects.filter(creneau=creneau).count()
    complet = nb >= creneau.max_benevoles

    return render(request, 'planning/inscription.html', {
        'creneau': creneau,
        'nb_inscrits': nb,
        'places_restantes': max(0, creneau.max_benevoles - nb),
        'complet': complet,
    })


def api_creneaux(request):
    events = []

    for c in Creneau.objects.all():

        nb = Inscription.objects.filter(creneau=c).count()
        complet = nb >= c.max_benevoles

        events.append({
            "id": c.id,
            "title": c.titre,
            "start": f"{c.date}T{c.heure_debut}",
            "end": f"{c.date}T{c.heure_fin}",
            "complet": complet,
            "nb_inscrits": nb,
            "max_benevoles": c.max_benevoles,
            "places_restantes": max(0, c.max_benevoles - nb),
        })

    return JsonResponse(events, safe=False)


def calendrier(request):
    return render(request, "calendrier.html")