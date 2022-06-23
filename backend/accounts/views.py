from django.shortcuts import get_object_or_404, render

from rest_framework import generics, permissions
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.response import Response


from django.contrib.auth import get_user_model
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer

User = get_user_model()

class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = str(Token.objects.create(user=user))
        return Response(
            {
                "user" : UserSerializer(
                    user, context=self.get_serializer_context()
                    ).data,
                "token": token,
            }
        )

class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token = str(Token.objects.get_or_create(user=user)[0])
        return Response({
            "user" : UserSerializer(user,
            context=self.get_serializer_context()).data,
            "token": token,
        })



# Header에
# Authorization : Token [token값]
# 추가하기
class UserAPI(generics.RetrieveAPIView):
    serializer_class = UserSerializer

    def get_object(self):
        print(self.request.user)
        return self.request.user