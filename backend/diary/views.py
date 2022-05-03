import os
from django.conf import settings
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Diary
from .serializers import DiarySerializer

@api_view(['GET'])
def diary_list(request) :
    diarys = Diary.objects.all()
    serializer = DiarySerializer(diarys, many=True)
    return Response(serializer.data)
    
@api_view(['POST'])
def diary_create(request) : 
    serializer = DiarySerializer(data=request.data)
    if serializer.is_valid() : 
        serializer.save()
        return Response(serializer.data)

@api_view(['GET'])
def diary_detail(request, pk) : 
    diary = get_object_or_404(Diary, pk=pk)
    serializer = DiarySerializer(diary)
    return Response(serializer.data, status=201)

def diary_update(request, pk) : pass

def diary_delete(request, pk) : pass




# Create your views here.
