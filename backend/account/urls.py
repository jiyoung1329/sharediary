from django.contrib import admin
from django.urls import path, include
from .views import RegisterAPI, LoginAPI
# from routers import router

urlpatterns = [
    # path('', include('knox.urls')),
    path('register/', RegisterAPI.as_view()),
    path('login/', LoginAPI.as_view()),
]


