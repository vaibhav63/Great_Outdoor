import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../model/product.model';
import { HandleErrorService } from '../handle_error/handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class ProductCommunicationService {

  private baseUrl = 'http://localhost:8000/api/products';

  constructor(private httpClient: HttpClient,private handleErrorService:HandleErrorService) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl);
  }

  getProductById(productId: string) {
   
    return this.httpClient.get<Product>(`${this.baseUrl}/${productId}`)
    .pipe(catchError(this.handleErrorService.handleError));
  }

  getProductsByCategory(category: string) {
    return this.httpClient.get<Product[]>(`${this.baseUrl}/category/${category}`)
    .pipe(catchError(this.handleErrorService.handleError));
  }

  productSearch(keyword: string) {
    return this.httpClient.get<Product[]>(`${this.baseUrl}/search/${keyword}`)
    .pipe(catchError(this.handleErrorService.handleError));
  }

  productFilter(maxPrice: number) {
    return this.httpClient.get<Product[]>(`${this.baseUrl}/filter/${maxPrice}`)
    .pipe(catchError(this.handleErrorService.handleError));
  }

  addProduct(product: Product) {
    return this.httpClient.post(`${this.baseUrl}`, product)
    .pipe(catchError(this.handleErrorService.handleError));
  }

  updateProduct(product: Product) {
    return this.httpClient.put(`${this.baseUrl}`, product)
    .pipe(catchError(this.handleErrorService.handleError));
  }

  updateProductQuantity(quantity: number, productId: string) {
    return this.httpClient.put(`${this.baseUrl}/updateQuantity/${quantity}/${productId}`, null)
    .pipe(catchError(this.handleErrorService.handleError));
  }

  deleteProduct(id: string) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`)
    .pipe(catchError(this.handleErrorService.handleError));
  }
}
