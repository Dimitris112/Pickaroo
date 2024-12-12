from django.db import models
from django.conf import settings

class Report(models.Model):
    REPORT_REASONS = [
        ('spam', 'Spam or misleading'),
        ('inappropriate', 'Inappropriate content'),
        ('fraud', 'Fraud or scam'),
        ('other', 'Other'),
    ]

    reporter = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="reports_made")
    reported_listing = models.ForeignKey('listings.Listing', on_delete=models.CASCADE, related_name="reports")
    reason = models.CharField(max_length=50, choices=REPORT_REASONS)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Report by {self.reporter} on {self.reported_listing}"
