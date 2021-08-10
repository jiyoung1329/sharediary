import os
from django.shortcuts import render
from django.conf import settings
from rest_framework import generics

from .models import Diary
from .serializers import DiarySerializer

class ListDiary(generics.ListCreateAPIView):
    queryset = Diary.objects.all()
    serializer_class = DiarySerializer

class DetailDiary(generics.RetrieveUpdateDestroyAPIView) : 
    queryset = Diary.objects.all()
    serializer_class = DiarySerializer



# Create your views here.
def index(request) : 
    pass    
