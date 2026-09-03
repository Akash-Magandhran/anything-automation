from rest_framework import generics, permissions
from django.core.mail import send_mail
from django.conf import settings
from .models import Enquiry
from .serializers import EnquirySerializer


class EnquiryCreateView(generics.CreateAPIView):
    """
    POST /api/contact/
    Public endpoint used by the live website's contact form.
    Saves the enquiry to MySQL and emails the client so they see
    real-time customer enquiries as they come in.
    """
    queryset = Enquiry.objects.all()
    serializer_class = EnquirySerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        enquiry = serializer.save()
        self._notify_client(enquiry)

    def _notify_client(self, enquiry):
        if not settings.EMAIL_HOST_PASSWORD:
            # email not configured yet in this environment -- skip silently
            return
        try:
            send_mail(
                subject=f"New website enquiry from {enquiry.name}",
                message=(
                    f"Name: {enquiry.name}\n"
                    f"Email: {enquiry.email}\n"
                    f"Phone: {enquiry.phone}\n"
                    f"Company: {enquiry.company}\n\n"
                    f"Message:\n{enquiry.message}"
                ),
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[settings.CONTACT_NOTIFY_EMAIL],
                fail_silently=True,
            )
        except Exception:
            pass
