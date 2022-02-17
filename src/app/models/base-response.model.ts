// To parse this data:
//
//   import { Convert, BaseResponse } from "./file";
//
//   const baseResponse = Convert.toBaseResponse(json);

export interface BaseResponse<T> {
  statusCode?: number;
  message?:    string;
  result?:     T;
}

export interface Result<T> {
  content?:          T[];
  pageable?:         Pageable;
  totalPages?:       number;
  totalElements?:    number;
  last?:             boolean;
  numberOfElements?: number;
  first?:            boolean;
  size?:             number;
  number?:           number;
  sort?:             Sort;
  empty?:            boolean;
}

export interface Pageable {
  sort?:       Sort;
  pageNumber?: number;
  pageSize?:   number;
  offset?:     number;
  unpaged?:    boolean;
  paged?:      boolean;
}

export interface Sort {
  unsorted?: boolean;
  sorted?:   boolean;
  empty?:    boolean;
}


