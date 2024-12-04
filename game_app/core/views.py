from django.shortcuts import render
import os
from django.http import JsonResponse
# Create your views here.

def index_view(request):
    return render(request, 'index.html')

def get_text_file(request):
    file_path = os.path.join('static/text.txt')
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            lines = file.readlines()
        return JsonResponse({'text': [line.strip() for line in lines]})
    except FileNotFoundError:
        return JsonResponse({'error': 'Text file not found.'}, status=404)