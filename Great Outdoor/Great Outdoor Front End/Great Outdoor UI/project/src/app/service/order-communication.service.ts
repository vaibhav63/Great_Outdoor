import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderCommunicationService {

  private baseUrl = 'http://localhost:8000/api/order';
  
  constructor(private httpClient: HttpClient) { }

  getAllOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.baseUrl);
  }

  getOrderByUserId(userId: string) {
    return this.httpClient.get<Order[]>(`${this.baseUrl}/${userId}`);
  }

  addOrder(order: Order) {
    return this.httpClient.post(this.baseUrl, order);
  }

  updateOrderSchedule(order: Order) {
    return this.httpClient.put(`${this.baseUrl}/updateSchedule`, order);
  }

  removeAllOrders() {
    return this.httpClient.delete(`${this.baseUrl}/removeAll`);
  }

  removeOrderById(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/remove/${id}`);
  }
}
