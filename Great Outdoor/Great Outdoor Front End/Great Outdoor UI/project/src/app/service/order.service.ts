import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OrderCommunicationService } from '../communication/order-communication.service';
import { Order } from '../model/order.model';
import { NotificationService } from './notification.service';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  subject = new Subject<any>();
  orders: Array<Order> = [];
  arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
    constructor(private orderCommunication: OrderCommunicationService,
    private notification:NotificationService) {

    orderCommunication.getAllOrders().subscribe(
      (orders) => {
        this.orders = orders;
        this.subject.next(orders);
      });
  }


  updateSchedule(index: number, dispatchDate: string, arrivalDate: string) {

    this.orders[index].dispatchDate = dispatchDate;
    this.orders[index].arrivalDate = arrivalDate;
    this.orderCommunication.updateOrderSchedule(this.orders[index]).subscribe(
      (response) => {
        this.notification.showNotification('Order Schedule Updated Successfully !!','✓','success');
      },
      (error) => {
       this.notification.showNotification(error,'X','error');
      });
    this.subject.next(this.orders);
  }

  deleteOrder(index: number) {

    this.orderCommunication.removeOrderById(this.orders[index].orderId).subscribe(
      (response) => {
        this.notification.showNotification
        (`Order With Id:${this.orders[index].orderId} Deleted Successfully !!`,'✓','success');
        this.orders.splice(index, 1);
        this.subject.next(this.orders);
      },
      (error) => {
        this.notification.showNotification(error,'X','error');
      });
   
  }

  addOrder(userId: string, products: string, totalPrice: number, totalQuantity: number) {

    var date1 = new Date();
    var date2 = new Date();
    date2.setDate(date2.getDate() + 3);
    var orderId = this.randomStr(15);
    const order = new Order(1, orderId, userId, products, totalPrice, totalQuantity, "001",
      date1.toISOString().substring(0, 10), date2.toISOString().substring(0, 10));
    this.orderCommunication.addOrder(order).subscribe(
      (response) => {
        this.notification.showNotification('Order Has Been Made !!','✓','success');
        this.orders.push(order);
        this.subject.next(this.orders);
      },
      (error) => {
        this.notification.showNotification(error,'X','error');
      });
    
  }

  randomStr(len) {
    var ans = '';
    for (var i = len; i > 0; i--) {
      ans +=
        this.arr[Math.floor(Math.random() * this.arr.length)];
    }
    return ans;
  }
}
