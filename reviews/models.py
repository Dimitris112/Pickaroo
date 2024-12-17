from django.db import models
from django.contrib.auth.models import User
from datetime import timedelta
from django.utils import timezone


class Review(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="reviews")
    listing_id = models.IntegerField()
    content = models.TextField()
    rating = models.PositiveSmallIntegerField()  # 1 - 5
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    transaction_id = models.CharField(max_length=255, null=True, blank=True)
    deleted = models.BooleanField(default=False)

    def __str__(self):
        return f"Review {self.rating} by {self.owner.username} for listing {self.listing_id}"

    def can_edit_or_delete(self):
        """Check if the review can be edited or deleted within 24 hours of creation."""
        return timezone.now() - self.created_at <= timedelta(days=1)

    def delete_review(self):
        self.deleted = True
        self.save()
