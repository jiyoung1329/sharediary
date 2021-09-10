import os
from django.shortcuts import render
from django.conf import settings
from rest_framework import generics
from rest_framework import viewsets

from .models import Article, Comment
from .serializers import ArticleSerializer, CommentSerializer

class ListArticle(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

# class ArticleViewSet(viewsets.ModelViewSet) : 
#     serializer_class = ArticleSerializer

#     def get_queryset(self) : 
#         return Article.objects.all()


# class ListDiary(generics.ListCreateAPIView):
    # queryset = Article.objects.all()
#     serializer_class = DiarySerializer

# class DetailDiary(generics.RetrieveUpdateDestroyAPIView) : 
#     queryset = Article.objects.all()
#     serializer_class = DiarySerializer



# Create your views here.
