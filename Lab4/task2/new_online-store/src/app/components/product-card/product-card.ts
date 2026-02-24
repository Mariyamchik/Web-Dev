import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product; // для передачи дочернему компоненту одной карточки из родительского листа

  getStars(rating: number) : string {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1:0; // если например чисол 4.7 -> то %1 берет 0,7
    const empty = 5 - full - half; // количество незаркашенных звезд

    return '*'.repeat(full) + '½'.repeat(rating) + '☆'.repeat(empty); //строка вывод на повторяющееся кол-во раз
  }

  shareOnWApp() : void {
    const l = `https://wa.me/?text=${encodeURIComponent('Check out this product: ' + this.product.link)}`;
    window.open('l','_blank'); // _blank - что бы по дефолту окрывалось в новом окне
  }

  shareOnTG() : void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open('url','_blank'); // _blank - что бы по дефолту окрывалось в новом окне

  }
}