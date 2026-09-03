from rest_framework import viewsets, permissions
from .models import Industry
from .serializers import IndustrySerializer


class IndustryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Industry.objects.all()
    serializer_class = IndustrySerializer
    permission_classes = [permissions.AllowAny]
