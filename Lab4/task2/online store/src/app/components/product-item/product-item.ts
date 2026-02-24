import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  @Input() product!: Product
  @Output() deleteProduct = new EventEmitter<number>()

  onLike(){
    this.product.likes++
  }

  onDelete(){
    this.deleteProduct.emit(this.product.id)
  }

  getStars(rating: number): string {
    const full = Math.floor(rating);        // целые звёзды
    const half = rating % 1 >= 0.5 ? 1 : 0; // половина звезды если дробная часть >= 0.5
    const empty = 5 - full - half;           // пустые звёзды до 5
    return '★'.repeat(full) + '½'.repeat(half) + '☆'.repeat(empty);
  }

  // открывает WhatsApp с предзаполненным сообщением и ссылкой на товар
  shareOnWhatsApp(): void {
    const url = `https://wa.me/?text=${encodeURIComponent('Посмотри этот товар: ' + this.product.link)}`;
    window.open(url, '_blank'); // _blank = открыть в новой вкладке
  }

  // открывает Telegram с предзаполненным сообщением и ссылкой на товар
  shareOnTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
}