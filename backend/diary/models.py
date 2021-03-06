# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from accounts.models import User

class Diary(models.Model):
    # title, content, date, place, people, tag, user
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True) 
    place = models.TextField()
    # 컬러 field
    color = models.CharField(max_length=50)
    # 일정 관련 필드
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    # 사람 태그
    people = models.ManyToManyField('accounts.User', blank=True, related_name="diary_people")
    # 해시태그 - 제거 예정
    tag = models.ManyToManyField('Tag', blank=True, related_name="diary_tag")
    
    # 작성자
    user = models.ForeignKey('accounts.User', on_delete=models.CASCADE, related_name="diary_user")

    # class Meta:
        # db_table = 'diary'
        # 
        
class Tag(models.Model):
    name = models.CharField(max_length=100, unique=True)

    class Meta:
        db_table = 'tag'


class Image(models.Model): 
    image = models.ImageField(blank=True, upload_to="%Y/%m/%d")
    diary = models.ForeignKey('Diary', on_delete=models.CASCADE, related_name="file_diary")
    
    
    
    
    