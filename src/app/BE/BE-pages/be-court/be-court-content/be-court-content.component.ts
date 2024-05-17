import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationComponent } from '../../../../FE/shares/pagination/pagination.component';
import { BeProductCreateComponent } from '../../be-product/be-product-create/be-product-create.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../../environments/environment.development';
import { CourtService } from '../../../../services/court.service';
import { CourtType } from '../../be-product.model';

@Component({
  selector: 'app-be-court-content',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule,
    PaginationComponent,
    BeProductCreateComponent,
    FormsModule,
  ],
  templateUrl: './be-court-content.component.html',
  styleUrls: [
    './be-court-content.component.scss',
    '../../../../app.component.scss',
  ],
})
export class BeCourtContentComponent {
  baseUrl = environment.baseUrl;

  listCourts: CourtType[] = [];

  totalPage: number = 0;

  pageNumber: number = 1;

  constructor(private courtService: CourtService) {}

  ngOnInit(): void {
    this.getAllCategory(this.pageNumber);
  }

  //Call API
  getAllCategory(pageNumber: number) {
    this.courtService.getAllCourt(this.baseUrl + 'Court').subscribe((data) => {
      this.listCourts = data;
    });
  }

  changePageNumber(event: any) {
    this.getAllCategory(event);
    this.pageNumber = event;
  }
  //modal
  @Output() onClickOpenCreate = new EventEmitter();
  @Output() onClickOpenDetail = new EventEmitter();

  onClickDetail(id: any) {
    this.onClickOpenDetail.emit(id);
  }

  showModal(): void {
    this.onClickOpenCreate.emit();
  }
}
