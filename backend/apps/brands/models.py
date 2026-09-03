from django.db import models


class Brand(models.Model):
    """PLC & HMI brands supported: Siemens, ABB, Omron, Keyence, Delta,
    Cognex, Mitsubishi Electric, etc."""
    name = models.CharField(max_length=100)
    logo = models.ImageField(upload_to="brand_logos/", blank=True, null=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.name
