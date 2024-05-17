import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { GetRequest } from '../auth/login/types.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService) {}

  //========================================================//
  getAllDB = (url: string): Observable<any> => {
    return this.apiService.getAll(url);
  };

  getAccount = (url: string, params: GetRequest): Observable<any> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  };

  addAccount = (url: string, body: any): Observable<any> => {
    return this.apiService.post(url, body, {});
  };

  editAccount = (url: string, body: any): Observable<any> => {
    return this.apiService.put(url, body, {});
  };

  deleteAccount = (url: string): Observable<any> => {
    return this.apiService.delete(url, {});
  };

  getAll = (url: string, body: any): Observable<any> => {
    return this.apiService.put(url, body, {});
  };
}
