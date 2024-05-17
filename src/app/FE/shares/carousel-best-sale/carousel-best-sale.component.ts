import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'carousel-best-sale',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './carousel-best-sale.component.html',
  styleUrl: './carousel-best-sale.component.scss',
})
export class CarouselBestSaleComponent {
  slides = [
    {
      id: 1,
      name: 'Giày Cầu Lông Mizuno Gate Sky Plus 3 - Đen Hồng Chính Hãng (71GA234025)',
      price: 20000,
      img: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-mizuno-thunder-blade-z-trang-do-vang-chinh-hang-v1ga237045_1692993090.webp',
    },
    {
      id: 2,
      name: 'Giày Cầu Lông Mizuno Gate Sky Plus 3 - Đen Hồng Chính Hãng (71GA234025)',
      price: 20000,
      img: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-mizuno-gate-sky-plus-3-den-hong-chinh-hang-71ga234025_1692992825.webp',
    },
    {
      id: 3,
      name: 'Giày Cầu Lông Mizuno Gate Sky Plus 3 - Đen Hồng Chính Hãng (71GA234025)',
      price: 20000,
      img: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-mizuno-wave-claw-el-2-vang-hong-trang-chinh-hang-71ga228023-1_1693333435.webp',
    },
    {
      id: 4,
      name: 'Giày Cầu Lông Mizuno Gate Sky Plus 3 - Đen Hồng Chính Hãng (71GA234025)',
      price: 20000,
      img: 'https://cdn.shopvnb.com/img/300x300/uploads/san_pham/giay-cau-long-mizuno-wave-claw-el-2-do-cam-ma-jp-3.webp',
    },
    {
      id: 5,
      name: 'Giày Cầu Lông Mizuno Gate Sky Plus 3 - Đen Hồng Chính Hãng (71GA234025)',
      price: 20000,
      img: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-mizuno-gate-sky-plus-3-den-hong-chinh-hang-71ga234025_1692992825.webp',
    },
  ];
  slideConfig = {
    // slidesToShow: 4,
    // slidesToScroll: 1,
    // dots: true,
    // infinite: true,
    // speed: 300,
    // centerMode: true,
    // variableWidth: true,
    // autoplay: true,
    // autoplaySpeed: 20000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  slickInit(e: any) {
    // console.log('slick initialized');
  }

  breakpoint(e: any) {
    // console.log('breakpoint');
  }

  afterChange(e: any) {
    // console.log('afterChange');
  }

  beforeChange(e: any) {
    // console.log('beforeChange');
  }
}
