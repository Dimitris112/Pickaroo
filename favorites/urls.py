from django.urls import path
from favorites import views


urlpatterns = [
    path('', views.FavoriteList.as_view(), name="favorites-list"),
    path('favorites/create/', views.FavoriteCreate.as_view(), name="favorites-create"),
    path('favorites/<int:pk>/delete/', views.FavoriteDelete.as_view(), name="favorites-delete"),
]
