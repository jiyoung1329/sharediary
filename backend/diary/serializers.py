from unittest.util import _MAX_LENGTH
from wsgiref import validate
from pkg_resources import require
from rest_framework import serializers
from rest_framework.viewsets import ModelViewSet
from .models import Diary, Tag
from  account.serializers import UserSerializer

        
class TagSerializer(serializers.ModelSerializer) :
    
    class Meta : 
        model = Tag
        fields = ('name', )
        
        
class TagCreateModelViewSet(ModelViewSet): 
    serializer_class = TagSerializer
    
        
# title, content, date, place, people, tag, user
class DiarySerializer(serializers.ModelSerializer):
    tag = TagSerializer(many=True, required=False)
    people = UserSerializer(many=True, required=False)
    place = serializers.CharField(required=False)
    created_at = serializers.DateTimeField(read_only=True)
    user = UserSerializer(read_only=True)
    
    class Meta : 
        model = Diary
        fields = ['title', 'content', 'place', 'tag', 'people', 'user', 'created_at']
        
    def create(self, validated_data) : 
        print("validated_data", validated_data)
        
        # tag 없으면 새로 생성
        tags = validated_data.pop("tag")
        
        # 태그 내용 빼고 diary 생성
        diary = Diary.objects.create(**validated_data)
        
        tag_objects = []
        for tag in tags : 
            d = dict(tag)
            tag_object, is_create = Tag.objects.get_or_create(name=d['name'])
            tag_objects.append(tag_object)
            print(tag_object, is_create)
        diary.tag.set(tag_objects)
            
        return diary

# {
#     "title": "test",
#     "content": "test content",
#     "place": "place",
#     "tag": [],
#     "people": []
# }