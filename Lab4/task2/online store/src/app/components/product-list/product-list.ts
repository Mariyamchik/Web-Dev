import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItem } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})

export class ProductList {
    @Input() set products(value: Product[]) {
    this._products = [...value];
  }
  _products: Product[] = [];

  onDelete(id: number) {
    this._products = this._products.filter(p => p.id !== id);
  }
}