import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseType } from '../../be-product.model';
import { environment } from '../../../../../environments/environment.development';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationComponent } from '../../../../FE/shares/pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { PurchaseService } from '../../../../services/purchase.service';
import moment from 'moment';

@Component({
  selector: 'app-be-purchase-content',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, PaginationComponent, FormsModule],
  templateUrl: './be-purchase-content.component.html',
  styleUrls: [
    './be-purchase-content.component.scss',
    '../../../../app.component.scss',
  ],
})
export class BEPurchaseContentComponent {
  baseUrl = environment.baseUrl;

  listPurchase: PurchaseType[] = [];

  searchInput: string = '';

  totalPage: number = 0;

  pageNumber: number = 1;

  constructor(private purchaseService: PurchaseService) {}

  ngOnChanges(): void {
    console.log(this.searchInput);
  }

  ngOnInit(): void {
    this.getPageSize(this.searchInput);
    this.getAllPurchase(this.pageNumber, this.searchInput);
  }

  faSearch = faSearch;

  //Call API
  getAllPurchase(pageNumber: number, searchInput: string) {
    this.purchaseService
      .getPurchasePagination(this.baseUrl + 'PurchaseOrder', {
        pageNumber: pageNumber,
        pageSize: 10,
        filterQuery: searchInput,
      })
      .subscribe((data) => {
        this.listPurchase = [];
        data.map((item: PurchaseType) => {
          item.crateAt = moment.utc(item.crateAt).format('DD - MM - YYYY');
          this.listPurchase.push(item);
        });
      });
  }

  getPageSize(searchInput: string) {
    this.purchaseService
      .getPurchasePagination(this.baseUrl + 'PurchaseOrder/TotalPage', {
        pageSize: 5,
        filterQuery: searchInput,
      })
      .subscribe((data) => (this.totalPage = data));
  }

  changePageNumber(event: any) {
    this.getAllPurchase(event, this.searchInput);
    this.pageNumber = event;
  }
  //modal
  @Output() onClickOpenCreate = new EventEmitter();
  @Output() onClickOpenDetail = new EventEmitter();

  handleClickSearch() {
    this.getAllPurchase(this.pageNumber, this.searchInput);
    this.getPageSize(this.searchInput);
  }

  onClickDetail(id: any) {
    this.onClickOpenDetail.emit(id);
  }

  showModal(): void {
    this.onClickOpenCreate.emit();
  }
}
