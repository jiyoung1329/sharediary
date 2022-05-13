from email import message
import os
from django.conf import settings
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication


from .models import Diary
from .serializers import DiarySerializer


class DiaryView(APIView) : 
    authentication_classes = (TokenAuthentication, )
    
    # 전체 게시물 조회
    def get(self, request) : 
        serializer = DiarySerializer(Diary.objects.all(), many=True)
        return Response(serializer.data)
    
    # 게시물 1개 조회
    def get(self, request, pk) :
        serializer = DiarySerializer(Diary.objects.get(pk=pk))
        return Response(serializer.data, status=200)
    
    # 게시물 생성
    def post(self, request, format=None) : 
        serializer = DiarySerializer(data=request.data)
        file_serializer = FileSerializer(data=request.FILES['file'])
        print(serializer)
        if serializer.is_valid() : 
            serializer.save(user=request.user)
            
            return Response(serializer.data, status=201)
        else :
            print("serializer error ")
            print(serializer.errors)
            return Response(serializer.data, status=400)
   
    # 게시물 삭제
    def delete(self, request, pk) : 
        model = Diary.objects.get(pk=pk)
        model.delete()
        return Response("delete complete", status=204)
    

