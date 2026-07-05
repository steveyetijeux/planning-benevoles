from django.shortcuts import render
from django.conf import settings


class MaintenanceModeMiddleware:
    def _init_(self, get_response):
        self.get_response = get_response

    def _call_(self, request):

        get_response = self.get_response

        if getattr(settings, "MAINTENANCE_MODE", False):

            if request.path.startswith("/admin"):
                return get_response(request)

            return render(request, "maintenance.html", status=503)

        return get_response(request)