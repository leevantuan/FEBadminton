import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../../environments/environment.development';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-be-category-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './be-category-create.component.html',
  styleUrls: [
    './be-category-create.component.scss',
    '../../../../app.component.scss',
  ],
})
export class BeCategoryCreateComponent {
  baseUrl = environment.baseUrl;

  data: any = {
    name: '',
    isStatus: true,
  };

  constructor(private categoryService: CategoryService) {}

  addCategory(data: any) {
    this.categoryService
      .addCategory(this.baseUrl + 'Category', data)
      .subscribe((e) => {
        alert(e);
      });
  }

  //modal
  nameValue: string = '';

  @Output() onClickCloseCreate = new EventEmitter();

  onClickCancel() {
    this.onClickCloseCreate.emit();
  }

  onClickCreate() {
    this.data.name = this.nameValue;

    this.addCategory(this.data);
    this.onClickCloseCreate.emit();
  }
}
