```python
from .models import SiteSettings


def event_mode(request):
    """
    Rend disponibles dans tous les templates :
    - event_mode
    - event_mode_class

    La classe CSS est directement utilisable sur le <body>.
    """

    settings = SiteSettings.objects.first()

    if not settings:
        return {
            "event_mode": "NONE",
            "event_mode_class": "",
        }

    classes = {
        "NOEL": "theme-noel",
        "HALLOWEEN": "theme-halloween",
        "PAQUES": "theme-paques",
        "ETE": "theme-ete",
        "AUTOMNE": "theme-automne",
        "RENTREE": "theme-rentree",
        "NOUVEL_AN": "theme-nouvel-an",
        "SAINT_VALENTIN": "theme-saint-valentin",
    }

    event_mode_value = settings.event_mode or "NONE"

    return {
        "event_mode": event_mode_value,
        "event_mode_class": classes.get(
            event_mode_value,
            "",
        ),
    }


def site_settings(request):
    """
    Rend les paramètres généraux du site disponibles
    dans tous les templates.
    """

    settings = SiteSettings.objects.first()

    return {
        "site_settings": settings,
    }
```
