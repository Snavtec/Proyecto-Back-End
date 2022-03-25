from django.db import models

# from django.contrib.gis.db import models
from django.utils.translation import gettext_lazy as _
from store.products.models import Product
from store.users.models import User


class Payments(models.Model):
    user = models.ForeignKey(User, verbose_name=_("usuario"), on_delete=models.CASCADE)
    telefono = models.CharField(_("teléfono"), max_length=10)
    direccion = models.CharField(_("dirección"), max_length=254)
    # coordenadas = models.PointField()
    productos = models.ManyToManyField(
        Product,
        through="ProductPayments",
        verbose_name=_("productos"),
        related_name="productos",
        related_query_name="producto",
    )
    total = models.DecimalField(_("total"), max_digits=6, decimal_places=2)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = _("venta")
        verbose_name_plural = _("ventas")

    def __str__(self):
        return f"compra_{self.user}_{self.created_at}"


class ProductPayments(models.Model):
    """
    Model for storing payments for products
    """

    producto = models.ForeignKey(Product, on_delete=models.CASCADE)
    venta = models.ForeignKey("Payments", on_delete=models.CASCADE)
    cantidad = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.producto.nombre} - {self.cantidad}"

    class Meta:
        verbose_name = _("Product Payment")
        verbose_name_plural = _("Product Payments")
        ordering = ["-created_at"]
