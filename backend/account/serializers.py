from rest_framework import serializers
from .models import User
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model
from django.utils import timezone

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'nickname')

class RegisterSerializer(serializers.ModelSerializer) : 
    class Meta:
        model = User
        fields = ('email', 'nickname', 'password')
        extra_kwargs = {"password" : {"write_only" : True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            **validated_data
            )

        return user

class LoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        email = data.get("email", None)
        password = data.get("password", None)
        user = authenticate(email=email, password=password)
        print("serializer user", user)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")

        
