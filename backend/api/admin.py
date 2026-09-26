from django.contrib import admin

from .models import BookingInquiry


@admin.register(BookingInquiry)
class BookingInquiryAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "project_type", "preferred_date", "is_handled", "created_at")
    list_filter = ("is_handled", "project_type", "referral", "created_at")
    list_editable = ("is_handled",)
    search_fields = ("name", "email", "message", "location")
    readonly_fields = ("created_at",)
    date_hierarchy = "created_at"
    actions = ("mark_handled", "mark_open")

    @admin.action(description="Mark selected inquiries as handled")
    def mark_handled(self, request, queryset):
        updated = queryset.update(is_handled=True)
        self.message_user(request, f"{updated} inquiry(ies) marked as handled.")

    @admin.action(description="Reopen selected inquiries")
    def mark_open(self, request, queryset):
        updated = queryset.update(is_handled=False)
        self.message_user(request, f"{updated} inquiry(ies) reopened.")
