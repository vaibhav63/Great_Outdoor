import { Injectable, OnInit } from '@angular/core';
import { Cart } from '../model/cart.model';
import { SalesReport } from '../model/sales-report.model';
import { CartCommunicationService } from '../communication/cart-communication.service';
import { OrderService } from './order.service';
import { ProductService } from './product.service';
import { SalesReportService } from './sales-report.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {

  cartItems: Array<Cart> = [];
  subTotal: number;
  totalQuantity: number;
  userId: string;

  constructor(public productService: ProductService, private cartCommunication: CartCommunicationService
    , private orderService: OrderService, public salesReportService: SalesReportService,
    private notification: NotificationService) {

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
      });
  }

  addToCart(cartItem: Cart) {

    this.cartCommunication.addItemToCart(cartItem).subscribe(
      (response) => {
        this.notification.showNotification('Cart Item Added Successfully !', '✓', 'success');
        this.cartItems.unshift(cartItem);
        this.subTotal = this.findSubTotal();
        this.totalQuantity = this.findTotalQuantity();

      },
      (error) => {
        this.notification.showNotification(error, 'X', 'error');
      });

  }


  deleteItem(index) {


    this.cartCommunication.deleteCartItem(this.cartItems[index].cartId).subscribe(
      (response) => {
        this.notification.showNotification(
          `Cart Item with Id:${this.cartItems[index].cartId} Deleted Successfully !!`, '✓', 'success');
        this.totalQuantity -= this.cartItems[index].quantity;
        this.subTotal -= this.cartItems[index].cartItemPrice;
        this.cartItems.splice(index, 1);
      },
      (error) => {
        this.notification.showNotification(error, 'X', 'error');
      });

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
        this.notification.showNotification('Cart Is Empty Now !!', '✓', 'success');
        this.cartItems = [];
        this.subTotal = 0;
        this.totalQuantity = 0;
      },
      (error) => {
        this.notification.showNotification(error, 'X', 'error');
      });

  }

  createOrder() {

    const products = this.cartItems.map(e => this.findProduct(e.productId).productName)
      .reduce((a, b) => a + ',' + b);
    this.orderService.addOrder(this.userId, products, this.subTotal,
      this.totalQuantity);
  }

  updateReport() {

    for (let item of this.cartItems) {
      var tempProduct = this.findProduct(item.productId);
      var salesReport = new SalesReport(1, item.productId,
        tempProduct.productName, item.quantity, item.cartItemPrice);
      this.salesReportService.updateSalesReport(salesReport);
      this.productService.updateProductQuantity(tempProduct.productQuantity - item.quantity,
        tempProduct.productId);
    }
  }
}
