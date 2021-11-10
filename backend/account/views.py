from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from django.contrib.auth.models import User
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer
# Create your views here.
class RegisterAPI(generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = ()

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = AuthToken.objects.create(user)
        print(UserSerializer(user, context=self.get_serializer_context()))
        print("heelo")
        return Response(
            {
                "user" : UserSerializer(
                    user, context=self.get_serializer_context()
                    ).data,
                "token": token[1],
            }
        )

class LoginAPI(generics.GenericAPIView):
    permission_classes = ()
    def post(self, request, *args, **kwargs):
        print(request.data)
        serializer = self.get_serializer(data=request.data)
        print("serializer")
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data

        return Response({
            "user" : UserSerializer(user,
            context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })