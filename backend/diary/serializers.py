from rest_framework import serializers
from .models import Diary

# title, content, date, place, people, tag, user
class DiarySerializer(serializers.ModelSerializer):
    class Meta : 
        model = Diary
        fields = ('title', 'content', 'place')
