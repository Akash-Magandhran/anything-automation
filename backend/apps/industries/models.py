from django.db import models


class Industry(models.Model):
    """Packaging, Food & Beverage, Pharmaceutical, Textile, Automotive,
    Electronics, General Engineering, etc."""
    name = models.CharField(max_length=100)
    icon = models.ImageField(upload_to="industry_icons/", blank=True, null=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]
        verbose_name_plural = "Industries"

    def __str__(self):
        return self.name
