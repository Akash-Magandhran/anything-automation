from django.db import models


class Machine(models.Model):
    """Special machine manufacturing: Conveyor Setup, Mechanical Fixture,
    Assembly Machine, Washing Machine, Leak Test Machine."""
    name = models.CharField(max_length=120)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to="machines/", blank=True, null=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.name
