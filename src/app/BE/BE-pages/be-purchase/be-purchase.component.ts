import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BEPurchaseContentComponent } from './be-purchase-content/be-purchase-content.component';
import { BEPurchaseCreateComponent } from './be-purchase-create/be-purchase-create.component';
import { BEPurchaseDetailComponent } from './be-purchase-detail/be-purchase-detail.component';

@Component({
  selector: 'app-be-purchase',
  standalone: true,
  templateUrl: './be-purchase.component.html',
  styleUrls: ['./be-purchase.component.scss', '../../../app.component.scss'],
  imports: [
    CommonModule,
    BEPurchaseContentComponent,
    BEPurchaseCreateComponent,
    BEPurchaseDetailComponent,
  ],
})
export class BEPurchaseComponent {
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
