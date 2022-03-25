from django.db import models
from django.utils.translation import gettext_lazy as _


class Category(models.Model):
    """Category model."""

    nombre = models.CharField(_("nombre"), max_length=254)
    descripcion = models.TextField(_("descripcion"), blank=True)
    imagen = models.ImageField(_("imagen"), upload_to="categories", blank=True)

    created_at = models.DateTimeField(_("created at"), auto_now_add=True)
    updated_at = models.DateTimeField(_("updated at"), auto_now=True)

    class Meta:
        verbose_name = _("categoria")
        verbose_name_plural = _("categorias")

    def __str__(self):
        return self.nombre


class Characteristic(models.Model):
    """Characteristic model."""

    nombre = models.CharField(_("nombre"), max_length=254)

    class Meta:
        verbose_name = _("caracteristica")
        verbose_name_plural = _("caracteristicas")

    def __str__(self):
        return self.nombre


class Product(models.Model):
    """Product model."""

    nombre = models.CharField(_("nombre"), max_length=254)
    descripcion = models.TextField(_("descripción"), blank=True)
    precio = models.DecimalField(_("precio"), max_digits=6, decimal_places=2)
    imagen = models.ImageField(_("imagen"), upload_to="products", blank=True, null=True)
    categoria = models.ForeignKey(Category, verbose_name=_("categoría"), on_delete=models.CASCADE)
    caracteristicas = models.ManyToManyField(to=Characteristic, verbose_name=_("características"))

    created_at = models.DateTimeField(_("created at"), auto_now_add=True)
    updated_at = models.DateTimeField(_("updated at"), auto_now=True)

    class Meta:
        verbose_name = _("producto")
        verbose_name_plural = _("productos")

    def __str__(self):
        return self.nombre
