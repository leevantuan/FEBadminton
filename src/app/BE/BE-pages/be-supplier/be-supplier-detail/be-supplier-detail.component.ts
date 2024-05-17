import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSupplierType, SupplierType } from '../../be-product.model';
import { environment } from '../../../../../environments/environment.development';
import { FormsModule } from '@angular/forms';
import { SupplierService } from '../../../../services/supplier.service';

@Component({
  selector: 'app-be-supplier-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './be-supplier-detail.component.html',
  styleUrls: [
    './be-supplier-detail.component.scss',
    '../../../../app.component.scss',
  ],
})
export class BESupplierDetailComponent {
  baseUrl = environment.baseUrl;

  @Input() id: string = '';
  @Output() onClickCloseDetail = new EventEmitter();

  disabled = true;

  hiddenBtnUpdate = true;

  hiddenBtnDetail = false;

  supplier: SupplierType = {
    id: '',
    name: '',
    phoneNumber: '',
    address: '',
    email: '',
  };

  dataSupplier: CreateSupplierType = {
    name: '',
    phoneNumber: '',
    address: '',
    email: '',
  };

  //modal
  nameValue: string = '';
  phoneNumberValue: string = '';
  addressValue: string = '';
  emailValue: string = '';

  constructor(private supplierService: SupplierService) {}

  //Call API
  getByIdSupplier() {
    this.supplierService
      .getAllSupplier(this.baseUrl + 'Supplier/' + this.id)
      .subscribe((data) => {
        this.supplier = data;
        this.nameValue = data.name;
        this.phoneNumberValue = data.phoneNumber;
        this.addressValue = data.address;
        this.emailValue = data.email;
      });
  }

  editSupplier(data: CreateSupplierType, id: string) {
    this.supplierService
      .editSupplier(this.baseUrl + 'Supplier/' + id, data)
      .subscribe((e) => {
        alert(e);
      });
  }

  deleteProduct(id: string) {
    this.supplierService
      .deleteSupplier(this.baseUrl + 'Supplier/' + id)
      .subscribe((e) => {
        alert(e);
      });
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.getByIdSupplier();
  }

  //button handle
  onClickCancel() {
    this.onClickCloseDetail.emit();
  }

  onClickDelete() {
    if (confirm('Bạn có chắc chắn muốn xóa chứ?')) {
      this.deleteProduct(this.id);
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
    this.getByIdSupplier();
  }

  onClickUpdate() {
    this.dataSupplier.name = this.nameValue;
    this.dataSupplier.phoneNumber = this.phoneNumberValue;
    this.dataSupplier.address = this.addressValue;
    this.dataSupplier.email = this.emailValue;

    if (confirm('Bạn có chắc chắn muốn sửa chứ?')) {
      this.editSupplier(this.dataSupplier, this.id);
      this.hiddenBtnUpdate = true;
      this.hiddenBtnDetail = false;
      this.disabled = true;
      window.location.reload();
    }

    // this.onClickCloseDetail.emit();
  }
}
