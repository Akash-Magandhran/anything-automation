from rest_framework import serializers
from .models import CompanyProfile, WhyChooseUs


class WhyChooseUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhyChooseUs
        fields = ["id", "text", "order"]


class CompanyProfileSerializer(serializers.ModelSerializer):
    why_choose_us = serializers.SerializerMethodField()

    class Meta:
        model = CompanyProfile
        fields = [
            "company_name", "tagline", "hero_subtitle", "about_text",
            "years_of_experience", "gst_number", "contact_phone",
            "contact_email", "address_line", "locality", "district",
            "state", "pincode", "logo", "why_choose_us",
        ]

    def get_why_choose_us(self, obj):
        return WhyChooseUsSerializer(WhyChooseUs.objects.all(), many=True).data
