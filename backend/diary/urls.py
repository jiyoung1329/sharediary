from django.contrib import admin
from django.urls import path, include
from . import views
# from routers import router

urlpatterns = [
    path('', views.DiaryView.as_view()),
    path('create/', views.DiaryView.as_view()),
    path('update/<int:pk>/', views.DiaryView.as_view()),
    path('delete/<int:pk>/', views.DiaryView.as_view()),
    path('detail/<int:pk>/', views.DiaryDetailView.as_view()),
    # path('update/<int:pk>', views.diary_update),
]
