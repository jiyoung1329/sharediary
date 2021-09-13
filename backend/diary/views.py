import os
from django.shortcuts import render
from django.conf import settings
from rest_framework import generics

from rest_framework.viewsets import ReadOnlyModelViewSet, ModelViewSet


from .models import Article, Comment
from .serializers import ArticleSerializer, CommentSerializer


class ArticleViewSet(ModelViewSet) : 
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

article_list = ArticleViewSet.as_view({
    'get' : 'list',
    'post' : 'create',
})

article_detail = ArticleViewSet.as_view({
    'get' : 'retrieve',
    'put' : 'update',
    'patch' : 'partial_update',
    'delete' : 'destroy',
})



# Create your views here.
