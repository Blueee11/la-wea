from django.urls import path
from .views import *

urlpatterns = [
    path('principal/', principal, name="principal")
]