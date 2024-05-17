import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryType, CreateProductType } from '../../be-product.model';
import { CategoryService } from '../../../../services/category.service';
import { environment } from '../../../../../environments/environment.development';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-be-product-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './be-product-create.component.html',
  styleUrls: [
    './be-product-create.component.scss',
    '../../../../app.component.scss',
  ],
})
export class BeProductCreateComponent implements OnInit {
  baseUrl = environment.baseUrl;

  listCategory: CategoryType[] = [];

  selectedValue: string = '1';

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

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getAllCategory();
  }

  changeCategory(value: any) {
    alert(value);
  }
  getAllCategory() {
    this.categoryService
      .getAllCategory(this.baseUrl + 'Category')
      .subscribe((data) => (this.listCategory = data));
  }

  addProduct(data: CreateProductType) {
    this.productService
      .addProduct(this.baseUrl + 'Product', data)
      .subscribe((e) => {
        if (e == true) {
          alert(e);
        } else {
          alert('Nhập đầy đủ thông tin');
        }
      });
  }

  //modal
  nameValue: string = '';
  priceValue: number = 0;
  sizeValue: number = 0;
  quantityValue: number = 0;
  brandValue: string = '';
  imgLinkValue: string = '';
  unitValue: string = '';

  @Output() onClickCloseCreate = new EventEmitter();

  onClickCancel() {
    this.onClickCloseCreate.emit();
  }

  onClickCreate() {
    this.dataProduct.name = this.nameValue;
    this.dataProduct.priceSale = this.priceValue;
    this.dataProduct.size = this.sizeValue;
    this.dataProduct.quantity = this.quantityValue;
    this.dataProduct.brand = this.brandValue;
    this.dataProduct.imgLink = this.imgLinkValue;
    this.dataProduct.unit = this.unitValue;
    this.dataProduct.categoryId = this.selectedValue;

    this.addProduct(this.dataProduct);
    this.onClickCloseCreate.emit();
  }
}
