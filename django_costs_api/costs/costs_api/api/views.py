from rest_framework import viewsets
from ..models import Cost
from .serializers import CostModelSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

class CostsViewsets(viewsets.ModelViewSet):
    queryset = Cost.objects.all()
    serializer_class = CostModelSerializer
    permission_classes = [permissions.AllowAny]

    def list(self, request, *args, **kwargs):
        year = request.query_params.get('year')  # Получаем значение параметра year из запроса

        if year:
            # Фильтрация по году, если параметр year присутствует
            queryset = self.queryset.filter(date__year=year)
        else:
            queryset = self.queryset.all()

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    def destroy(self, request, *args, **kwargs):
        print(f'=========={self}')
        instance = self.get_object()  # Получение объекта расхода по его ID
        instance.delete()  # Удаление объекта
        return Response(status=status.HTTP_204_NO_CONTENT)  # Успешный ответ без содержимого
    
    def retrieve(self, request, *args, **kwargs):
        try:
            instance = self.get_object()  # Получение объекта по переданному pk
            serializer = self.get_serializer(instance)
            return Response(serializer.data)
        except Cost.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)  # Если объект не найден, вернуть 404