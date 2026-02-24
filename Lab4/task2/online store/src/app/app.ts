import { Component } from '@angular/core';
import { ProductList} from './components/product-list/product-list';
import { Productservices } from './Productservices';
import { inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  private productService = inject(Productservices);

  categories = this.productService.categories; // обращаемся внутрь сервера

  selectedCategoriesId : number | null = null; //просто создаем переменную куда будем передавать id

  selectedCategory(id:number) : void {
    this.selectedCategoriesId = id;
  } //функция присваивания 

  get selectedProducts(){
    return this.productService.getProductsByCategory(this.selectedCategoriesId!);
  } // метод геттер который проваливается внутрь сервиса -> берет метод getProductsByCategory и передает ему значение selectedCategoriesId
}