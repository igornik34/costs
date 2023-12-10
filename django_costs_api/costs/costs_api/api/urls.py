from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CostsViewsets

router = DefaultRouter()
router.register(r'costs', CostsViewsets, basename="cost")

urlpatterns = [
    path('', include(router.urls))
]
