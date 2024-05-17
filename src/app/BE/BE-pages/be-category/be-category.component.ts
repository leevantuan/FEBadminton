import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BeCategoryContentComponent } from './be-category-content/be-category-content.component';
import { BeCategoryCreateComponent } from './be-category-create/be-category-create.component';
import { BeCategoryDetailComponent } from './be-category-detail/be-category-detail.component';

@Component({
  selector: 'app-be-category',
  standalone: true,
  templateUrl: './be-category.component.html',
  styleUrls: ['./be-category.component.scss', '../../../app.component.scss'],
  imports: [
    CommonModule,
    BeCategoryContentComponent,
    BeCategoryCreateComponent,
    BeCategoryDetailComponent,
  ],
})
export class BeCategoryComponent {
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
