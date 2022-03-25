from rest_framework.routers import DefaultRouter
from .viewsets import PaymentViewSet

router = DefaultRouter()
router.register("ventas", PaymentViewSet)
