from rest_framework import serializers
from .models import Listing, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class ListingSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    category = CategorySerializer()
    is_expired = serializers.SerializerMethodField()

    class Meta:
        model = Listing
        fields = [
            'id', 'owner', 'category', 'title',
            'description', 'price', 'status', 'image', 'created_at', 'updated_at',
            'expiry_date', 'is_expired'
        ]

    def get_is_expired(self, obj):
        return obj.is_expired()