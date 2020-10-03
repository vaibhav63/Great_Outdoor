import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../model/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartCommunicationService {

  private baseUrl = 'http://localhost:8000/api/cart';
  constructor(private httpClient: HttpClient) { }

  getCartByUserId(userId: string): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>(`${this.baseUrl}/${userId}`);
  }

  addItemToCart(cartItem: Cart) {
    return this.httpClient.post(`${this.baseUrl}/addToCart`, cartItem);
  }

  deleteCartItem(cartId: number) {
    return this.httpClient.delete(`${this.baseUrl}/deleteCartItem/${cartId}`);
  }

  deleteCartlist(userId: string) {
    return this.httpClient.delete(`${this.baseUrl}/deleteCartlist/${userId}`);
  }
}
