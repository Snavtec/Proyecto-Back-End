from django.contrib import admin
from store.payments.models import Payments, ProductPayments

# Show Payments in admin with intermediate inline table ProductPayments


class PaymentsInline(admin.TabularInline):
    model = ProductPayments
    extra = 1


@admin.register(Payments)
class PaymentsAdmin(admin.ModelAdmin):
    inlines = [PaymentsInline]
