# api/urls.py
# NOTE: the project's routes live in backend/urls.py. This module is kept
# only for optional app-level includes; it points at the real views so the
# import never breaks.
from django.urls import path

from .views import contact_inquiry, health_check, photo_collection

urlpatterns = [
    path("health/", health_check, name="contact-health"),
    path("photos/", photo_collection, name="contact-photos"),
    path("contact/", contact_inquiry, name="contact"),
]
