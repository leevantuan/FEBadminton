import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseService } from '../../../../services/purchase.service';
import { ProductService } from '../../../../services/product.service';
import { SupplierService } from '../../../../services/supplier.service';
import {
  ProductType,
  PurchaseType,
  SaleType,
  SupplierType,
} from '../../be-product.model';
import { environment } from '../../../../../environments/environment.development';
import { FormsModule } from '@angular/forms';
import { SaleService } from '../../../../services/sale.service';
import { JsonPipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { handleCreate } from '../be-sale-create/handle';

@Component({
  selector: 'app-be-sale-detail',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    JsonPipe,
  ],
  templateUrl: './be-sale-detail.component.html',
  styleUrls: [
    './be-sale-detail.component.scss',
    '../../../../app.component.scss',
  ],
})
export class BESaleDetailComponent {
  baseUrl = environment.baseUrl;

  @Input() idProduct: string = '';
  @Output() onClickCloseDetail = new EventEmitter();

  disabled = true;

  hiddenBtnUpdate = true;

  hiddenBtnDetail = false;

  sale: SaleType = {
    id: '',
    name: '',
    startDay: '',
    endDay: '',
    precent: 0,
    isStatus: true,
  };

  //modal
  nameValue: string = '';
  percentValue: number = 0;
  startDayValue: string = '';
  endDayValue: string = '';
  isStatus: number = 0;

  constructor(private saleService: SaleService) {}

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  StartDateChange(event: any) {
    this.startDayValue = handleCreate(event.value);
  }
  EndDateChange(event: any) {
    this.endDayValue = handleCreate(event.value);
  }
  //Call API
  getByIdSale() {
    this.saleService
      .getAllSale(this.baseUrl + 'Sale/' + this.idProduct)
      .subscribe((data) => {
        this.sale = data;
        this.nameValue = data.name;
        this.percentValue = data.precent;
        this.startDayValue = data.startDay;
        this.endDayValue = data.endDay;
        this.isStatus = data.isStatus == true ? 1 : 0;
      });
  }
  editSale(data: SaleType, id: string) {
    this.saleService
      .editSale(this.baseUrl + 'Sale/' + id, data)
      .subscribe((e) => {
        alert(e);
      });
  }

  deleteProduct(id: string) {
    this.saleService.deleteSale(this.baseUrl + 'Sale/' + id).subscribe((e) => {
      alert(e);
    });
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.getByIdSale();
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
    this.getByIdSale();
  }

  onClickUpdate() {
    this.sale.name = this.nameValue;
    this.sale.precent = this.percentValue;
    this.sale.startDay = this.startDayValue;
    this.sale.endDay = this.endDayValue;
    this.sale.isStatus = this.isStatus == 1 ? true : false;
    if (confirm('Bạn có chắc chắn muốn sửa chứ?')) {
      this.editSale(this.sale, this.idProduct);
      this.hiddenBtnUpdate = true;
      this.hiddenBtnDetail = false;
      this.disabled = true;
      window.location.reload();
    }
    this.onClickCloseDetail.emit();
  }
}
