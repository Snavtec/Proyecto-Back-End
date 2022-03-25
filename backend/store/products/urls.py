from django.urls import path, include
from .api.routing import router

app_name = "products"

urlpatterns = [
    path("", include(router.urls))
]
