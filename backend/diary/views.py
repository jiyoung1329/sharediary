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
    
    def get(self, request) : 
        serializer = DiarySerializer(Diary.objects.all(), many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None) : 
        serializer = DiarySerializer(data=request.data)
        
        if serializer.is_valid() : 
            serializer.save(user=request.user)
            return Response(serializer.data, status=201)
        else :
            print("serializer error ")
            print(serializer.errors)
            return Response(serializer.data, status=400)
    


class TagView(APIView) : 
    pass

# Create your views here.
