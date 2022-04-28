from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser


# Create your models here.
# uid, createdAt, username, password
class User(AbstractUser) : 
    uid = models.CharField(max_length=20)
    email = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    



