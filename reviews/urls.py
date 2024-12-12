from django.urls import path
from reviews import views

urlpatterns = [
    path('', views.ReviewList.as_view(), name='review-list'),
    path('<int:pk>/', views.ReviewDetail.as_view(), name='review-detail'),
    path('seller/<int:user_id>/reviews/', views.SellerProfileReviews.as_view(), name='seller-reviews'),
    path('seller/<int:user_id>/average-rating/', views.SellerAverageRating.as_view(), name='seller-average-rating'),
]
