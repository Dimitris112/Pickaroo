from rest_framework import serializers
from .models import Profile
from listings.models import Listing
from favorites.models import Favorite


class ProfileSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    listings_count = serializers.ReadOnlyField()
    favorites_count = serializers.ReadOnlyField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    def get_listings_count(self, obj):
        return Listing.objects.filter(owner=obj.owner).count()

    def get_favorites_count(self, obj):
        return Favorite.objects.filter(user=obj.owner).count()

    class Meta:
        model = Profile
        fields = [
            'id', 'owner', 'created_at', 'updated_at', 'name',
            'bio', 'image', 'is_owner', 
            'listings_count', 'favorites_count'
        ]