from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    tech_stack = models.CharField(max_length=300)
    github_url = models.URLField(blank=True, null=True)
    live_url = models.URLField(blank=True, null=True)
    demo_url = models.URLField(blank=True, null=True, help_text="Link to YouTube video or MP4 demo clip")
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self): return self.title

class Skill(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    def __str__(self): return self.name
