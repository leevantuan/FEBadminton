import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSupplierType } from '../../be-product.model';
import { environment } from '../../../../../environments/environment.development';
import { FormsModule } from '@angular/forms';
import { SupplierService } from '../../../../services/supplier.service';

@Component({
  selector: 'app-be-supplier-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './be-supplier-create.component.html',
  styleUrls: [
    './be-supplier-create.component.scss',
    '../../../../app.component.scss',
  ],
})
export class BESupplierCreateComponent {
  baseUrl = environment.baseUrl;

  dataSupplier: CreateSupplierType = {
    name: '',
    phoneNumber: '',
    address: '',
    email: '',
  };

  constructor(private supplierService: SupplierService) {}

  ngOnInit(): void {}

  addSupplier(data: CreateSupplierType) {
    this.supplierService
      .addSupplier(this.baseUrl + 'Supplier', data)
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
  phoneNumberValue: string = '';
  addressValue: string = '';
  emailValue: string = '';

  @Output() onClickCloseCreate = new EventEmitter();

  onClickCancel() {
    this.onClickCloseCreate.emit();
  }

  onClickCreate() {
    this.dataSupplier.name = this.nameValue;
    this.dataSupplier.phoneNumber = this.phoneNumberValue;
    this.dataSupplier.address = this.addressValue;
    this.dataSupplier.email = this.emailValue;

    this.addSupplier(this.dataSupplier);
    this.onClickCloseCreate.emit();
    window.location.reload();
  }
}
