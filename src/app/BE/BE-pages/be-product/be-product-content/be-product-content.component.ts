import { Component, EventEmitter, OnChanges, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationComponent } from '../../../../FE/shares/pagination/pagination.component';
import { BeProductCreateComponent } from '../be-product-create/be-product-create.component';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../../../../services/product.service';
import { ProductType } from '../../be-product.model';
import { environment } from '../../../../../environments/environment.development';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-be-product-content',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule,
    PaginationComponent,
    BeProductCreateComponent,
    FormsModule,
  ],
  templateUrl: './be-product-content.component.html',
  styleUrls: [
    './be-product-content.component.scss',
    '../../../../app.component.scss',
  ],
})
export class BeProductContentComponent implements OnChanges {
  baseUrl = environment.baseUrl;

  listProducts: ProductType[] = [];

  searchInput: string = '';

  totalPage: number = 0;

  pageNumber: number = 1;

  constructor(private productService: ProductService) {}

  ngOnChanges(): void {
    console.log(this.searchInput);
  }

  ngOnInit(): void {
    this.getPageSize(this.searchInput);
    this.getAllProduct(this.pageNumber, this.searchInput);
  }

  faSearch = faSearch;

  //Call API
  getAllProduct(pageNumber: number, searchInput: string) {
    this.productService
      .getProductPagination(this.baseUrl + 'Product', {
        pageNumber: pageNumber,
        pageSize: 5,
        filterQuery: searchInput,
      })
      .subscribe((data) => {
        this.listProducts = data;
      });
  }

  getPageSize(searchInput: string) {
    this.productService
      .getProductPagination(this.baseUrl + 'Product/PageSize', {
        pageSize: 5,
        filterQuery: searchInput,
      })
      .subscribe((data) => (this.totalPage = data));
  }

  changePageNumber(event: any) {
    this.getAllProduct(event, this.searchInput);
    this.pageNumber = event;
  }
  //modal
  @Output() onClickOpenCreate = new EventEmitter();
  @Output() onClickOpenDetail = new EventEmitter();

  handleClickSearch() {
    this.getAllProduct(this.pageNumber, this.searchInput);
    this.getPageSize(this.searchInput);
  }

  onClickDetail(id: any) {
    this.onClickOpenDetail.emit(id);
  }

  showModal(): void {
    this.onClickOpenCreate.emit();
  }
}
