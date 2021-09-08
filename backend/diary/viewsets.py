from rest_framework import viewsets
from .models import Article, Comment
from .serializers import ArticleSerializer, CommentSerializer


class ArticleViewSet(viewsets.ModelViewSet) : 
    serializer_class = ArticleSerializer

    def get_queryset(self) : 
        return Article.objects.all()

class CommentViewSet(viewsets.ModelViewSet) : 
    serializer_class = CommentSerializer

    def get_queryset(self) : 
        return Comment.objects.all()

# class ListDiary(generics.ListCreateAPIView):
    # queryset = Article.objects.all()
#     serializer_class = DiarySerializer

# class DetailDiary(generics.RetrieveUpdateDestroyAPIView) : 
#     queryset = Article.objects.all()
#     serializer_class = DiarySerializer



# Create your views here.
