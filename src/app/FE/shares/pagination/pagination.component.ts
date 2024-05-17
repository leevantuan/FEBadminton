import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pagination',
  standalone: true,
  imports: [NgxPaginationModule, HttpClientModule, CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnChanges {
  POSTS: any = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 1;

  @Input() totalPage: number = 0;
  @Output() onChangePageNumber = new EventEmitter();

  constructor() {}

  ngOnChanges(): void {
    this.POSTS = [];
    for (let i = 1; i <= this.totalPage; i++) {
      this.POSTS.push(i);
    }
  }

  onTableDataChange(event: any): void {
    this.page = event;
    this.onChangePageNumber.emit(event);
    // console.log(event);
  }
}
