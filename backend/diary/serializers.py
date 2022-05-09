from rest_framework import serializers
from .models import Diary, Tag
from  account.serializers import UserSerializer

        
class TagSerializer(serializers.ModelSerializer) :
    class Meta : 
        model : Tag
        fields = '__all__'
        
# title, content, date, place, people, tag, user
class DiarySerializer(serializers.ModelSerializer):
    tag = TagSerializer(many=True)
    people = UserSerializer(many=True)
    
    class Meta : 
        model = Diary
        fields = '__all__'
    