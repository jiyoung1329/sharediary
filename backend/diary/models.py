# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models

class Diary(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    date = models.DateTimeField() 
    place = models.TextField()
    # 사람 태그
    people = models.ManyToManyField('User', blank=True)
    # 해시태그
    tag = models.ManyToManyField('Tag', blank=True)
    
    # 작성자
    user = models.ForeignKey('User', on_delete=models.CASCADE)

    class Meta:
        db_table = 'diary'
        
class Tag(models.Model):
    tag = model.TextField()

    class Meta:
        db_table = 'tag'

