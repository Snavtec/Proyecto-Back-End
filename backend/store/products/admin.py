from django.contrib import admin
from store.products.models import Product, Category, Characteristic

# Register models in admin
admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Characteristic)
