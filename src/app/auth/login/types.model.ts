export interface GetRequest {
  [param: string]:
    | string
    | number
    | boolean
    | ReadonlyArray<string | number | boolean>;
  filterOn: string;
  filterQuery: string;
  sortBy: string;
  isAcsending: boolean;
  pageNumber: number;
  pageSize: number;
}

export interface Login {
  email: string;
  password: string;
}
