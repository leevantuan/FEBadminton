import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { UserService } from '../../services/user.service';
import { Login } from './types.model';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'login',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  baseUrl = environment.baseUrl;

  // Icon ------------------------------- Icon
  faEnvelope = faEnvelope;
  faLock = faLock;
  // Icon ------------------------------- Icon

  loginRequest: Login = {
    email: '',
    password: '',
  };

  constructor(private userService: UserService, private router: Router) {}

  changeInputEmail(element: any) {
    this.loginRequest.email = element.value;
  }

  changeInputPassword(element: any) {
    this.loginRequest.password = element.value;
  }

  onClickLogin() {
    this.userService
      .login(this.baseUrl + 'User/Login', this.loginRequest)
      .subscribe((data) => {
        alert(data.message);
        if (data.message == 'Success') {
          this.router.navigateByUrl('');
        }
      });
  }

  clickCreateAccount() {
    this.router.navigateByUrl('/register');
  }

  clickForgetAccount() {
    this.router.navigateByUrl('/forget');
  }
}
