from django.urls import path

from . import views

urlpatterns = [
    path('page-a/', views.page_a, name='page_a'),
    path('page-b/', views.page_b, name='page_b'),
]
