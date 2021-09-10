from django.contrib import admin
from django.urls import path, include
from . import views
# from routers import router

urlpatterns = [
    path('', views.ListArticle.as_view()),
]
