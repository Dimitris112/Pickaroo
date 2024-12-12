from django.urls import path
from reports import views

urlpatterns = [
    path('', views.ReportListView.as_view(), name='report-list'),
    path('create/', views.ReportCreateView.as_view(), name='report-create'),
]
