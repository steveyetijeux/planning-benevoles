from django.contrib import admin
from .models import Benevole, Creneau, Inscription, SiteSettings


admin.site.register(Benevole)
admin.site.register(Creneau)
admin.site.register(Inscription)


@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):

    def has_add_permission(self, request):
        return not SiteSettings.objects.exists()