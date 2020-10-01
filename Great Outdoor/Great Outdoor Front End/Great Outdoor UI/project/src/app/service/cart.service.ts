import { Injectable } from '@angular/core';
import { CartDetails } from '../components/cart/cart.component';
import { ProductData } from '../components/dashboard/product-management/product-management.component';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItem: CartDetails;
  cartItems = [];
  subTotal: number;
  totalQuantity: number;

  constructor(public productService: ProductService) {
    this.cartItems = [{ productName: 'Nike Hoody', productImg: "/assets/images/hoody.png", cartItemPrice: 2500, quantity: 5 },
    { productName: 'Maggy', productImg: "/assets/images/maggy.png", cartItemPrice: 240, quantity: 20 },
    ];
  }

  addToCart(element: CartDetails) {

    let product = this.productService.products.find(p => p.id == element.productId);

    let item = {
      productName: product.name,
      productImg: product.image,
      cartItemPrice: element['cartItemPrice'],
      quantity: element['quantity']
    }
    this.cartItems.unshift(item);
  }


  deleteItem(index) {

    this.totalQuantity -= this.cartItems[index].quantity;
    this.subTotal -= this.cartItems[index].cartItemPrice;
    this.cartItems.splice(index, 1);

  }
  findSubTotal() {
    return this.cartItems.map(a => a.cartItemPrice).reduce((a, b) => a + b, 0);
  }

  findTotalQuantity() {
    return this.cartItems.map(a => a.quantity).reduce((a, b) => a + b, 0);
  }

  clearCart() {
    //  this.cartItems=[];

  }
}
