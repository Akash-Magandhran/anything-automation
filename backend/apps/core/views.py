from rest_framework.generics import RetrieveAPIView
from .models import CompanyProfile
from .serializers import CompanyProfileSerializer


class CompanyProfileView(RetrieveAPIView):
    """GET /api/company/ -> single object with all site-wide content."""
    serializer_class = CompanyProfileSerializer

    def get_object(self):
        return CompanyProfile.load()
