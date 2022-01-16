from rest_framework import serializers
from .models import *


class DiarySerializer(serializers.ModelSerializer):
    class Meta:

        fields = (
            'title',
            'content',
            'date',
            'place',
            'people',
            'tag',
            'user',
        )
        model = Diary

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'tag',
        )
        model = Tag