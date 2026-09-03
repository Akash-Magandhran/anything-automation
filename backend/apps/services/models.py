from django.db import models


class ServiceCategory(models.TextChoices):
    SCOPE_OF_WORK = "scope_of_work", "Our Scope of Work"
    SPECIAL_MACHINE = "special_machine", "Special Machine Manufacturing"


class Service(models.Model):
    """
    Covers both 'Our Scope of Work' (robo integration, camera teaching,
    mechanical fixtures, design support, panel/field wiring, PLC/HMI/SCADA
    programming, traceability) and can double as a general services list.
    """
    category = models.CharField(
        max_length=30, choices=ServiceCategory.choices,
        default=ServiceCategory.SCOPE_OF_WORK,
    )
    title = models.CharField(max_length=120)
    description = models.TextField(blank=True)
    icon = models.ImageField(upload_to="service_icons/", blank=True, null=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["category", "order"]

    def __str__(self):
        return self.title
