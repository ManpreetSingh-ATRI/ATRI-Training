from django.shortcuts import render, redirect
from .models import Item


def index(request):
    if request.method == 'POST':
        Item.objects.create(text=request.POST['item_text'])
        return redirect('lists/index.html')

    items = Item.objects.all()
    return render(request, 'lists/index.html', {'items': items})


