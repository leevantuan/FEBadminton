import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourtType } from '../../be-product.model';
import { environment } from '../../../../../environments/environment.development';
import { CourtService } from '../../../../services/court.service';

@Component({
  selector: 'app-be-court-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './be-court-detail.component.html',
  styleUrls: [
    './be-court-detail.component.scss',
    '../../../../app.component.scss',
  ],
})
export class BeCourtDetailComponent {
  baseUrl = environment.baseUrl;

  @Input() idCourt: string = '';
  @Output() onClickCloseDetail = new EventEmitter();

  disabled = true;

  hiddenBtnUpdate = true;

  hiddenBtnDetail = false;

  court: CourtType = {
    id: '',
    name: '',
    price: 0,
    isStatus: true,
  };

  dataCourt = {
    name: '',
    price: 0,
    description: '',
    isStatus: true,
  };

  //modal
  nameValue: string = '';
  priceValue: number = 0;
  isStatusValue = 0;

  constructor(private courtService: CourtService) {}

  //Call API
  getByIdCourt() {
    this.courtService
      .getAllCourt(this.baseUrl + 'Court/' + this.idCourt)
      .subscribe((data) => {
        this.court = data;
        this.nameValue = data.name;
        this.priceValue = data.price;
        this.dataCourt.description = data.description;
        data.isStatus == true
          ? (this.isStatusValue = 1)
          : (this.isStatusValue = 0);
      });
  }

  editCourt(data: any, id: string) {
    this.courtService
      .editCourt(this.baseUrl + 'Court/' + id, data)
      .subscribe((e) => {
        alert(e);
      });
  }

  ngOnChanges(): void {
    this.getByIdCourt();
  }

  //button handle
  onClickCancel() {
    this.onClickCloseDetail.emit();
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
    this.getByIdCourt();
  }

  onClickUpdate() {
    this.dataCourt.name = this.nameValue;
    this.dataCourt.price = this.priceValue;
    this.dataCourt.isStatus = this.isStatusValue == 1 ? true : false;
    if (confirm('Bạn có chắc chắn muốn sửa chứ?')) {
      this.editCourt(this.dataCourt, this.idCourt);
      this.hiddenBtnUpdate = true;
      this.hiddenBtnDetail = false;
      this.disabled = true;
      window.location.reload();
    }
  }
}
