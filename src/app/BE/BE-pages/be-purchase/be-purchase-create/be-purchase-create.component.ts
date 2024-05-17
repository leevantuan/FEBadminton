import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CreatePurchaseType,
  ProductType,
  SupplierType,
} from '../../be-product.model';
import { ProductService } from '../../../../services/product.service';
import { environment } from '../../../../../environments/environment.development';
import { FormsModule } from '@angular/forms';
import { SupplierService } from '../../../../services/supplier.service';
import { PurchaseService } from '../../../../services/purchase.service';
import moment from 'moment';

@Component({
  selector: 'app-be-purchase-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './be-purchase-create.component.html',
  styleUrls: [
    './be-purchase-create.component.scss',
    '../../../../app.component.scss',
  ],
})
export class BEPurchaseCreateComponent {
  baseUrl = environment.baseUrl;

  listProduct: ProductType[] = [];

  listSupplier: SupplierType[] = [];

  selectedValue: string = '1';

  dataPurchase: CreatePurchaseType = {
    quantity: 0,
    price: 0,
    productId: '',
    supplierId: '',
    crateAt: '',
    userId: '',
  };

  constructor(
    private productService: ProductService,
    private supplierService: SupplierService,
    private purchaseService: PurchaseService
  ) {}

  date = new Date().toISOString();

  ngOnInit(): void {
    this.getAllProduct();
    this.getAllSupplier();
    // alert(moment.utc(this.date).format('YYYY -MM-DD'));
  }

  changeCategory(value: any) {
    alert(value);
  }
  getAllProduct() {
    this.productService
      .getProductPagination(this.baseUrl + 'Product', {
        pageNumber: 1,
        pageSize: 999,
        filterQuery: '',
      })
      .subscribe((data) => (this.listProduct = data));
  }

  getAllSupplier() {
    this.supplierService
      .getSupplierPagination(this.baseUrl + 'Supplier', {
        pageNumber: 1,
        pageSize: 999,
        filterQuery: '',
      })
      .subscribe((data) => (this.listSupplier = data));
  }

  addPurchase(data: CreatePurchaseType) {
    this.purchaseService
      .addPurchase(this.baseUrl + 'PurchaseOrder', data)
      .subscribe((e) => {
        if (e == true) {
          alert(e);
        } else {
          alert('Nhập đầy đủ thông tin');
        }
      });
  }

  //modal
  priceValue: number = 0;
  quantityValue: number = 0;
  productNameValue: string = '1';
  supplierNameValue: string = '1';

  @Output() onClickCloseCreate = new EventEmitter();

  onClickCancel() {
    this.onClickCloseCreate.emit();
  }

  onClickCreate() {
    this.dataPurchase.price = this.priceValue;
    this.dataPurchase.quantity = this.quantityValue;
    this.dataPurchase.productId = this.productNameValue;
    this.dataPurchase.supplierId = this.supplierNameValue;
    this.dataPurchase.crateAt = moment.utc(this.date).format('YYYY-MM-DD');
    this.dataPurchase.userId = 'a0025ea0-eb8c-4584-8a17-884020910277';

    // console.log(this.dataPurchase);
    this.addPurchase(this.dataPurchase);
    this.onClickCloseCreate.emit();
    window.location.reload();
  }
}
