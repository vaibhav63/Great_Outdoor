import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductCommunicationService {

  private baseUrl = 'http://localhost:8000/api/products';

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl);
  }

  getProductById(productId: string) {
    let httpParams = new HttpParams().set('id', productId);
    return this.httpClient.get<Product>(`${this.baseUrl}/productId`, {
      params: httpParams
    });
  }

  getProductsByCategory(category: string) {
    return this.httpClient.get<Product[]>(`${this.baseUrl}/category/${category}`);
  }

  productSearch(keyword: string) {
    return this.httpClient.get<Product[]>(`${this.baseUrl}/search`);
  }

  productFilter(maxPrice: number) {
    return this.httpClient.get<Product[]>(`${this.baseUrl}/filter/${maxPrice}`);
  }

  addProduct(product: Product) {
    return this.httpClient.post(`${this.baseUrl}`, product);
  }

  updateProduct(product: Product) {
    return this.httpClient.put(`${this.baseUrl}`, product);
  }

  updateProductQuantity(quantity: number, productId: string) {
    return this.httpClient.put(`${this.baseUrl}/updateQuantity/${quantity}/${productId}`, null);
  }

  deleteProduct(id: string) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
}
