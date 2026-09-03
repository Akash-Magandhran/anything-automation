from django.db import models


class CompanyProfile(models.Model):
    """
    Singleton-style model: one row holds all editable site-wide content
    (hero tagline, about text, address, stats) so the client can update
    the website copy from the Django admin without touching code.
    """
    company_name = models.CharField(max_length=150, default="Anything Automation")
    tagline = models.CharField(
        max_length=200, default="Automate. Innovate. Elevate."
    )
    hero_subtitle = models.CharField(
        max_length=250,
        default="Powering Industries with Intelligent Automation Solutions",
    )
    about_text = models.TextField(
        default=(
            "We provide end-to-end industrial automation solutions that "
            "improve efficiency, ensure reliability, and drive productivity. "
            "With 8+ years of experience and a team of skilled professionals, "
            "we deliver innovative and cost-effective solutions tailored to "
            "the unique needs of every industry."
        )
    )
    years_of_experience = models.PositiveIntegerField(default=8)

    # Address block
    gst_number = models.CharField(max_length=20, blank=True)
    contact_phone = models.CharField(max_length=20, blank=True)
    contact_email = models.EmailField(blank=True)
    address_line = models.CharField(max_length=255, blank=True)
    locality = models.CharField(max_length=150, blank=True)
    district = models.CharField(max_length=100, blank=True)
    state = models.CharField(max_length=100, blank=True)
    pincode = models.CharField(max_length=10, blank=True)

    logo = models.ImageField(upload_to="branding/", blank=True, null=True)

    class Meta:
        verbose_name = "Company Profile"
        verbose_name_plural = "Company Profile"

    def __str__(self):
        return self.company_name

    def save(self, *args, **kwargs):
        # enforce singleton
        self.pk = 1
        super().save(*args, **kwargs)

    @classmethod
    def load(cls):
        obj, _ = cls.objects.get_or_create(pk=1)
        return obj


class WhyChooseUs(models.Model):
    """One reason/USP shown in the 'Why Choose Us' list."""
    text = models.CharField(max_length=200)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]
        verbose_name_plural = "Why Choose Us items"

    def __str__(self):
        return self.text
