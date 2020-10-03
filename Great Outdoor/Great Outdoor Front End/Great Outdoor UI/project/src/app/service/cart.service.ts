import { Injectable, OnInit } from '@angular/core';
import { Cart } from '../model/cart.model';
import { SalesReport } from '../model/sales-report.model';
import { CartCommunicationService } from './cart-communication.service';
import { OrderService } from './order.service';
import { ProductService } from './product.service';
import { SalesReportService } from './sales-report.service';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {


  // cartItem: Cart;
  cartItems: Array<Cart> = [];
  subTotal: number;
  totalQuantity: number;
  userId: string;

  constructor(public productService: ProductService, private cartCommunication: CartCommunicationService
    , private orderService: OrderService, public salesReportService: SalesReportService) {
    
      this.onLoad();
  }

  ngOnInit() {
    this.onLoad();
  }

  onLoad() {

    this.cartCommunication.getCartByUserId("11").subscribe(
      (cartItems) => {
        this.cartItems = cartItems;
        this.subTotal = this.findSubTotal();
        this.totalQuantity = this.findTotalQuantity();
        this.userId = cartItems[0].userId;
        console.log(cartItems);
      }, (error) => {
        console.log(error);
      });
  }

  // Yet To be tested
  addToCart(cartItem: Cart) {

    this.cartCommunication.addItemToCart(cartItem).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      });
    this.cartItems.unshift(cartItem);
  }


  deleteItem(index) {

    this.totalQuantity -= this.cartItems[index].quantity;
    this.subTotal -= this.cartItems[index].cartItemPrice;
    this.cartCommunication.deleteCartItem(this.cartItems[index].cartId).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      });
    this.cartItems.splice(index, 1);
  }


  findSubTotal() {
    return this.cartItems.map(a => a.cartItemPrice).reduce((a, b) => a + b, 0);
  }

  findTotalQuantity() {
    return this.cartItems.map(a => a.quantity).reduce((a, b) => a + b, 0);
  }

  findProduct(productId: string) {
    return this.productService.products.find(p => p.productId == productId);
  }

  clearCart() {
    this.cartCommunication.deleteCartlist(this.userId).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      });
    this.cartItems = [];
    this.subTotal = 0;
    this.totalQuantity = 0;
  }

  createOrder() {

    const products = this.cartItems.map(e => this.findProduct(e.productId).productName)
      .reduce((a, b) => a + ',' + b);
    this.orderService.addOrder(this.userId, products, this.subTotal,
      this.totalQuantity);
  }

  //unfinished
  updateReport() {

    for (let item of this.cartItems) {
      var tempProduct = this.findProduct(item.productId);
      var salesReport = new SalesReport(1, item.productId,
        tempProduct.productName, item.quantity, item.cartItemPrice);
      this.salesReportService.updateSalesReport(salesReport);
      this.productService.updateProductQuantity(tempProduct.productQuantity - item.quantity,
        tempProduct.productId);
      let index = this.productService.products.indexOf(tempProduct);
      this.productService.products[index].productQuantity = tempProduct.productQuantity - item.quantity;
    }
  }
}
