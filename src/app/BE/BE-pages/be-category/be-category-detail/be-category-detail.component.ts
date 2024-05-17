import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryType } from '../../be-product.model';
import { CategoryService } from '../../../../services/category.service';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-be-category-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './be-category-detail.component.html',
  styleUrls: [
    './be-category-detail.component.scss',
    '../../../../app.component.scss',
  ],
})
export class BeCategoryDetailComponent {
  baseUrl = environment.baseUrl;

  @Input() idCategory: string = '';
  @Output() onClickCloseDetail = new EventEmitter();

  disabled = true;

  hiddenBtnUpdate = true;

  hiddenBtnDetail = false;

  category: CategoryType = {
    id: '',
    name: '',
    isStatus: true,
  };

  dataCategory = {
    name: '',
    isStatus: true,
  };

  //modal
  nameValue: string = '';
  isStatus = 0;

  constructor(private categoryService: CategoryService) {}

  //Call API
  getByIdCategory() {
    this.categoryService
      .getAllCategory(this.baseUrl + 'Category/' + this.idCategory)
      .subscribe((data) => {
        this.category = data;
        this.nameValue = data.name;
        data.isStatus == true ? (this.isStatus = 1) : (this.isStatus = 0);
      });
  }

  editCategory(data: any, id: string) {
    this.categoryService
      .editCategory(this.baseUrl + 'Category/' + id, data)
      .subscribe((e) => {
        alert(e);
      });
  }

  deleteCategory(id: string) {
    this.categoryService
      .deleteCategory(this.baseUrl + 'Category/' + id)
      .subscribe((e) => {
        alert(e);
      });
  }

  ngOnChanges(): void {
    this.getByIdCategory();
  }

  //button handle
  onClickCancel() {
    this.onClickCloseDetail.emit();
  }

  onClickDelete() {
    if (confirm('Bạn có chắc chắn muốn xóa chứ?')) {
      this.deleteCategory(this.idCategory);
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
    this.getByIdCategory();
  }

  onClickUpdate() {
    this.dataCategory.name = this.nameValue;
    this.dataCategory.isStatus = this.isStatus == 1 ? true : false;
    if (confirm('Bạn có chắc chắn muốn sửa chứ?')) {
      this.editCategory(this.dataCategory, this.idCategory);
      this.hiddenBtnUpdate = true;
      this.hiddenBtnDetail = false;
      this.disabled = true;
      window.location.reload();
      console.log(this.dataCategory);
    }
  }
}
