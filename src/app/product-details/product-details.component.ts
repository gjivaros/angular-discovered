import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CartService } from '../cart/cart.service'
import { products, Product } from '../products'

@Component({
 selector: 'app-product-details',
 templateUrl: './product-details.component.html',
 styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 product: Product | undefined
 constructor(private route: ActivatedRoute, private cartService: CartService) {}

 ngOnInit(): void {
  const params = this.route.snapshot.paramMap
  const productId = Number(params.get('id'))
  this.product = products.find((item) => item.id === productId)
 }

 buyProduct(product: Product) {
  console.log('product', product)
  this.cartService.addToCard(product)
  window.alert(`Product ${product.name} is added to cart`)
 }
}
