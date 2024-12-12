from django.db import models
from django.contrib.auth.models import User


class Review(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="reviews")
    listing_id = models.IntegerField()
    content = models.TextField()
    rating = models.PositiveSmallIntegerField() # 1 - 5
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Review {self.rating} by {self.owner.username} for listing {self.listing_id}"
