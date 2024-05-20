import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSaleType } from '../../be-product.model';
import { environment } from '../../../../../environments/environment.development';
import { FormsModule } from '@angular/forms';
import { SaleService } from '../../../../services/sale.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { handleCreate } from './handle';

@Component({
  selector: 'app-be-sale-create',
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
  templateUrl: './be-sale-create.component.html',
  styleUrls: [
    './be-sale-create.component.scss',
    '../../../../app.component.scss',
  ],
})
export class BESaleCreateComponent {
  baseUrl = environment.baseUrl;

  dataSale: CreateSaleType = {
    name: '',
    startDay: '',
    endDay: '',
    precent: 0,
    isStatus: true,
  };

  constructor(private saleService: SaleService) {}

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  StartDateChange(event: any) {
    this.startDayValue = handleCreate(event.value);
  }
  EndDateChange(event: any) {
    this.endDayValue = handleCreate(event.value);
  }
  ngOnInit(): void {}

  changeCategory(value: any) {
    alert(value);
  }

  addSale(data: CreateSaleType) {
    this.saleService.addSale(this.baseUrl + 'Sale', data).subscribe((e) => {
      if (e == true) {
        alert(e);
      } else {
        alert('Nhập đầy đủ thông tin');
      }
    });
  }

  //modal
  nameValue: string = '';
  percentValue: number = 0;
  startDayValue: string = '';
  endDayValue: string = '';

  @Output() onClickCloseCreate = new EventEmitter();

  onClickCancel() {
    this.onClickCloseCreate.emit();
  }

  onClickCreate() {
    this.dataSale.name = this.nameValue;
    this.dataSale.precent = this.percentValue;
    this.dataSale.startDay = this.startDayValue;
    this.dataSale.endDay = this.endDayValue;

    // console.log(this.dataSale);
    this.addSale(this.dataSale);
    this.onClickCloseCreate.emit();
    window.location.reload();
  }
}
