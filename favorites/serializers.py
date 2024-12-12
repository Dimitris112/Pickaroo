from rest_framework import serializers
from .models import Favorite, Listing


class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ['id', 'title', 'description', 'price', 'created_at']


class FavoriteSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    listing = ListingSerializer()

    class Meta:
        model = Favorite
        fields = ['id', 'user', 'listing', 'created_at']
