# Generated by Django 4.2 on 2024-12-09 11:38

from django.db import migrations, models
import listings.models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='listing',
            name='expiry_date',
            field=models.DateTimeField(default=listings.models.default_expiry_date),
        ),
        migrations.AlterField(
            model_name='listing',
            name='status',
            field=models.CharField(choices=[('available', 'Available'), ('sold', 'Sold'), ('expired', 'Expired')], default='available', max_length=20),
        ),
    ]
