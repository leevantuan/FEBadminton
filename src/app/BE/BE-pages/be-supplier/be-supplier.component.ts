import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BESupplierDetailComponent } from './be-supplier-detail/be-supplier-detail.component';
import { BESupplierCreateComponent } from './be-supplier-create/be-supplier-create.component';
import { BESupplierContentComponent } from './be-supplier-content/be-supplier-content.component';

@Component({
  selector: 'app-be-supplier',
  standalone: true,
  templateUrl: './be-supplier.component.html',
  styleUrls: ['./be-supplier.component.scss', '../../../app.component.scss'],
  imports: [
    CommonModule,
    BESupplierDetailComponent,
    BESupplierCreateComponent,
    BESupplierContentComponent,
  ],
})
export class BESupplierComponent {
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
