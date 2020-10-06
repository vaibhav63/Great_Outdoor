import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Order } from '../model/order.model';
import { HandleErrorService } from '../handle_error/handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class OrderCommunicationService {

  private baseUrl = 'http://localhost:8000/api/order';

  constructor(private httpClient: HttpClient, private handleErrorService: HandleErrorService) { }

  //getting all the order details
  getAllOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.baseUrl)
      .pipe(catchError(this.handleErrorService.handleError));
  }

  //getting order by user id
  getOrderByUserId(userId: string) {
    return this.httpClient.get<Order[]>(`${this.baseUrl}/${userId}`)
      .pipe(catchError(this.handleErrorService.handleError));
  }

  // adding order in database
  addOrder(order: Order) {
    return this.httpClient.post(this.baseUrl, order)
      .pipe(catchError(this.handleErrorService.handleError));
  }

  // updating order schedule for departure and arrival
  updateOrderSchedule(order: Order) {
    return this.httpClient.put(`${this.baseUrl}/updateSchedule`, order)
      .pipe(catchError(this.handleErrorService.handleError));
  }

  //removing all order details
  removeAllOrders() {
    return this.httpClient.delete(`${this.baseUrl}/removeAll`)
      .pipe(catchError(this.handleErrorService.handleError));
  }

  //removing order details by order id
  removeOrderById(id: string) {
    return this.httpClient.delete(`${this.baseUrl}/remove/${id}`)
      .pipe(catchError(this.handleErrorService.handleError));
  }
}
