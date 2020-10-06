import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cart } from '../model/cart.model';
import { HandleErrorService } from '../handle_error/handle-error.service';

@Injectable({
  providedIn: 'root'
})

export class CartCommunicationService {

  private baseUrl = 'http://localhost:8000/api/cart';
  constructor(private httpClient: HttpClient, private handleErrorService: HandleErrorService) { }

  // getting cart items of particular user
  getCartByUserId(userId: string): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>(`${this.baseUrl}/${userId}`)
      .pipe(catchError(this.handleErrorService.handleError));
  }

  // adding item to cart 
  addItemToCart(cartItem: Cart) {
    return this.httpClient.post(`${this.baseUrl}/addToCart`, cartItem)
      .pipe(catchError(this.handleErrorService.handleError));
  }

  // deleting cart item using cart id
  deleteCartItem(cartId: number) {
    return this.httpClient.delete(`${this.baseUrl}/deleteCartItem/${cartId}`)
      .pipe(catchError(this.handleErrorService.handleError));
  }

  // deleting cart list using user id
  deleteCartlist(userId: string) {
    return this.httpClient.delete(`${this.baseUrl}/deleteCartlist/${userId}`)
      .pipe(catchError(this.handleErrorService.handleError));
  }
}
