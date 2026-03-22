from django.shortcuts import render
from django.http import JsonResponse
from .models import Category, Product
# Create your views here.

def product_list(request):
    products = Product.objects.all()
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
        


