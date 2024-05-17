import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeProductCreateComponent } from './be-product-create/be-product-create.component';
import { BeProductContentComponent } from './be-product-content/be-product-content.component';
import { BeDetailComponent } from './be-detail/be-detail.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-be-product',
  standalone: true,
  templateUrl: './be-product.component.html',
  styleUrls: ['./be-product.component.scss', '../../../app.component.scss'],
  imports: [
    CommonModule,
    BeProductCreateComponent,
    BeProductContentComponent,
    BeDetailComponent,
  ],
})
export class BEProductComponent {
  isOpen = true;
  isOpenDetail = true;
  id: string = '';

  clickOpenModalCreate() {
    this.isOpen = false;
  }

  clickCloseModalCreate() {
    this.isOpen = true;
  }

  clickOpenModalDetail(id: any) {
    this.id = id;
    this.isOpenDetail = false;
  }

  clickCloseModalDetail() {
    this.isOpenDetail = true;
  }

  constructor(private router: Router) {}

  //click
  clickProduct() {
    this.router.navigateByUrl('/backend/product');
  }
  clickCategory() {
    this.router.navigateByUrl('/backend/category');
  }
  clickCourt() {
    this.router.navigateByUrl('/backend/court');
  }
  clickPurchase() {
    this.router.navigateByUrl('/backend/purchase');
  }
  clickSupplier() {
    this.router.navigateByUrl('/backend/supplier');
  }
  clickSale() {
    this.router.navigateByUrl('/backend/sale');
  }
  clickOrder() {
    this.router.navigateByUrl('/backend/order');
  }
  clickBooking() {
    this.router.navigateByUrl('/backend/booking');
  }
  clickBill() {
    this.router.navigateByUrl('/backend/bill');
  }
  clickUser() {
    this.router.navigateByUrl('/backend/user');
  }
}
