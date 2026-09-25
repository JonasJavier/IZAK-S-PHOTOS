from django.contrib import admin
from django.urls import path, re_path
from django.views.generic import TemplateView

from api.views import contact_inquiry, health_check, photo_collection


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/health/", health_check, name="api-health"),
    path("api/photos/", photo_collection, name="api-photos"),
    path("api/contact/", contact_inquiry, name="api-contact"),
    re_path(r"^(?!api/|admin/|static/).*$", TemplateView.as_view(template_name="index.html"), name="spa"),
]
