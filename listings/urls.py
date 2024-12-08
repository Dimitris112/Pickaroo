from django.urls import path
from listings import views

urlpatterns = [
    path('', views.ListingList.as_view(), name='listing-list'),
    path('<int:pk>/', views.ListingDetail.as_view(), name='listing-detail'),
    path('create/', views.ListingCreate.as_view(), name='listing-create'),
    path('<int:pk>/update/', views.ListingUpdate.as_view(), name='listing-update'),
    path('<int:pk>/delete/', views.ListingDelete.as_view(), name='listing-delete'),
]
