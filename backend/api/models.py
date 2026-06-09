from django.db import models


class BookingInquiry(models.Model):
    """A booking/contact request submitted from the React booking form."""

    name = models.CharField(max_length=120)
    email = models.EmailField()
    phone = models.CharField(max_length=40, blank=True)
    project_type = models.CharField(max_length=120, blank=True)
    preferred_date = models.CharField(max_length=120, blank=True)
    location = models.CharField(max_length=160, blank=True)
    referral = models.CharField(max_length=60, blank=True)
    message = models.TextField(blank=True)
    is_handled = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Booking inquiry"
        verbose_name_plural = "Booking inquiries"

    def __str__(self):
        return f"{self.name} — {self.project_type or 'Inquiry'} ({self.created_at:%Y-%m-%d})"
