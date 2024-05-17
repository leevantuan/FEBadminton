import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselComponent } from '../../shares/carousel/carousel.component';
import { CarouselBestSaleComponent } from '../../shares/carousel-best-sale/carousel-best-sale.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shares/footer/footer.component';
import { HeaderComponent } from '../../shares/header/header.component';
import { LogoesComponent } from '../../shares/logoes/logoes.component';
import { BookingContactComponent } from '../../shares/booking-contact/booking-contact.component';

@Component({
  selector: 'FE-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    FontAwesomeModule,
    CarouselComponent,
    CarouselBestSaleComponent,
    CommonModule,
    FooterComponent,
    HeaderComponent,
    LogoesComponent,
    BookingContactComponent,
  ],
})
export class HomeComponent {
  listCategories = [
    {
      id: 1,
      name: 'Vợt cầu lông',
      img: '../../../assets/category/1.png',
    },
    {
      id: 2,
      name: 'Áo cầu lông',
      img: '../../../assets/category/2.png',
    },
    {
      id: 3,
      name: 'Túi cầu lông',
      img: '../../../assets/category/3.png',
    },
    {
      id: 4,
      name: 'Váy cầu lông',
      img: '../../../assets/category/4.png',
    },
    {
      id: 5,
      name: 'Quần cầu lông',
      img: '../../../assets/category/5.png',
    },
    {
      id: 6,
      name: 'Giày cầu lông',
      img: '../../../assets/category/6.png',
    },
    {
      id: 7,
      name: 'Balo cầu lông',
      img: '../../../assets/category/7.png',
    },
    {
      id: 8,
      name: 'Phụ kiện',
      img: '../../../assets/category/8.png',
    },
  ];

  listProductVot = [
    {
      id: 1,
      name: 'Vợt Cầu Lông Mizuno Altair T329 - Đen Cam Trắng Chính Hãng',
      img: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-mizuno-altair-t329-den-cam-trang-chinh-hang_1713311614.webp',
      price: '2000000',
    },
    {
      id: 2,
      name: 'Vợt Cầu Lông Mizuno Altair T329 - Đen Cam Trắng Chính Hãng',
      img: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-mizuno-altair-t329-den-cam-trang-chinh-hang_1713311614.webp',
      price: '2000000',
    },
    {
      id: 3,
      name: 'Vợt Cầu Lông Mizuno Altair T329 - Đen Cam Trắng Chính Hãng',
      img: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-mizuno-altair-t329-den-cam-trang-chinh-hang_1713311614.webp',
      price: '2000000',
    },
    {
      id: 4,
      name: 'Vợt Cầu Lông Mizuno Altair T329 - Đen Cam Trắng Chính Hãng',
      img: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-mizuno-altair-t329-den-cam-trang-chinh-hang_1713311614.webp',
      price: '2000000',
    },
    {
      id: 5,
      name: 'Vợt Cầu Lông Mizuno Altair T329 - Đen Cam Trắng Chính Hãng',
      img: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-mizuno-altair-t329-den-cam-trang-chinh-hang_1713311614.webp',
      price: '2000000',
    },
    {
      id: 6,
      name: 'Vợt Cầu Lông Mizuno Altair T329 - Đen Cam Trắng Chính Hãng',
      img: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-mizuno-altair-t329-den-cam-trang-chinh-hang_1713311614.webp',
      price: '2000000',
    },
  ];
}
