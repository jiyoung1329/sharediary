from rest_framework import routers
from .viewsets import ArticleViewSet, CommentViewSet
router = router.SimpleRouter()
router.register(r'article', ArticleViewSet, basename="article")
router.register(r'comment', CommentViewSet, basename="comment")

