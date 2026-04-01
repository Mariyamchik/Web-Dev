import os
import django
import random

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
django.setup()

from api.models import Product, Category

def seed_data():
    cat_names = ['Headphones', 'Keyboards', 'Chairs', 'Mouses']
    categories = [Category.objects.get_or_create(name=name)[0] for name in cat_names]
    products_amount = 20

    for i in range(products_amount):
        Product.objects.create(
            name=f"Product {i+1}",
            price=round(random.uniform(50.0, 2000.0), 2),
            description=f"Description for product {i+1}",
            count=random.randint(1, 100),
            is_active=random.choice([True, False]),
            category=categories[i%4]
        )
    print(f"Created {products_amount} products")

if __name__ == '__main__':
    seed_data()