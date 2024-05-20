import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class SaleService {
  constructor(private apiService: ApiService) {}

  getSalePagination = (url: string, params: any): Observable<any> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  };

  getAllSale = (url: string): Observable<any> => {
    return this.apiService.getAll(url);
  };

  addSale = (url: string, body: any): Observable<any> => {
    return this.apiService.post(url, body, {});
  };

  editSale = (url: string, body: any): Observable<any> => {
    return this.apiService.put(url, body, {});
  };

  deleteSale = (url: string): Observable<any> => {
    return this.apiService.delete(url, {});
  };
}
