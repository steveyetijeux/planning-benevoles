from django.shortcuts import render
from django.conf import settings

class MaintenanceModeMiddleware:
    def _init_(self, get_response):
        self.get_response = get_response

    def _call_(self, request):

        # Autoriser l'admin même en maintenance
        if request.path.startswith("/admin"):
            return self.get_response(request)

        # Si mode maintenance activé
        if getattr(settings, "MAINTENANCE_MODE", False):
            return render(request, "maintenance.html", status=503)

        return self.get_response(request)