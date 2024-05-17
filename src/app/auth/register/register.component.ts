import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'register',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  faEnvelope = faEnvelope;
  faLock = faLock;

  constructor(private router: Router) {}

  changeInputEmail(element: any) {}

  changeInputPassword(element: any) {}

  changeInputConfirmPassword(element: any) {}

  onClickRegister() {}

  clickLoginHere() {
    this.router.navigateByUrl('/login');
  }
}
