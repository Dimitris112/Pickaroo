from rest_framework import generics, permissions
from .models import Listing
from .serializers import ListingSerializer
from pickaroo_backend.permissions import IsOwnerOrReadOnly


class ListingList(generics.ListAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer


class ListingDetail(generics.RetrieveAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer


class ListingCreate(generics.CreateAPIView):
    serializer_class = ListingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ListingUpdate(generics.UpdateAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer
    permission_classes = [IsOwnerOrReadOnly]


class ListingRenew(generics.UpdateAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def perform_update(self, serializer):
        listing = self.get_object()
        listing.renew()


class ListingDelete(generics.DestroyAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer
    permission_classes = [IsOwnerOrReadOnly]