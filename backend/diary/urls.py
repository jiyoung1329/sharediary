from django.contrib import admin
from django.urls import path, include
from . import views
# from routers import router

urlpatterns = [
    path('', views.DiaryView.as_view()),
    path('create/', views.DiaryView.as_view()),
    # path('detail/<int:pk>', views.diary_detail),
    # path('update/<int:pk>', views.diary_update),
    # path('delete/<int:pk>', views.diary_delete),
    # path('<int:pk>/', views.article_detail),
]
