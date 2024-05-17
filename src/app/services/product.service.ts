import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private apiService: ApiService) {}

  getTotalOrder = (url: string): Observable<any> => {
    return this.apiService.getAll(url);
  };

  getTotalBill = (url: string): Observable<any> => {
    return this.apiService.getAll(url);
  };

  getProductPagination = (url: string, params: any): Observable<any> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  };

  getAllProduct = (url: string): Observable<any> => {
    return this.apiService.getAll(url);
  };

  addProduct = (url: string, body: any): Observable<any> => {
    return this.apiService.post(url, body, {});
  };

  editProduct = (url: string, body: any): Observable<any> => {
    return this.apiService.put(url, body, {});
  };

  deleteProduct = (url: string): Observable<any> => {
    return this.apiService.delete(url, {});
  };
}
