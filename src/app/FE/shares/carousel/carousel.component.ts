import { Component } from '@angular/core';

// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  slides = [
    {
      img: 'https://cdn.shopvnb.com/img/1920x640/uploads/slider/banner-sale-12_1695182579.webp',
    },
    {
      img: 'https://cdn.shopvnb.com/img/1920x640/uploads/slider/nanoflare-800_1698800723.webp',
    },
    {
      img: 'https://cdn.shopvnb.com/img/1920x640/uploads/slider/1000z-launch-website-banner_1695177885.webp',
    },
    {
      img: 'https://cdn.shopvnb.com/img/1920x640/uploads/slider/ynx-eclp-banner_1695178004.webp',
    },
  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 4,
    dots: true,
    infinite: true,
    speed: 300,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
