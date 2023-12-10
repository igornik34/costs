from django.db import models

# Create your models here.

class Cost(models.Model):
    description = models.CharField(verbose_name='Продукт', max_length=200)
    amount = models.IntegerField(verbose_name='Стоимость')
    date = models.DateField(verbose_name="Дата")
    class Meta:
        ordering = ['-id']