from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from .models import Review
from .serializers import ReviewSerializer
from pickaroo_backend.permissions import IsOwnerOrReadOnly
from django.db.models import Avg
from django.utils import timezone


class ReviewList(GenericAPIView):
    serializer_class = ReviewSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_queryset(self):
        return Review.objects.filter(deleted=False)

    def get(self, request):
        reviews = self.get_queryset()
        serializer = self.serializer_class(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ReviewDetail(GenericAPIView):
    serializer_class = ReviewSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_object(self, pk):
        return Review.objects.get(pk=pk)

    def get(self, request, pk):
        review = self.get_object(pk)
        serializer = self.serializer_class(review)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        review = self.get_object(pk)
        self.check_object_permissions(request, review)
        
        # edit within 24h
        if not review.can_edit_or_delete():
            return Response({"detail": "You can only edit or delete your review within 24 hours."}, status=status.HTTP_400_BAD_REQUEST)

        serializer = self.serializer_class(review, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        review = self.get_object(pk)
        self.check_object_permissions(request, review)
        
        # delete within 24h
        if not review.can_edit_or_delete():
            return Response({"detail": "You can only delete your review within 24 hours."}, status=status.HTTP_400_BAD_REQUEST)

        review.delete_review()
        return Response(status=status.HTTP_204_NO_CONTENT)


class SellerProfileReviews(GenericAPIView):
    def get(self, request, user_id):
        reviews = Review.objects.filter(listing__owner_id=user_id, deleted=False).order_by('-created_at')
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class SellerAverageRating(GenericAPIView):
    def get(self, request, user_id):
        avg_rating = Review.objects.filter(listing__owner_id=user_id, deleted=False).aggregate(Avg('rating'))
        return Response({"average_rating": avg_rating['rating__avg']}, status=status.HTTP_200_OK)
