from datetime import datetime, timezone as dt_timezone
from unittest import mock

from django.core.cache import cache
from django.test import TestCase
from django.urls import reverse

from .models import BookingInquiry
from .views import ContactRateThrottle


VALID_INQUIRY = {
    "name": "Izak",
    "email": "izak@example.com",
    "projectType": "Portrait Session",
    "date": "Flexible",
    "location": "Santo Domingo",
    "message": "I want a new session.",
}


class ApiSmokeTests(TestCase):
    def setUp(self):
        # Throttle counters live in the cache; start every test from zero.
        cache.clear()

    def post_inquiry(self, data):
        return self.client.post(reverse("api-contact"), data=data, content_type="application/json")

    def test_health_check(self):
        response = self.client.get(reverse("api-health"))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["status"], "ok")

    def test_contact_inquiry(self):
        response = self.post_inquiry(VALID_INQUIRY)

        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json()["status"], "received")

    def test_contact_inquiry_is_saved_with_mapped_fields(self):
        self.post_inquiry(VALID_INQUIRY)

        inquiry = BookingInquiry.objects.get()
        self.assertEqual(inquiry.project_type, "Portrait Session")
        self.assertEqual(inquiry.preferred_date, "Flexible")
        self.assertFalse(inquiry.is_handled)

    def test_inquiry_title_uses_local_date(self):
        inquiry = BookingInquiry.objects.create(name="Izak", email="izak@example.com", project_type="Portrait Session")
        # 03:00 UTC on the 26th is still the evening of the 25th in Santo Domingo (UTC-4).
        BookingInquiry.objects.filter(pk=inquiry.pk).update(
            created_at=datetime(2026, 9, 26, 3, 0, tzinfo=dt_timezone.utc)
        )
        inquiry.refresh_from_db()

        self.assertEqual(str(inquiry), "Izak — Portrait Session (2026-09-25)")

    def test_contact_inquiry_requires_fields(self):
        response = self.post_inquiry({"name": "Izak"})

        self.assertEqual(response.status_code, 400)
        self.assertIn("email", response.json()["errors"])

    def test_contact_inquiry_rejects_invalid_email(self):
        response = self.post_inquiry({**VALID_INQUIRY, "email": "not-an-email"})

        self.assertEqual(response.status_code, 400)
        self.assertEqual(BookingInquiry.objects.count(), 0)

    def test_honeypot_submission_is_accepted_but_not_stored(self):
        response = self.post_inquiry({**VALID_INQUIRY, "website": "https://spam.example"})

        self.assertEqual(response.status_code, 201)
        self.assertEqual(BookingInquiry.objects.count(), 0)

    def test_contact_inquiry_is_rate_limited(self):
        # DRF reads throttle rates when the class is defined, so patch the class.
        with mock.patch.object(ContactRateThrottle, "THROTTLE_RATES", {"contact": "2/hour"}):
            statuses = [self.post_inquiry(VALID_INQUIRY).status_code for _ in range(3)]

        self.assertEqual(statuses, [201, 201, 429])
        self.assertEqual(BookingInquiry.objects.count(), 2)
