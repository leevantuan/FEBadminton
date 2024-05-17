import { Component } from '@angular/core';
import { HeaderComponent } from '../../shares/header/header.component';
import { FooterComponent } from '../../shares/footer/footer.component';
import { LogoesComponent } from '../../shares/logoes/logoes.component';
import { BookingContactComponent } from '../../shares/booking-contact/booking-contact.component';
import { CarouselComponent } from '../../shares/carousel/carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';

export interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'FE-shop',
  standalone: true,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
  imports: [
    HeaderComponent,
    FooterComponent,
    LogoesComponent,
    BookingContactComponent,
    CarouselComponent,
    FontAwesomeModule,
    FormsModule,
    MatCheckboxModule,
    CommonModule,
  ],
})
export class ShopComponent {
  faSearch = faSearch;

  tasks: Task[] = [
    { name: 'Tất cả', completed: false },
    { name: '0 - 1.000.000 vnd', completed: false },
    { name: '1.000.000 - 2.000.000 vnd', completed: false },
    { name: '2.000.000 - 3.000.00.000 vnd', completed: false },
    { name: 'Trên 3.000.00.000 vnd', completed: false },
  ];

  products = [
    {
      id: 1,
      img: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victor-ryuga-d-taiwan_1712201755.webp',
      name: 'Vợt Cầu Lông Victor Thruster Ryuga D (Mã Taiwan)',
      price: 200000,
    },
    {
      id: 2,
      img: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victor-ryuga-d-taiwan_1712201755.webp',
      name: 'Vợt Cầu Lông Victor Thruster Ryuga D (Mã Taiwan)',
      price: 200000,
    },
    {
      id: 3,
      img: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victor-ryuga-d-taiwan_1712201755.webp',
      name: 'Vợt Cầu Lông Victor Thruster Ryuga D (Mã Taiwan)',
      price: 200000,
    },
    {
      id: 4,
      img: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victor-ryuga-d-taiwan_1712201755.webp',
      name: 'Vợt Cầu Lông Victor Thruster Ryuga D (Mã Taiwan)',
      price: 200000,
    },
    {
      id: 5,
      img: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victor-ryuga-d-taiwan_1712201755.webp',
      name: 'Vợt Cầu Lông Victor Thruster Ryuga D (Mã Taiwan)',
      price: 200000,
    },
    {
      id: 6,
      img: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victor-ryuga-d-taiwan_1712201755.webp',
      name: 'Vợt Cầu Lông Victor Thruster Ryuga D (Mã Taiwan)',
      price: 200000,
    },
    {
      id: 7,
      img: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victor-ryuga-d-taiwan_1712201755.webp',
      name: 'Vợt Cầu Lông Victor Thruster Ryuga D (Mã Taiwan)',
      price: 200000,
    },
    {
      id: 8,
      img: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victor-ryuga-d-taiwan_1712201755.webp',
      name: 'Vợt Cầu Lông Victor Thruster Ryuga D (Mã Taiwan)',
      price: 200000,
    },
    {
      id: 9,
      img: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-victor-ryuga-d-taiwan_1712201755.webp',
      name: 'Vợt Cầu Lông Victor Thruster Ryuga D (Mã Taiwan)',
      price: 200000,
    },
  ];

  updateAllComplete() {}
}
