from django.core.management.base import BaseCommand
from apps.core.models import CompanyProfile, WhyChooseUs
from apps.services.models import Service, ServiceCategory
from apps.industries.models import Industry
from apps.machines.models import Machine
from apps.brands.models import Brand


class Command(BaseCommand):
    help = "Seed the database with initial content taken from the company brochure."

    def handle(self, *args, **options):
        profile = CompanyProfile.load()
        profile.gst_number = "33EAPPB8456Q2ZW"
        profile.contact_phone = "+91 9360276377"
        profile.contact_email = "office.anythingautomation@gmail.com"
        profile.address_line = "No.43/3, Thirumalai Nagar, Mudichur Main Road"
        profile.locality = "Mudichur, Chengalpattu"
        profile.district = "Chennai"
        profile.state = "Tamil Nadu"
        profile.pincode = "600048"
        profile.save()

        for i, text in enumerate([
            "8+ Years of Experience",
            "Skilled & Experienced Team",
            "Customized & Scalable Solutions",
            "On-Time Delivery & Support",
            "Quality, Safety & Reliability Assured",
            "End-to-End Project Execution",
        ]):
            WhyChooseUs.objects.get_or_create(text=text, defaults={"order": i})

        scope_of_work = [
            ("Robo Integration Work", "Robot integration with PLC/HMI for seamless automation."),
            ("Camera Teaching and Integration to PLC Work", "Vision system integration & camera teaching for quality control."),
            ("Mechanical Fixtures Manufacturing", "High-precision mechanical fixtures as per requirement."),
            ("Design Support", "2D/3D design support for automation systems & machine manufacturing."),
            ("PLC Programming", "Efficient and reliable PLC programming for all industrial applications."),
            ("HMI Programming", "User-friendly HMI/SCADA interface design & programming."),
            ("SCADA Programming", "Real-time monitoring, control & data acquisition solutions."),
            ("Traceability Work from Server and IT", "Data collection, tracking & integration with server and IT systems."),
            ("Panel Wiring", "Design & wiring of control panels as per industrial standards."),
            ("Field Wiring", "Professional field wiring for sensors, actuators & instruments."),
        ]
        for i, (title, desc) in enumerate(scope_of_work):
            Service.objects.get_or_create(
                title=title,
                defaults={"description": desc, "category": ServiceCategory.SCOPE_OF_WORK, "order": i},
            )

        special_machines = [
            "Conveyor Setup", "Mechanical Fixture", "Assembly Machine",
            "Washing Machine", "Leak Test Machine",
        ]
        for i, name in enumerate(special_machines):
            Machine.objects.get_or_create(name=name, defaults={"order": i})

        industries = [
            "Packaging", "Food & Beverage", "Pharmaceutical", "Textile",
            "Automotive", "Electronics", "General Engineering",
        ]
        for i, name in enumerate(industries):
            Industry.objects.get_or_create(name=name, defaults={"order": i})

        brands = [
            "Siemens", "ABB", "Omron", "Keyence", "Delta",
            "Cognex", "Mitsubishi Electric",
        ]
        for i, name in enumerate(brands):
            # logo is required on the model -- add real logo files via admin after seeding
            Brand.objects.get_or_create(name=name, defaults={"order": i})

        self.stdout.write(self.style.SUCCESS("Seed data created. Add logos/icons via /admin/."))
