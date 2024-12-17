from django.db.models import Count
from rest_framework import generics, filters
from django_filters.rest_framework import DjangoFilterBackend
from pickaroo_backend.permissions import IsOwnerOrReadOnly
from .models import Profile
from .serializers import ProfileSerializer

class ProfileList(generics.ListAPIView):
    queryset = Profile.objects.annotate(
        listings_count=Count('owner__listings', distinct=True),
        favorites_count=Count('owner__favorites', distinct=True),
        reviews_count=Count('owner__reviews', distinct=True),
    ).order_by('-created_at')

    serializer_class = ProfileSerializer
    filter_backends = (filters.OrderingFilter, DjangoFilterBackend)
    filterset_fields = (
        'owner__listings',
        'owner__favorites',
        'owner__reviews',
    )
    ordering_fields = (
        'listings_count',
        'favorites_count',
        'reviews_count',
        'created_at',
    )


class ProfileDetail(generics.RetrieveUpdateAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Profile.objects.annotate(
        listings_count=Count('owner__listings', distinct=True),
        favorites_count=Count('owner__favorites', distinct=True),
        reviews_count=Count('owner__reviews', distinct=True),
    ).order_by('-created_at')
    serializer_class = ProfileSerializer
