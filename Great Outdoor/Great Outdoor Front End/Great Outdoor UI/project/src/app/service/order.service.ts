import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OrderDetails } from '../components/dashboard/product-orders/product-orders.component';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  subject=new Subject<any>();
  orders:Array<OrderDetails>=[];

  constructor() { 

    this.orders = [
      {
        id: 1, orderId: 'ASD577DKN8', userId: '1', products: 'Hat(2),Shirt(3)',
         totalPrice: 23400,totalQuantity:5, addressId: '11', dispatchDate: '2020-09-21',
        arrivalDate:'2020-09-25'
      },
      {
        id: 2, orderId: 'JJB876BK7', userId: '2', products: 'Maggy(5),Coke(3)',
         totalPrice: 1200,totalQuantity:8, addressId: '12', dispatchDate: '2020-11-02',
        arrivalDate:'2020-11-04'
      },
      {
        id: 3, orderId: 'GLLH78HL8', userId: '3', products: 'Bat(1),Muffler(2)',
         totalPrice: 600,totalQuantity:3, addressId: '13', dispatchDate: '2020-02-12',
        arrivalDate:'2020-02-17'
      }
    ];
  }


  updateSchedule(index:number,dispatchDate:string,arrivalDate:string){

    this.orders[index].dispatchDate=dispatchDate;
    this.orders[index].arrivalDate=arrivalDate;
    this.subject.next(this.orders);
  }

  deleteOrder(index:number){

    this.orders.splice(index,1);
    this.subject.next(this.orders);
  }
}
