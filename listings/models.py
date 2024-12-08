from django.db import models
from django.contrib.auth.models import User
from profiles.models import Profile


class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name


class Listing(models.Model):
    STATUS_CHOICES = [
        ('available', 'Available'),
        ('sold', 'Sold'),
    ]

    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='listings')
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(
        upload_to='images/', default='../default_post_j5jzns', blank=True
    )
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='available')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title
