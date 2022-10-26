import { Injectable } from '@angular/core'
import { Product } from '../products'

@Injectable({
 providedIn: 'root'
})
export class CartService {
 private products: Product[] = []

 addToCard(product: Product) {
  this.products.push(product)
 }

 getItems() {
  return this.products
 }

 clearItems() {
  this.products = []
 }
}
