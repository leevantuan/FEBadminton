import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../../environments/environment.development';
import { SaleType } from '../../be-product.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationComponent } from '../../../../FE/shares/pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { SaleService } from '../../../../services/sale.service';

@Component({
  selector: 'app-be-sale-content',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, PaginationComponent, FormsModule],
  templateUrl: './be-sale-content.component.html',
  styleUrls: [
    './be-sale-content.component.scss',
    '../../../../app.component.scss',
  ],
})
export class BESaleContentComponent {
  baseUrl = environment.baseUrl;

  listSale: SaleType[] = [];

  searchInput: string = '';

  totalPage: number = 0;

  pageNumber: number = 1;

  constructor(private saleService: SaleService) {}

  ngOnChanges(): void {
    console.log(this.searchInput);
  }

  ngOnInit(): void {
    this.getPageSize(this.searchInput);
    this.getAllSale(this.pageNumber, this.searchInput);
  }

  faSearch = faSearch;

  //Call API
  getAllSale(pageNumber: number, searchInput: string) {
    this.saleService
      .getSalePagination(this.baseUrl + 'Sale', {
        pageNumber: pageNumber,
        pageSize: 10,
        filterQuery: searchInput,
      })
      .subscribe((data) => {
        this.listSale = [];
        data.map((item: SaleType) => {
          item.startDay = moment.utc(item.startDay).format('DD - MM - YYYY');
          item.endDay = moment.utc(item.endDay).format('DD - MM - YYYY');
          this.listSale.push(item);
        });
      });
  }

  getPageSize(searchInput: string) {
    this.saleService
      .getSalePagination(this.baseUrl + 'Sale/TotalPage', {
        pageSize: 10,
        filterQuery: searchInput,
      })
      .subscribe((data) => (this.totalPage = data));
  }

  changePageNumber(event: any) {
    this.getAllSale(event, this.searchInput);
    this.pageNumber = event;
  }
  //modal
  @Output() onClickOpenCreate = new EventEmitter();
  @Output() onClickOpenDetail = new EventEmitter();

  handleClickSearch() {
    this.getAllSale(this.pageNumber, this.searchInput);
    this.getPageSize(this.searchInput);
  }

  onClickDetail(id: any) {
    this.onClickOpenDetail.emit(id);
  }

  showModal(): void {
    this.onClickOpenCreate.emit();
  }
}
