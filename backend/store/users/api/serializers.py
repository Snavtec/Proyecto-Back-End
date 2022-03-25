from rest_framework.serializers import ModelSerializer
from djoser.serializers import UserCreateSerializer as DjoserUserCreateSerializer
from ..models import User

class UserCreateSerializer(DjoserUserCreateSerializer):

    class Meta:
        model = User
        fields = [
            "first_name",
            "last_name",
            "email",
            "password",
        ]


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name']
        extra_kwargs = {
            'id': {'read_only': True},
            'email': {'read_only': True},
        }