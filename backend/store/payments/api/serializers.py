from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField
from rest_framework import serializers
from rest_framework import fields
from ..models import Payments, ProductPayments

# from store.products.api.serializers import ProductSerializer
from store.products.models import Product


# class PaymentProductSerializer(PrimaryKeyRelatedField, ModelSerializer):
#     class Meta:
#         model = Product


class ProductPaymentSerializer(ModelSerializer):
    producto = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all())

    class Meta:
        model = ProductPayments
        fields = ("producto", "cantidad")


class PaymentSerializer(ModelSerializer):
    """Payment Serializer."""

    # productos = PaymentProductSerializer(many=True, queryset=Product.objects.all())
    productos = ProductPaymentSerializer(source="productpayments_set", many=True)
    user = fields.HiddenField(default=fields.CurrentUserDefault())

    class Meta:
        model = Payments
        fields = [
            "id",
            "user",
            "telefono",
            "direccion",
            "productos",
            "total",
        ]

    def create(self, validated_data):
        """Create a new Payment."""
        productos = validated_data.pop("productpayments_set")
        payment = Payments.objects.create(**validated_data)
        for producto in productos:
            ProductPayments.objects.create(venta=payment, **producto)
        return payment
