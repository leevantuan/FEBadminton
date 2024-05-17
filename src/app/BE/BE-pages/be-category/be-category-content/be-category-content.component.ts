import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationComponent } from '../../../../FE/shares/pagination/pagination.component';
import { BeProductCreateComponent } from '../../be-product/be-product-create/be-product-create.component';
import { FormsModule } from '@angular/forms';
import { CategoryType } from '../../be-product.model';
import { environment } from '../../../../../environments/environment.development';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-be-category-content',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule,
    PaginationComponent,
    BeProductCreateComponent,
    FormsModule,
  ],
  templateUrl: './be-category-content.component.html',
  styleUrls: [
    './be-category-content.component.scss',
    '../../../../app.component.scss',
  ],
})
export class BeCategoryContentComponent {
  baseUrl = environment.baseUrl;

  listCategories: CategoryType[] = [];

  totalPage: number = 0;

  pageNumber: number = 1;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getPageSize();
    this.getAllCategory(this.pageNumber);
  }

  //Call API
  getAllCategory(pageNumber: number) {
    this.categoryService
      .getCategoryPagination(this.baseUrl + 'Category/GetAll', {
        pageNumber: pageNumber,
        pageSize: 10,
      })
      .subscribe((data) => {
        this.listCategories = data;
      });
  }

  getPageSize() {
    this.categoryService
      .getCategoryPagination(this.baseUrl + 'Category/PageTotal', {
        pageSize: 10,
      })
      .subscribe((data) => (this.totalPage = data));
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
