from django.contrib import admin
from .models import CompanyProfile, WhyChooseUs


@admin.register(CompanyProfile)
class CompanyProfileAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        # singleton -- only one row ever exists
        return not CompanyProfile.objects.exists()


@admin.register(WhyChooseUs)
class WhyChooseUsAdmin(admin.ModelAdmin):
    list_display = ["text", "order"]
    ordering = ["order"]
