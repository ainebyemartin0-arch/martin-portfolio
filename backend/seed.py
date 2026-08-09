import os, django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_api.settings')
django.setup()
from portfolio.models import Project, Skill

skills_data = [("Python", "Backend"), ("Django", "Backend"), ("Django REST Framework", "Backend"), ("JavaScript", "Frontend"), ("React", "Frontend"), ("Next.js", "Frontend"), ("HTML5", "Frontend"), ("CSS3", "Frontend"), ("PostgreSQL", "Database"), ("MySQL", "Database"), ("Huawei Routers & Switches", "Networking"), ("TCP/IP", "Networking"), ("CCTV Configuration", "Networking"), ("Git & GitHub", "Tools"), ("Postman", "Tools")]
for name, category in skills_data:
    Skill.objects.get_or_create(name=name, defaults={"category": category})

projects_data = [
    {"title": "BloodLink Uganda", "description": "Blood donor management app.", "tech_stack": "Django, DRF", "github_url": "https://github.com/ainebyemartin0-arch/BloodLink", "live_url": ""},
    {"title": "FootStyle", "description": "E-commerce app.", "tech_stack": "Django, JS", "github_url": "https://github.com/ainebyemartin0-arch/footstyle", "live_url": "https://footstyle.onrender.com"},
    {"title": "DanaGemz", "description": "Luxury e-commerce.", "tech_stack": "Django, HTML", "github_url": "https://github.com/ainebyemartin0-arch/danagemz", "live_url": "https://danagemz.onrender.com"}
]
for p in projects_data:
    Project.objects.update_or_create(title=p["title"], defaults=p)

print("Seed data applied successfully!")
