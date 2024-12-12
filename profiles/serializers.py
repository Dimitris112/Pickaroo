from rest_framework import serializers
from .models import Profile
from listings.models import Listing
from favorites.models import Favorite
from reviews.models import Review
from reports.models import Report


class ProfileSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()

    listings_count = serializers.SerializerMethodField()
    favorites_count = serializers.SerializerMethodField()
    reviews_count = serializers.SerializerMethodField()
    reports_count = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    def get_listings_count(self, obj):
        return Listing.objects.filter(owner=obj.owner).count()

    def get_favorites_count(self, obj):
        return Favorite.objects.filter(user=obj.owner).count()

    def get_reviews_count(self, obj):
        return Review.objects.filter(owner=obj.owner).count()

    def get_reports_count(self, obj):
        user_listings = Listing.objects.filter(owner=obj.owner)
        return Report.objects.filter(reported_listing__in=user_listings).count()

    class Meta:
        model = Profile
        fields = [
            'id', 'owner', 'created_at', 'updated_at', 'name',
            'bio', 'image', 'is_owner',
            'listings_count', 'favorites_count',
            'reviews_count', 'reports_count'
        ]
