import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Login } from '../auth/login/types.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apiService: ApiService) {}

  login = (url: string, body: Login): Observable<any> => {
    return this.apiService.post(url, body, {});
  };
}
