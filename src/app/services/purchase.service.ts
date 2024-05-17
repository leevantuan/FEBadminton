import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  constructor(private apiService: ApiService) {}

  getPurchasePagination = (url: string, params: any): Observable<any> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  };

  getAllPurchase = (url: string): Observable<any> => {
    return this.apiService.getAll(url);
  };

  addPurchase = (url: string, body: any): Observable<any> => {
    return this.apiService.post(url, body, {});
  };

  editPurchase = (url: string, body: any): Observable<any> => {
    return this.apiService.put(url, body, {});
  };

  deletePurchase = (url: string): Observable<any> => {
    return this.apiService.delete(url, {});
  };
}
