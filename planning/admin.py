from django.contrib import admin
from django import forms
from .models import Benevole, Creneau, Inscription, SiteSettings


class CreneauAdminForm(forms.ModelForm):
    class Meta:
        model = Creneau
        fields = '__all__'
        widgets = {
            'heure_debut': forms.TimeInput(
                format='%H:%M',
                attrs={
                    'type': 'text',
                    'placeholder': 'HH:MM',
                }
            ),
            'heure_fin': forms.TimeInput(
                format='%H:%M',
                attrs={
                    'type': 'text',
                    'placeholder': 'HH:MM',
                }
            ),
        }


@admin.register(Creneau)
class CreneauAdmin(admin.ModelAdmin):
    form = CreneauAdminForm


admin.site.register(Benevole)
admin.site.register(Inscription)


@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):

    def has_add_permission(self, request):
        return not SiteSettings.objects.exists()