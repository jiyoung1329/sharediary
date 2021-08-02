from django.db import models

# Create your models here.
class Diary(models.Model) : 
    title = models.CharField(max_length=100)
    descriptions = models.TextField()
    date = models.DateTimeField()
