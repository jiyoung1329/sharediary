from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListDiary.as_view()),
    path('<int:pk>/', views.DetailDiary.as_view()),
]