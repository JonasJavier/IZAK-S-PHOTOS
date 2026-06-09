from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import BookingInquirySerializer


FEATURED_PHOTOS = [
    {"id": "stillness", "title": "Stillness", "category": "Portraits"},
    {"id": "red-motion", "title": "Red Motion", "category": "Editorial"},
    {"id": "first-dance", "title": "First Dance", "category": "Weddings"},
    {"id": "under-the-stars", "title": "Under the Stars", "category": "Travel"},
    {"id": "the-arch", "title": "The Arch", "category": "Weddings"},
    {"id": "crimson", "title": "Crimson", "category": "Editorial"},
]


@api_view(["GET"])
def health_check(request):
    return Response({"status": "ok", "service": "izaks-photos-api"})


@api_view(["GET"])
def photo_collection(request):
    return Response({"count": len(FEATURED_PHOTOS), "results": FEATURED_PHOTOS})


@api_view(["POST"])
def contact_inquiry(request):
    """Validate and persist a booking inquiry to the database."""
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
            "message": "Your booking request has been received. I'll reply with availability shortly.",
            "id": inquiry.id,
            "inquiry": serializer.data,
        },
        status=status.HTTP_201_CREATED,
    )
