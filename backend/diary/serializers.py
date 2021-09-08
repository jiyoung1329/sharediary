from rest_framework import serializers
from .models import Article
from .models import Comment

class ArticleSerializer(serializers.ModelSerializer):
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

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
    # title = models.CharField(max_length=100)
    # descriptions = models.TextField()
    # date = models.DateTimeField()
        fields = (
            'comment',
            'diary_diary',
        )
        model = Comment