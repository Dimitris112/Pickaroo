from django.db import models
from django.conf import settings
from django.core.validators import MaxLengthValidator

class Report(models.Model):
    REPORT_REASONS = [
        ('spam', 'Spam or misleading'),
        ('inappropriate', 'Inappropriate content'),
        ('fraud', 'Fraud or scam'),
        ('other', 'Other'),
    ]

    reporter = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="reports_made")
    reported_listing = models.ForeignKey('listings.Listing', on_delete=models.CASCADE, related_name="reports")
    reason = models.CharField(max_length=50, choices=REPORT_REASONS, blank=True)
    description = models.TextField(blank=True, null=True, validators=[MaxLengthValidator(500)])
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Report by {self.reporter} on {self.reported_listing}"
