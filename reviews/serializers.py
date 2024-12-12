from rest_framework import serializers
from .models import Review


class ReviewSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source="owner.username")

    class Meta:
        model = Review
        fields = ["id", "owner", "listing_id", "content", "rating", "created_at", "updated_at"]
