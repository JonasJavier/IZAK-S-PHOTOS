from rest_framework import status
from rest_framework.decorators import api_view, throttle_classes
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle

from .serializers import BookingInquirySerializer


FEATURED_PHOTOS = [
    {"id": "stillness", "title": "Stillness", "category": "Portraits"},
    {"id": "red-motion", "title": "Red Motion", "category": "Editorial"},
    {"id": "first-dance", "title": "First Dance", "category": "Weddings"},
    {"id": "under-the-stars", "title": "Under the Stars", "category": "Travel"},
    {"id": "the-arch", "title": "The Arch", "category": "Weddings"},
    {"id": "nocturne", "title": "Nocturne", "category": "Editorial"},
]

RECEIVED_MESSAGE = "Your booking request has been received. I'll reply with availability shortly."


class ContactRateThrottle(AnonRateThrottle):
    """Caps anonymous booking requests per client (rate in settings: `contact`)."""

    scope = "contact"


@api_view(["GET"])
def health_check(request):
    return Response({"status": "ok", "service": "izaks-photos-api"})


@api_view(["GET"])
def photo_collection(request):
    return Response({"count": len(FEATURED_PHOTOS), "results": FEATURED_PHOTOS})


@api_view(["POST"])
@throttle_classes([ContactRateThrottle])
def contact_inquiry(request):
    """Validate and persist a booking inquiry to the database."""
    # Honeypot: the form hides a `website` field from people. Bots that fill it
    # get the normal success response, but nothing is stored.
    if str(request.data.get("website", "")).strip():
        return Response({"status": "received", "message": RECEIVED_MESSAGE}, status=status.HTTP_201_CREATED)

    serializer = BookingInquirySerializer(data=request.data)
    if not serializer.is_valid():
        return Response(
            {"status": "error", "message": "Please review the highlighted fields.", "errors": serializer.errors},
            status=status.HTTP_400_BAD_REQUEST,
        )

    inquiry = serializer.save()
    return Response(
        {
            "status": "received",
            "message": RECEIVED_MESSAGE,
            "id": inquiry.id,
            "inquiry": serializer.data,
        },
        status=status.HTTP_201_CREATED,
    )
