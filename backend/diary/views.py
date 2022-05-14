from email import message
import os
from django.conf import settings
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication


from .models import Diary, Image
from .serializers import DiarySerializer, ImageSerializer


class DiaryView(APIView) : 
    authentication_classes = (TokenAuthentication, )
    
    # 전체 게시물 조회
    def get(self, request) : 
        serializer = DiarySerializer(Diary.objects.all(), many=True)
        return Response(serializer.data)
    
    # 게시물 생성
    def post(self, request, format=None) : 
        serializer = DiarySerializer(data=request.data, context={"request" : request})
        
        print(request.data)    
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
    
class DiaryDetailView(APIView) : 
    authentication_classes = (TokenAuthentication, )
    
    # 게시물 1개 조회
    def get(self, request, pk) :
        diary = get_object_or_404(Diary, pk=pk)
        images = Image.objects.filter(diary=pk)
        
        image_serializers = []
        for image in images : 
            image_serializer = ImageSerializer(image)
            image_serializers.append(image_serializer)
        
        serializer = DiarySerializer(diary)
        return Response(serializer.data, status=200)

