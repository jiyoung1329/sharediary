from django.contrib import admin
from django.urls import path, include
from .views import RegisterAPI, LoginAPI
from knox import views as knox_views
# from routers import router

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
]
