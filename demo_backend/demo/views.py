from django.shortcuts import render


def index(request):
    context = dict()
    return render(request, 'demo/pageA.html', context)
