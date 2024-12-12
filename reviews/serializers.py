from rest_framework import serializers
from .models import Review


class ReviewSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source="owner.username")

    class Meta:
        model = Review
        fields = ["id", "owner", "listing_id", "content", "rating", "created_at", "updated_at", "transaction_id", "deleted"]

    def validate_rating(self, value):
        if value < 1 or value > 5:
            raise serializers.ValidationError("Rating must be between 1 and 5.")
        return value

    def validate(self, data):
        user = self.context['request'].user
        listing_id = data['listing_id']
        transaction_id = data['transaction_id']
        
        if Review.objects.filter(owner=user, listing_id=listing_id, transaction_id=transaction_id).exists():
            raise serializers.ValidationError("You have already reviewed this listing for this transaction.")
        
        return data
