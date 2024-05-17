import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierType } from '../../be-product.model';
import { environment } from '../../../../../environments/environment.development';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationComponent } from '../../../../FE/shares/pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { SupplierService } from '../../../../services/supplier.service';

@Component({
  selector: 'app-be-supplier-content',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, PaginationComponent, FormsModule],
  templateUrl: './be-supplier-content.component.html',
  styleUrls: [
    './be-supplier-content.component.scss',
    '../../../../app.component.scss',
  ],
})
export class BESupplierContentComponent {
  baseUrl = environment.baseUrl;

  listSuppliers: SupplierType[] = [];

  searchInput: string = '';

  totalPage: number = 0;

  pageNumber: number = 1;

  constructor(private supplierService: SupplierService) {}

  ngOnChanges(): void {
    console.log(this.searchInput);
  }

  ngOnInit(): void {
    this.getPageSize(this.searchInput);
    this.getAllSupplier(this.pageNumber, this.searchInput);
  }

  faSearch = faSearch;

  //Call API
  getAllSupplier(pageNumber: number, searchInput: string) {
    this.supplierService
      .getSupplierPagination(this.baseUrl + 'Supplier', {
        pageNumber: pageNumber,
        pageSize: 10,
        filterQuery: searchInput,
      })
      .subscribe((data) => {
        this.listSuppliers = data;
      });
  }

  getPageSize(searchInput: string) {
    this.supplierService
      .getSupplierPagination(this.baseUrl + 'Supplier/TotalPage', {
        pageSize: 10,
        filterQuery: searchInput,
      })
      .subscribe((data) => (this.totalPage = data));
  }

  changePageNumber(event: any) {
    this.getAllSupplier(event, this.searchInput);
    this.pageNumber = event;
  }
  //modal
  @Output() onClickOpenCreate = new EventEmitter();
  @Output() onClickOpenDetail = new EventEmitter();

  handleClickSearch() {
    this.getAllSupplier(this.pageNumber, this.searchInput);
    this.getPageSize(this.searchInput);
  }

  onClickDetail(id: any) {
    this.onClickOpenDetail.emit(id);
  }

  showModal(): void {
    this.onClickOpenCreate.emit();
  }
}
