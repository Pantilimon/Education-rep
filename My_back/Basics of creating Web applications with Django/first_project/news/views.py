from django.shortcuts import render, redirect
from .models import Articles
from .forms import ArticlesForm
from django.views.generic import DeleteView, UpdateView, DetailView

# Create your views here.
def news_home(request):
    news = Articles.objects.all()
    return render(request, 'news/home.html', {'news': news})

class NewsDeleteView(DeleteView):
    model = Articles
    template_name = 'news/news-delete.html'
    success_url = '/news'

class NewsUpdateView(UpdateView):
    model = Articles
    template_name = 'news/create.html'

    form_class = ArticlesForm
    context_object_name = 'article'


class NewsDetailView(DetailView):
    model = Articles
    template_name = 'news/datails_view.html'
    context_object_name = 'article'


def create(request):
    error = ''
    if request.method == 'POST':
        form = ArticlesForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('news_home')
        else:
            error = "Форма заполнена неверно"



    form = ArticlesForm()

    data = {
        'error': error,
        'form': form
    }

    return render(request, 'news/create.html', data)