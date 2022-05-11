from wsgiref.validate import validator
from django.forms import CharField
from rest_framework import serializers
from rest_framework.validators import UniqueValidator, UniqueTogetherValidator

from django.contrib.auth import get_user_model

from .models import Diary, Tag
from account.models import User
from  account.serializers import UserNickNameSerializer

User = get_user_model()
        
class TagSerializer(serializers.ModelSerializer) :
    class Meta : 
        model = Tag
        fields = ('name', )
        extra_kwargs = {
            'name' : {'validators' : []}
        }
        
        
        
# title, content, date, place, people, tag, user
class DiarySerializer(serializers.ModelSerializer):
    tag = TagSerializer(many=True, required=False)
    people = UserNickNameSerializer(many=True, required=False)
    place = serializers.CharField(required=False)
    created_at = serializers.DateTimeField(read_only=True)
    user = UserNickNameSerializer(read_only=True)
    
    class Meta : 
        model = Diary
        fields = ['title', 'content', 'place', 'tag', 'people', 'user', 'created_at']
        
        
    def create(self, validated_data) : 
        print("validated_data", validated_data)
        
        # tag, people 정보 따로 뽑기
        tags = validated_data.pop("tag")
        peoples = validated_data.pop("people")
        
        # 태그 내용 빼고 diary 생성
        diary = Diary.objects.create(**validated_data)
        
        # diary-tag manytomany 연결
        tag_objects = []
        for tag in tags : 
            d = dict(tag)
            tag_object, is_create = Tag.objects.get_or_create(name=d['name'])
            tag_objects.append(tag_object)
            
        diary.tag.set(tag_objects)
        
        # diary-user manytomany 연결
        people_objects = []
        for people in peoples : 
            d = dict(people)
            people_object = User.objects.get(nickname=d['nickname'])
            people_objects.append(people_object)
        diary.people.set(people_objects)
        
        
            
        return diary

