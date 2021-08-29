from rest_framework import serializers
from .models import Article

class DiarySerializer(serializers.ModelSerializer):
    class Meta:
    # title = models.CharField(max_length=100)
    # descriptions = models.TextField()
    # date = models.DateTimeField()

        fields = (
            'id',
            'title',
            'descriptions',
            'date',
        )
        model = Article