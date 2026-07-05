from django.shortcuts import render
from django.conf import settings

def MaintenanceModeMiddleware(get_response):

    def middleware(request):

        if getattr(settings, "MAINTENANCE_MODE", False):

            if request.path.startswith("/admin"):
                return get_response(request)

            return render(request, "maintenance.html", status=503)

        return get_response(request)

    return middleware

print("MIDDLEWARE CHARGE")