# Generated by Django 4.2.7 on 2023-12-08 21:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('costs_api', '0005_remove_cost_cost_cost_amount_alter_cost_date'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='cost',
            options={'ordering': ['id']},
        ),
    ]
