from django.shortcuts import render
from django.http import JsonResponse
from .models import Category, Product
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response 
from .serializers import CategorySerializer, ProductSerializer

# Create your views here.

def product_list(request):
    products = Product.objects.all()
    min_price = request.GET.get('min_price')
    max_price = request.GET.get('max_price')
    
    if min_price:
        products = products.filter(price__gte=min_price)
        
    if max_price:
        products = products.filter(price__lte=max_price)
    data = {
        'products': list(products.values())
    }
    return JsonResponse(data)

def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
        return JsonResponse({
            "id": product.id,
            "name": product.name,
            "price": product.price,
            "description": product.description,
            "count": product.count,
            "is_actve": product.is_active,
            "category_id": product.category_id
        })
    except Product.DoesNotExist:
        return JsonResponse({
            "error": "Product not found"
        }, status=404)
    
def category_list(request):
    categories = Category.objects.all()
    return JsonResponse({
        "categories": list(categories.values())
    })

def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
        return JsonResponse({
            "id": category.id,
            "name": category.name
        })
    except Category.DoesNotExist:
        return JsonResponse({
            "error": "Category not found"
        }, status=404)
    
def products_by_category(request, id):
    try:
        category = Category.objects.get(id=id)
        products = category.products.all()

        return JsonResponse({
            "products": list(products.values())
        })
    except Category.DoesNotExist:
        return JsonResponse({
            "error": "Category not found"
        }, status=404)
        

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = category.products.all()  # или product_set.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    