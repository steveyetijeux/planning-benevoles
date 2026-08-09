from .models import SiteSettings


def event_mode(request):

    settings = SiteSettings.objects.first()

    if not settings:
        return {
            "event_mode": "NONE",
            "event_mode_class": "",
        }

    classes = {
        "NONE": "",
        "NOEL": "theme-noel",
        "HALLOWEEN": "theme-halloween",
        "PAQUES": "theme-paques",
        "ETE": "theme-ete",
        "AUTOMNE": "theme-automne",
        "RENTREE": "theme-rentree",
        "NOUVEL_AN": "theme-nouvel-an",
        "SAINT_VALENTIN": "theme-saint-valentin",
    }

    return {
        "event_mode": settings.event_mode,
        "event_mode_class": classes.get(
            settings.event_mode,
            "",
        ),
    }


def site_settings(request):

    settings = SiteSettings.objects.first()

    return {
        "site_settings": settings,
    }