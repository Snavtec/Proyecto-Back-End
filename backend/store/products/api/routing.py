from wsgiref.simple_server import demo_app
from rest_framework.routers import DefaultRouter

from .viewsets import (
    ProductViewSet,
    CategoryViewSet,
)

router = DefaultRouter()
router.register("productos", ProductViewSet)
router.register("categorias", CategoryViewSet)