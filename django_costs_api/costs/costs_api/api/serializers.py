from rest_framework import serializers
from ..models import Cost

class CostModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cost
        fields = ('__all__')