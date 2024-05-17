import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private apiService: ApiService) {}

  //get all
  getAllCategory = (url: string): Observable<any> => {
    return this.apiService.getAll(url);
  };
  //get pagination
  getCategoryPagination = (url: string, params: any): Observable<any> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  };
  //create
  addCategory = (url: string, body: any): Observable<any> => {
    return this.apiService.post(url, body, {});
  };
  //edit
  editCategory = (url: string, body: any): Observable<any> => {
    return this.apiService.put(url, body, {});
  };
  //delete
  deleteCategory = (url: string): Observable<any> => {
    return this.apiService.delete(url, {});
  };
}
