import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'forget',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './forget.component.html',
  styleUrl: './forget.component.scss',
})
export class ForgetComponent {
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
