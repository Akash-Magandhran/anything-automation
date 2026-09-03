from rest_framework import viewsets, permissions
from .models import Machine
from .serializers import MachineSerializer


class MachineViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Machine.objects.all()
    serializer_class = MachineSerializer
    permission_classes = [permissions.AllowAny]
