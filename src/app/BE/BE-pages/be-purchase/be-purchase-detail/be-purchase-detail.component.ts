import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CategoryType,
  CreateProductType,
  ProductType,
  PurchaseType,
  SupplierType,
} from '../../be-product.model';
import { ProductService } from '../../../../services/product.service';
import { CategoryService } from '../../../../services/category.service';
import { environment } from '../../../../../environments/environment.development';
import { FormsModule } from '@angular/forms';
import { SupplierService } from '../../../../services/supplier.service';
import { PurchaseService } from '../../../../services/purchase.service';

@Component({
  selector: 'app-be-purchase-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './be-purchase-detail.component.html',
  styleUrls: [
    './be-purchase-detail.component.scss',
    '../../../../app.component.scss',
  ],
})
export class BEPurchaseDetailComponent {
  baseUrl = environment.baseUrl;

  @Input() idProduct: string = '';
  @Output() onClickCloseDetail = new EventEmitter();

  disabled = true;

  hiddenBtnUpdate = true;

  hiddenBtnDetail = false;

  listProduct: ProductType[] = [];

  listSupplier: SupplierType[] = [];

  purchase: PurchaseType = {
    id: '',
    quantity: 0,
    price: 0,
    productName: '',
    supplierName: '',
    crateAt: '',
    userName: '',
  };

  //modal
  priceValue: number = 0;
  quantityValue: number = 0;
  productNameValue: string = '1';
  supplierNameValue: string = '1';
  createValue: string = '1';
  userNameValue: string = '1';

  constructor(
    private supplierService: SupplierService,
    private productService: ProductService,
    private purchaseService: PurchaseService
  ) {}

  //Call API

  getByIdPurchase() {
    this.purchaseService
      .getAllPurchase(this.baseUrl + 'PurchaseOrder/' + this.idProduct)
      .subscribe((data) => {
        this.purchase = data;
        this.priceValue = data.price;
        this.quantityValue = data.quantity;
        this.supplierNameValue = data.supplierId;
        this.productNameValue = data.productId;
        this.createValue = data.createAt;
        this.userNameValue = data.userId;
      });
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

  deleteProduct(id: string) {
    this.productService
      .deleteProduct(this.baseUrl + 'Product/' + id)
      .subscribe((e) => {
        alert(e);
      });
  }

  ngOnInit(): void {
    this.getAllProduct();
    this.getAllSupplier();
  }

  ngOnChanges(): void {
    this.getByIdPurchase();
  }

  //button handle
  onClickCancel() {
    this.onClickCloseDetail.emit();
  }

  onClickDelete() {
    if (confirm('Bạn có chắc chắn muốn xóa chứ?')) {
      this.deleteProduct(this.idProduct);
      this.onClickCloseDetail.emit();
      window.location.reload();
    }
  }

  onClickEdit() {
    this.hiddenBtnUpdate = false;
    this.hiddenBtnDetail = true;
    this.disabled = false;
  }

  onClickCancelEdit() {
    this.hiddenBtnUpdate = true;
    this.hiddenBtnDetail = false;
    this.disabled = true;
    this.getByIdPurchase();
  }

  onClickUpdate() {}
}
