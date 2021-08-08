import os
from django.shortcuts import render
from django.conf import settings
from rest_framework import generics

import pyrebase
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

from .models import Diary
from .serializers import DiarySerializer
# config={
#     apiKey: "AIzaSyARCU6d82yWqVbrGyI-lzyEAawx0AKaS4E",
#     authDomain: "share-diary-63ba7.firebaseapp.com",
#     databaseURL: "https://share-diary-63ba7-default-rtdb.firebaseio.com/",
#     projectId: "share-diary-63ba7",
#     storageBucket: "share-diary-63ba7.appspot.com",
#     messagingSenderId: "657278486459",
#     appId: "1:657278486459:web:136b834439af0b7e9a669e",
#     measurementId: "G-36DX4LL11N",
# }


# firebase=pyrebase.initialize_app(config)
# authe = firebase.auth()
# database = firebase.database()

filepath = os.path.join(settings.KEY_PATH)+'\share-diary-63ba7-firebase-adminsdk-nk27a-1c2c37e865.json'
cred = credentials.Certificate(filepath)
firebase_admin.initialize_app(cred, {
    'databaseURL' : 'https://share-diary-63ba7-default-rtdb.firebaseio.com/',
})


class ListDiary(generics.ListCreateAPIView):
    queryset = Diary.objects.all()
    serializer_class = DiarySerializer

class DetailDiary(generics.RetrieveUpdateDestroyAPIView) : 
    queryset = Diary.objects.all()
    serializer_class = DiarySerializer




# Create your views here.
def index(request) : 
    # Firebase database 인증 및 앱 초기화
    print("HelloHleelel")
    
    dir = db.reference()
    dir.update({'wedsfsdf' : 'werwerwerwerwerwer'})
    
