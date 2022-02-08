import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  productDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getById/${id}`);
  }

  createProduct(product: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/save`, product);
  }

  updateProduct(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updateProduct/${id}`, value);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteProduct/${id}`, { responseType: 'text' });
  }

  getProductList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAll`);
  }
}
