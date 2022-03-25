from rest_framework.serializers import ModelSerializer
from ..models import Product, Category, Characteristic

class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'nombre', 'descripcion', 'imagen']
        extra_kwargs = {
            'id': {'read_only': True},
            'nombre': {'read_only': True},
            'descripcion': {'read_only': True},
            'imagen': {'read_only': True},
        }

class CharacteristicSerializer(ModelSerializer):
    class Meta:
        model = Characteristic
        fields = ['id', 'nombre']
        extra_kwargs = {
            'id': {'read_only': True},
            'nombre': {'read_only': True},
        }

class ProductSerializer(ModelSerializer):

    caracteristicas = CharacteristicSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'nombre', 'descripcion', 'precio', 'imagen', 'categoria', 'caracteristicas']
        extra_kwargs = {
            'id': {'read_only': True},
            'nombre': {'read_only': True},
            'descripcion': {'read_only': True},
            'precio': {'read_only': True},
            'imagen': {'read_only': True},
            'categoria': {'read_only': True},
            'caracteristicas': {'read_only': True},
        }