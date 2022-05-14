from dataclasses import field
from wsgiref.validate import validator
from django.forms import CharField, ImageField
from rest_framework import serializers
from rest_framework.validators import UniqueValidator, UniqueTogetherValidator

from django.contrib.auth import get_user_model

from .models import Diary, Tag, Image
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

class ImageSerializer(serializers.ModelSerializer) : 
    class Meta : 
        model = Image
        fields = ('image', )
        extra_kwargs = {
            'image' : {'validators' : []}
        }
        
        
# title, content, date, place, people, tag, user
class DiarySerializer(serializers.ModelSerializer):
    tag = TagSerializer(many=True, required=False)
    people = UserNickNameSerializer(many=True, required=False)
    place = serializers.CharField(required=False)
    created_at = serializers.DateTimeField(read_only=True)
    user = UserNickNameSerializer(read_only=True)
    images = ImageSerializer(many=True, read_only=True, required=False)
    
    class Meta : 
        model = Diary
        fields = ['title', 'content', 'start_date', 'end_date', 'place', 'color', 'tag', 'people', 'user', 'images', 'created_at']
        
        
    def create(self, validated_data) : 
        print("validated_data", validated_data)
        # tag, people 정보 따로 뽑기
        tag_objects = []
        if "tag" in validated_data : 
            tags = validated_data.pop("tag")
            
            for tag in tags : 
                d = dict(tag)
                tag_object, is_create = Tag.objects.get_or_create(name=d['name'])
                tag_objects.append(tag_object)
                
        people_objects = []
        if "people" in validated_data : 
            peoples = validated_data.pop("people")
            
            for people in peoples : 
                d = dict(people)
                people_object = User.objects.get(nickname=d['nickname'])
                people_objects.append(people_object)
        
        # 태그 내용 빼고 diary 생성
        diary = Diary.objects.create(**validated_data)
        
        # diary-tag manytomany 연결
        if tag_objects : diary.tag.set(tag_objects)
        
        # diary-user manytomany 연결
        if people_objects : diary.people.set(people_objects)
        
        # 이미지 파일 생성
        images = self.context['request'].FILES
        print(images)
        print(dict(images))
        for image in images.getlist('images') : 
            image_object = Image.objects.create(diary=diary, image=image)
        
        
        return diary

