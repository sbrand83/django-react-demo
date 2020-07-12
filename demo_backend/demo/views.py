from django.shortcuts import render


def page_a(request):
    context = dict()
    return render(request, 'demo/pageA.html', context)


def page_b(request):
    context = dict()
    return render(request, 'demo/pageB.html', context)
