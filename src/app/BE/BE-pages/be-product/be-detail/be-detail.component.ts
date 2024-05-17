import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CategoryType,
  CreateProductType,
  ProductType,
} from '../../be-product.model';
import { CategoryService } from '../../../../services/category.service';
import { ProductService } from '../../../../services/product.service';
import { environment } from '../../../../../environments/environment.development';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-be-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './be-detail.component.html',
  styleUrls: ['./be-detail.component.scss', '../../../../app.component.scss'],
})
export class BeDetailComponent implements OnInit, OnChanges {
  baseUrl = environment.baseUrl;

  @Input() idProduct: string = '';
  @Output() onClickCloseDetail = new EventEmitter();

  disabled = true;

  hiddenBtnUpdate = true;

  hiddenBtnDetail = false;

  listCategory: CategoryType[] = [];

  product: ProductType = {
    id: '',
    name: '',
    imgLink: '',
    quantity: 0,
    soldQuantity: 0,
    priceSale: 0,
    size: 0,
    brand: '',
    unit: '',
    isStatus: true,
    categoryId: '',
  };

  dataProduct: CreateProductType = {
    name: '',
    imgLink: '',
    quantity: 0,
    priceSale: 0,
    size: 0,
    brand: '',
    unit: '',
    isStatus: true,
    categoryId: '',
  };

  //modal
  nameValue: string = '';
  priceValue: number = 0;
  sizeValue: number = 0;
  quantityValue: number = 0;
  brandValue: string = '';
  imgLinkValue: string = '';
  unitValue: string = '';
  isStatus = 0;
  categoryId: string = '1';
  soldQuantity: number = 0;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  //Call API

  getAllCategory() {
    this.categoryService
      .getAllCategory(this.baseUrl + 'Category')
      .subscribe((data) => (this.listCategory = data));
  }

  getByIdProduct() {
    this.productService
      .getAllProduct(this.baseUrl + 'Product/' + this.idProduct)
      .subscribe((data) => {
        this.product = data;
        this.nameValue = data.name;
        this.priceValue = data.priceSale;
        this.sizeValue = data.size;
        this.quantityValue = data.quantity;
        this.brandValue = data.brand;
        this.imgLinkValue = data.imgLink;
        this.unitValue = data.unit;
        data.isStatus == true ? (this.isStatus = 1) : (this.isStatus = 0);
        this.categoryId = data.categoryId;
        this.soldQuantity = data.soldQuantity;
      });
  }

  editProduct(data: CreateProductType, id: string) {
    this.productService
      .editProduct(this.baseUrl + 'Product/' + id, data)
      .subscribe((e) => {
        alert(e);
      });
  }

  deleteProduct(id: string) {
    this.productService
      .deleteProduct(this.baseUrl + 'Product/' + id)
      .subscribe((e) => {
        alert(e);
      });
  }

  ngOnInit(): void {
    this.getAllCategory();
  }

  ngOnChanges(): void {
    this.getByIdProduct();
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
    this.getByIdProduct();
  }

  onClickUpdate() {
    this.dataProduct.name = this.nameValue;
    this.dataProduct.priceSale = this.priceValue;
    this.dataProduct.size = this.sizeValue;
    this.dataProduct.quantity = this.quantityValue;
    this.dataProduct.brand = this.brandValue;
    this.dataProduct.imgLink = this.imgLinkValue;
    this.dataProduct.unit = this.unitValue;
    this.dataProduct.categoryId = this.categoryId;
    this.dataProduct.isStatus = this.isStatus == 1 ? true : false;

    if (confirm('Bạn có chắc chắn muốn sửa chứ?')) {
      this.editProduct(this.dataProduct, this.idProduct);
      this.hiddenBtnUpdate = true;
      this.hiddenBtnDetail = false;
      this.disabled = true;
      window.location.reload();
    }

    // this.onClickCloseDetail.emit();
  }
}
