from django.urls import path
from listings import views

urlpatterns = [
    path('', views.ListingList.as_view()),
    path('listings/<int:pk>/', views.ListingDetail.as_view()),
    path('listings/create/', views.ListingCreate.as_view()),
    path('listings/<int:pk>/update/', views.ListingUpdate.as_view()),
    path('listings/<int:pk>/renew/', views.ListingRenew.as_view()),
    path('listings/<int:pk>/delete/', views.ListingDelete.as_view()),
]

