from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id')

class RegisterSerializer(serializers.ModelSerializer) : 
    class Meta:
        model = User
        fields = ('id', 'password')
        extra_kwards = {'password' : {'write_only' : True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(validated_data['id'],validated_data['password'])

        return user

class LoginSerializer(serializers.Serializer):
    id = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = autehnticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")

        
