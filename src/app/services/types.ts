export interface PaginationType {
  [param: string]:
    | string
    | number
    | boolean
    | ReadonlyArray<string | number | boolean>;
  pageNumber: number;
  pageSize: number;
}
