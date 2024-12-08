from rest_framework import serializers
from .models import Listing, Category
from profiles.models import Profile


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class ListingSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    category = CategorySerializer()

    class Meta:
        model = Listing
        fields = [
            'id', 'owner', 'category', 'title',
            'description', 'price', 'status', 'image', 'created_at', 'updated_at'
        ]
