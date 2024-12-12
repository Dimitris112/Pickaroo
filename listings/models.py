from django.db import models
from django.contrib.auth.models import User
from django.utils.timezone import now
from datetime import timedelta


def default_expiry_date():
    return now() + timedelta(days=90)


class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name


class Listing(models.Model):
    STATUS_CHOICES = [
        ('available', 'Available'),
        ('sold', 'Sold'),
        ('expired', 'Expired'),
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
    expiry_date = models.DateTimeField(default=default_expiry_date)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title

    def is_expired(self):
        return now() > self.expiry_date

    def renew(self):
        self.expiry_date = now() + timedelta(days=90)
        self.status = 'available'
        self.save()