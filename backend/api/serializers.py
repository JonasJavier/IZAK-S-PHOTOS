from rest_framework import serializers

from .models import BookingInquiry


class BookingInquirySerializer(serializers.ModelSerializer):
    """Maps the React form's camelCase fields onto the model."""

    projectType = serializers.CharField(source="project_type", required=False, allow_blank=True)
    date = serializers.CharField(source="preferred_date", required=False, allow_blank=True)

    class Meta:
        model = BookingInquiry
        fields = [
            "id",
            "name",
            "email",
            "phone",
            "projectType",
            "date",
            "location",
            "referral",
            "message",
            "created_at",
        ]
        read_only_fields = ["id", "created_at"]
        extra_kwargs = {
            "phone": {"required": False, "allow_blank": True},
            "location": {"required": False, "allow_blank": True},
            "referral": {"required": False, "allow_blank": True},
        }
