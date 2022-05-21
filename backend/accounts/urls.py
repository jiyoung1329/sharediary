from django.contrib import admin
from django.urls import path, include
from . import views
# from routers import router

urlpatterns = [
    # path('', include('knox.urls')),
    path('register/', views.RegisterAPI.as_view()),
    path('login/', views.LoginAPI.as_view()),
    path('user/', views.UserAPI.as_view()),
]


