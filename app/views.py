from django.shortcuts import render
from app.models import GuestMessage

# Create your views here.
def home(request):
    return render(request, 'home.html')

def story(request):
    return render(request, 'story.html')

def gallery(request):
    return render(request, 'gallery.html')

def blessings(request):
    messages = GuestMessage.objects.all().order_by('display_order', 'created_at')
    
    context = {
        'messages': messages,
    }
    return render(request, 'blessings.html', context)