# Generated by Django 4.2.7 on 2023-11-12 21:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('costs_api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cost',
            name='date',
            field=models.DateField(auto_now=True, verbose_name='Дата'),
        ),
    ]