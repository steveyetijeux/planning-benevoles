from .models import SiteSettings


EVENT_THEME_CLASSES = {
    "NOEL": "theme-noel",
    "HALLOWEEN": "theme-halloween",
    "PAQUES": "theme-paques",
    "ETE": "theme-ete",
    "AUTOMNE": "theme-automne",
    "RENTREE": "theme-rentree",
    "NOUVEL_AN": "theme-nouvel-an",
    "SAINT_VALENTIN": "theme-saint-valentin",
}


def event_mode(request):
    try:
        settings = SiteSettings.objects.first()
    except Exception:
        settings = None

    if settings is None:
        return {
            "event_mode": "NONE",
            "event_mode_class": "",
        }

    event = settings.event_mode or "NONE"

    return {
        "event_mode": event,
        "event_mode_class": EVENT_THEME_CLASSES.get(event, ""),
    }


def site_settings(request):
    try:
        settings = SiteSettings.objects.first()
    except Exception:
        settings = None

    return {
        "site_settings": settings,
    }