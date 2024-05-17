import { Component } from '@angular/core';
import { HeaderComponent } from '../../shares/header/header.component';
import { FooterComponent } from '../../shares/footer/footer.component';

@Component({
  selector: 'FE-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  imports: [HeaderComponent, FooterComponent],
})
export class ProfileComponent {}
