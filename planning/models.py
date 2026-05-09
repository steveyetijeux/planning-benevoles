from django.db import models

class Benevole(models.Model):
    nom = models.CharField(max_length=100)
    email = models.EmailField()

    def __str__(self):
        return self.nom


class Creneau(models.Model):
    titre = models.CharField(max_length=200)
    date = models.DateField()
    heure_debut = models.TimeField()
    heure_fin = models.TimeField()
    max_benevoles = models.IntegerField()

    def __str__(self):
        return self.titre

    @property
    def nb_inscrits(self):
        return self.inscription_set.count()


class Inscription(models.Model):
    benevole = models.ForeignKey(Benevole, on_delete=models.CASCADE)
    creneau = models.ForeignKey(Creneau, on_delete=models.CASCADE)
    date_inscription = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('benevole', 'creneau')