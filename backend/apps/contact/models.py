from django.db import models


class Enquiry(models.Model):
    """Every submission from the live 'Contact Us' form on the website."""
    name = models.CharField(max_length=120)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    company = models.CharField(max_length=150, blank=True)
    subject = models.CharField(max_length=200, blank=True)
    message = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ["-created_at"]
        verbose_name_plural = "Enquiries"

    def __str__(self):
        return f"{self.name} ({self.created_at:%Y-%m-%d})"
