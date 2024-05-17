import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourtService {
  constructor(private apiService: ApiService) {}

  //get all
  getAllCourt = (url: string): Observable<any> => {
    return this.apiService.getAll(url);
  };

  //edit
  editCourt = (url: string, body: any): Observable<any> => {
    return this.apiService.put(url, body, {});
  };
}
