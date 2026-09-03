from django.urls import path
from .views import EnquiryCreateView

urlpatterns = [
    path("contact/", EnquiryCreateView.as_view(), name="contact-create"),
]
