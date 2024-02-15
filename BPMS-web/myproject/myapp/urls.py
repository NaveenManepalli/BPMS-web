from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    # Define more URL patterns as needed
]
