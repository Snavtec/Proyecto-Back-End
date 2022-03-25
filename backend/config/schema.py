from rest_framework.permissions import AllowAny
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
    openapi.Info(
        title="E-Store v1 API",
        default_version="v1",
        description="Backend API of Store v1",
        terms_of_service="None",
        contact=openapi.Contact(email="admin@store.com"),
        license=openapi.License(name="Closed Source"),
    ),
    public=True,
    permission_classes=[AllowAny],
)
