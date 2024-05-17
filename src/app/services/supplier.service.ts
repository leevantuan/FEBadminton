import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  constructor(private apiService: ApiService) {}

  getSupplierPagination = (url: string, params: any): Observable<any> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  };

  getAllSupplier = (url: string): Observable<any> => {
    return this.apiService.getAll(url);
  };

  addSupplier = (url: string, body: any): Observable<any> => {
    return this.apiService.post(url, body, {});
  };

  editSupplier = (url: string, body: any): Observable<any> => {
    return this.apiService.put(url, body, {});
  };

  deleteSupplier = (url: string): Observable<any> => {
    return this.apiService.delete(url, {});
  };
}
