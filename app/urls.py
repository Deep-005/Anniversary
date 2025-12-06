from django.urls import path
from .import views 

urlpatterns = [
    path('', views.home, name='home'),
    path('story/', views.story, name='story'),
    path('gallery/', views.gallery, name='gallery'),
    path('blessings/', views.blessings, name='blessings'),
]